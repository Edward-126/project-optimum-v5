import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="flex h-screen min-h-dvh flex-col items-center justify-center gap-10">
        <Image
          width={527.09}
          height={350}
          priority={true}
          src="/assets/404.svg"
          alt="404 Image"
          className="pointer-events-none h-[300px] select-none"
        />
        <div className="">
          <h2>Page Not Found</h2>
          <p>Looks like you took a wrong turn.</p>
          <div className="mt-4 flex justify-center">
            <Button asChild>
              <Link href="/">Go Back Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
