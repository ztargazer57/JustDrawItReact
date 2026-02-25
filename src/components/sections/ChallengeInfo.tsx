interface ChallengeInfoProps {
  hostname: string;
  hostpicture: string;
  challengetitle: string;
  challengedescription: string;
}

export default function ChallengeInfo({
  hostname,
  hostpicture,
  challengetitle,
  challengedescription,
}: ChallengeInfoProps) {
  return (
    <div className="fixed top-14 right-0 h-[calc(100vh-3rem)] w-2/7 bg-jdbrown text-jdwhite p-4 flex flex-col">

      {/* Challenge Host */}
      <div className="flex items-center gap-3 mb-6">
        <img
          src={hostpicture}
          alt={hostname}
          className="w-10 h-10 rounded-full object-cover"
        />
        <p className="text-sm font-medium">{hostname}</p>
      </div>

      {/* Challenge Info */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">{challengetitle}</h2>
        <p className="text-sm text-neutral-200">{challengedescription}</p>
      </div>

      {/* Comment Section */}
      <div className="bg-jdwhite text-jdbrown flex-1 rounded-lg p-2 overflow-auto">
        {/* Comments go here */}
      </div>

    </div>
  )
}