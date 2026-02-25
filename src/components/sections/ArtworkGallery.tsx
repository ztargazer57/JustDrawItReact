import Masonry from "react-masonry-css";
import ArtworkCard from "../cards/ArtworkCard";

interface ArtworkGalleryProps {
    artworks: ArtworkCardProps[]
    breakpoints?: Record<string, number>
}

export default function ArtGallery ({
    artworks,
    breakpoints = { default: 4, 1024: 3, 768: 2, 480: 1},
}: ArtworkGalleryProps) {
    return (
        <Masonry 
            breakpointCols={breakpoints}
            className="flex w-auto gap-6"
            columnClassName="flex flex-col gap-6"
        >
            {artworks.map((art, index) => (
                <ArtworkCard key={index} {...art}></ArtworkCard>
            ))}
        </Masonry>
    );
}