"use client";

import { cn } from "@/lib/util";
import { ObjectFit } from "@/types/back";
import { BasicParams } from "@/types/front";
import Image from "next/image";
import Link from "next/link";

interface Params extends BasicParams {
  pic: string;
  alt: string;
  link?: string;
  rounded?: boolean;
  fit?: ObjectFit;
}

export default function ImageContainer({
  pic,
  alt,
  link,
  rounded,
  className,
  fit = ObjectFit.COVER,
}: Params) {
  const imageClasses = cn("object-cover", {
    "object-contain": fit === ObjectFit.CONTAIN,
    "object-fill": fit === ObjectFit.FILL,
  });

  const ImageComponent = (
    <Image src={pic} alt={alt} fill className={imageClasses} priority />
  );

  return (
    <div
      className={cn(
        `relative overflow-hidden`,
        {
          "rounded-full": rounded,
        },
        className
      )}
    >
      {link ? (
        <Link href={link} target="_blank" passHref>
          {ImageComponent}
        </Link>
      ) : (
        ImageComponent
      )}
    </div>
  );
}
