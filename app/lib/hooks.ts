import { useState, useEffect } from "react";

export function useResponsiveSize(
  baseWidth: number,
  baseHeight: number,
  mobileScaleFactor: number = 0.75,
  breakpoint: number = 768
) {
  const [effectiveWidth, setEffectiveWidth] = useState(
    baseWidth * mobileScaleFactor
  );
  const [effectiveHeight, setEffectiveHeight] = useState(
    baseHeight * mobileScaleFactor
  );

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined" && window.innerWidth >= breakpoint) {
        setEffectiveWidth(baseWidth);
        setEffectiveHeight(baseHeight);
      } else if (typeof window !== "undefined") {
        setEffectiveWidth(baseWidth * mobileScaleFactor);
        setEffectiveHeight(baseHeight * mobileScaleFactor);
      }
    };

    handleResize();

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, [baseWidth, baseHeight, mobileScaleFactor, breakpoint]);

  return { effectiveWidth, effectiveHeight };
}
