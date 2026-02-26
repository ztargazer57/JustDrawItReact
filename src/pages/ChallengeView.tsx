
import { useParams } from "react-router-dom";
import ArtGallery from "../components/sections/ArtworkGallery";
import ChallengeInfo from "../components/sections/ChallengeInfo";
const challengeArtworks = [
  { title: "Sunset", imageUrl: "/public/download (1).jpg" },
  { title: "Ocean Wave", imageUrl: "/public/download (2).jpg" },
  { title: "Cyberpunk City", imageUrl: "/public/download (3).jpg" },
   { title: "Sunset", imageUrl: "/public/download (4).jpg" },
  { title: "Ocean Wave", imageUrl: "/public/download (5).jpg" },
  { title: "Cyberpunk City", imageUrl: "/public/download.jpg" },
  // ... more artworks
]

export default function ChallengeView() {
  const { id } = useParams()

  console.log(id)

  return (
    <div className="w-6/7 mt-10">
      {/* Main content */}
      <h1>Submissions</h1>
      Challenge ID: {id}
      <div className="p-6">
            <ArtGallery artworks={challengeArtworks} breakpoints={{ default: 3, 1024: 2, 640: 1 }} />
      </div>

      {/* Sidebar */}
      <ChallengeInfo
        hostname="Alice"
        hostpicture="/avatar.png"
        challengetitle="Dark Fantasy"
        challengedescription="Create a fantasy artwork..."
      />
    </div>
  );
}
