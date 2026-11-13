"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

export function LoadingImage({ alt, className = "", onLoad, onError, ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <span className={`image-skeleton${loaded ? " is-hidden" : ""}`} aria-hidden="true" />
      <Image
        {...props}
        alt={alt}
        className={`skeleton-image${loaded ? " is-loaded" : ""}${className ? ` ${className}` : ""}`}
        onLoad={(event) => {
          setLoaded(true);
          onLoad?.(event);
        }}
        onError={(event) => {
          setLoaded(true);
          onError?.(event);
        }}
      />
    </>
  );
}
