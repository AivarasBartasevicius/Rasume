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
      if (window.innerWidth >= breakpoint) {
        setEffectiveWidth(baseWidth);
        setEffectiveHeight(baseHeight);
      } else {
        setEffectiveWidth(baseWidth * mobileScaleFactor);
        setEffectiveHeight(baseHeight * mobileScaleFactor);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [baseWidth, baseHeight, mobileScaleFactor, breakpoint]);

  return { effectiveWidth, effectiveHeight };
}
