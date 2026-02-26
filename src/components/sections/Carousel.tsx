interface CarouselContent {
  imageUrl: string;
}

export default function Carousel({
  imageUrl,
}: CarouselContent) {
  return (
    <div className="h-90 w-screen bg-jdchocomilk -ml-23 mb-10">
        <h1>{imageUrl}</h1>
    </div>
  );
}
