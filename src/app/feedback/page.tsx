"use client";

import { client, urlFor } from "@/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { TiHome } from "react-icons/ti";

const formSchema = z.object({
  name: z.string().min(4, {
    message: "Name must be at least 4 characters.",
  }),

  occupation: z.string().min(4, {
    message: "Occupation must be at least 4 characters.",
  }),

  testimony: z
    .string()
    .min(10, {
      message: "Testimony must be at least 10 characters.",
    })
    .max(160, {
      message: "Testimony must not be longer than 160 characters.",
    }),
  image: z.instanceof(File).optional(),
});

const page = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      occupation: "",
      testimony: "",
      image: undefined,
    },
  });

  async function insertDataIntoSanity(formData: any) {
    try {
      const sanityData = {
        _type: "testimonial",
        name: formData.name,
        image: formData.image,
        occupation: formData.occupation,
        testimony: formData.testimony,
      };

      if (formData.image) {
        console.log("Uploading image...");
        const imageAsset = await client.assets.upload("image", formData.image);
        sanityData.image = {
          _type: "image",
          asset: {
            _type: "reference",
            _ref: imageAsset._id,
          },
        };
        console.log("Image uploaded successfully:", imageAsset);
      }

      const response = await client.create(sanityData);
      console.log("Data inserted successfully!", response);
      setLoading(false);
      setIsFormSubmitted(true);
      return response;
    } catch (error: any) {
      console.error("Error inserting data", error.message);
      setLoading(false);
      setErrorMessage(
        "An error occurred while submitting your feedback. Please try again.",
      );
      setShowErrorModal(true);
      throw error;
    }
  }

  function onSubmit(formData: any) {
    setLoading(true);
    insertDataIntoSanity(formData);
  }

  const handleCloseErrorModal = () => {
    setShowErrorModal(false);
    setErrorMessage("");
  };

  return (
    <>
      <div className="min-h-screen">
        <div className="mt-[127px]">
          {!isFormSubmitted ? (
            <div className="">
              <div className="text-center">
                <h2>
                  We Need Your <span className="text-primary">Feedback</span>
                </h2>
                <p>Share Your Thoughts, Shape Your Gym</p>
              </div>
              <div className="mt-5 h-full">
                <div className="flex w-full items-center justify-center">
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="h-full w-full space-y-5"
                    >
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input className="" {...field} />
                            </FormControl>
                            <FormDescription>
                              This is your display name.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="occupation"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Occupation/Job</FormLabel>
                            <FormControl>
                              <Input className="" {...field} />
                            </FormControl>
                            <FormDescription>
                              This will be collected for further reference.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="testimony"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Feedback</FormLabel>
                            <FormControl>
                              <Textarea className="min-h-[140px]" {...field} />
                            </FormControl>
                            <FormDescription>
                              This is your testimony.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="image"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Upload your image</FormLabel>
                            <FormControl>
                              <Input
                                type="file"
                                accept="image/*"
                                onChange={(e) =>
                                  field.onChange(
                                    e.target.files
                                      ? e.target.files[0]
                                      : undefined,
                                  )
                                }
                              />
                            </FormControl>
                            <FormDescription>
                              Optional: Upload an image related to your
                              feedback.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="pt-2">
                        <Button type="submit">
                          {!loading ? "Send Feedback" : "Sending..."}
                        </Button>
                      </div>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          ) : (
            <div className="-mt-[127px] flex h-dvh flex-col items-center justify-center text-center">
              <div className="mb-1 space-y-4">
                <div className="space-y-1.5">
                  <h1>
                    Thank you for your{" "}
                    <span className="text-primary">feedback</span>
                  </h1>
                  <p>Your Feedback Fuels Our Improvement. Thank You!</p>
                </div>
                <Button asChild>
                  <Link href="/">
                    <TiHome className="mr-2" />
                    Back to Home
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {showErrorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-70">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="mx-6 w-auto max-w-lg rounded-md border border-zinc-50/15 bg-zinc-950 p-8 text-center"
          >
            <h4 className="mb-2 text-2xl font-semibold text-gray-100">Error</h4>
            <p className="text-md mb-4 text-gray-200">{errorMessage}</p>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={handleCloseErrorModal}
              className="mt-4 w-full rounded-lg bg-red-600 p-2 px-4 text-gray-50 drop-shadow"
            >
              Close
            </motion.button>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default page;
