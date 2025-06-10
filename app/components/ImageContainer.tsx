"use client";

import { useResponsiveSize } from "@/lib/hooks";
import { cn } from "@/lib/util";
import { ObjectFit } from "@/types/back";
import { BasicParams } from "@/types/front";
import Image from "next/image";
import Link from "next/link";

interface Params extends BasicParams {
  w: number;
  h: number;
  unit?: string;
  mobileScale?: number;
  pic: string;
  alt: string;
  link?: string;
  rounded?: boolean;
  fit?: ObjectFit;
}

export default function ImageContainer({
  w,
  h,
  unit = "px",
  mobileScale = 0.75,
  pic,
  alt,
  link,
  rounded,
  className,
  fit = ObjectFit.COVER,
}: Params) {
  const { effectiveWidth, effectiveHeight } = useResponsiveSize(
    w,
    h,
    mobileScale,
    768
  );

  const imageClasses = cn("object-cover", {
    "object-contain": fit === ObjectFit.CONTAIN,
    "object-fill": fit === ObjectFit.FILL,
  });

  return (
    <div
      className={cn(
        `relative overflow-hidden`,
        {
          "rounded-full": rounded,
        },
        className
      )}
      style={{
        width: `${effectiveWidth}${unit}`,
        height: `${effectiveHeight}${unit}`,
      }}
    >
      {link ? (
        <Link href={link} target="_blank" passHref>
          <Image src={pic} alt={alt} fill className={imageClasses} priority />
        </Link>
      ) : (
        <Image src={pic} alt={alt} fill className={imageClasses} priority />
      )}
    </div>
  );
}
