interface ArtworkCardProps {
  title: string;
  imageUrl: string;
}

export default function ArtworkCard({ title, imageUrl }: ArtworkCardProps) {
  return (
    <div className="bg-jdbrown text-jdwhite rounded-lg shadow-md overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full object-cover" />
      <h1 className="font-bold text-sm px-2 py-5">{title}</h1>
    </div>
  );
}
