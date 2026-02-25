import ArtGallery from "../components/sections/ArtworkGallery";

const galleryArtworks = [
  { title: "Sunset", imageUrl: "/public/download (1).jpg" },
  { title: "Ocean Wave", imageUrl: "/public/download (2).jpg" },
  { title: "Cyberpunk City", imageUrl: "/public/download (3).jpg" },
   { title: "Sunset", imageUrl: "/public/download (4).jpg" },
  { title: "Ocean Wave", imageUrl: "/public/download (5).jpg" },
  { title: "Cyberpunk City", imageUrl: "/public/download.jpg" },
  // ... more artworks
]
export default function Gallery (){
    return(
        <div className="mt-10 w-[calc(100vw-10rem)]">
            <h1 className="mb-10">Gallery</h1>
            <ArtGallery artworks={galleryArtworks} breakpoints={{default:5, 1024:3, 640: 2, 480: 1,}}></ArtGallery>
        </div>
    );
}