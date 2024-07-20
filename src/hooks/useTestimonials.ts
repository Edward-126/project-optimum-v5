"use client";

import { useEffect, useState } from "react";
import { client } from "@/client";

export interface Testimonial {
  _id: string;
  name: string;
  occupation: string;
  testimony: string;
  image: string;
}

export const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const query = '*[_type == "testimonial"] | order(order asc)';
      const data = await client.fetch(query);
      setTestimonials(data);
      setLoading(false);
    };

    fetchTestimonials();
  }, []);

  return { testimonials, loading };
};
