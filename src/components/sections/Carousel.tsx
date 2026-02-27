import type React from "react";

interface CarouselContent {
  imageUrl: string;
  children?: React.ReactNode
}

export default function Carousel({
  imageUrl,children
}: CarouselContent) {
  return (
    <div className="h-90 w-screen bg-jdchocomilk -ml-23 mb-10 p-4">
        <h1>{imageUrl}</h1>
      {children}
    </div>
  );
}
