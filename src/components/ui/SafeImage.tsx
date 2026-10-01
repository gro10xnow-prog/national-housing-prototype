"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

interface SafeImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string;
  wrapperClassName?: string;
}

export default function SafeImage({
  src,
  alt,
  fallbackSrc = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
  className = "",
  wrapperClassName = "",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  priority = false,
  fill = false,
  width,
  height,
  ...props
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [loading, setLoading] = useState(true);

  return (
    <div
      className={`relative overflow-hidden ${fill ? "w-full h-full" : "inline-block"} ${wrapperClassName}`}
    >
      {loading && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse z-10" />
      )}
      <Image
        {...props}
        src={imgSrc}
        alt={alt || "National Housing Finance PLC"}
        sizes={sizes}
        priority={priority}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        className={`${className} ${loading ? "scale-105 blur-sm" : "scale-100 blur-0"} transition-all duration-500`}
        onLoad={() => setLoading(false)}
        onError={() => {
          setImgSrc(fallbackSrc);
          setLoading(false);
        }}
      />
    </div>
  );
}
