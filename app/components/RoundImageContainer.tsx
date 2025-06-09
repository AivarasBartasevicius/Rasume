"use client";

import { useResponsiveSize } from "@/lib/hooks";
import clsx from "clsx";
import Image from "next/image";

interface RoundImage {
  w: number;
  h: number;
  pic: string;
  alt: string;
}

export default function RoundImageContainer({ w, h, pic, alt }: RoundImage) {
  const { effectiveWidth, effectiveHeight } = useResponsiveSize(
    w,
    h,
    0.75,
    768
  );

  return (
    <div
      className={clsx(
        `relative rounded-full overflow-hidden mb-4 shadow-md md:mb-5`
      )}
      style={{
        width: `${effectiveWidth}px`,
        height: `${effectiveHeight}px`,
      }}
    >
      <Image src={pic} alt={alt} fill className="object-cover" priority />
    </div>
  );
}
