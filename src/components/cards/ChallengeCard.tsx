interface ChallengeCardProps {
  title: string;
  description: string;
  host: string;
  deadline: string;
  imageUrl: string;
}

export default function ChallengeCard({
  title,
  description,
  deadline,
  host,
  imageUrl,
}: ChallengeCardProps) {
  return (
    <div className="bg-white rounded-xl w-110 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
      <div className="flex gap-3 w-full rounded-t-xl h-fit bg-jdchocomilk p-4 ">
        <img className="rounded-full h-12 w-12" src={imageUrl} />
        <h1 className="m-auto ml-0">{host}</h1>
      </div>
      <h3 className="text-lg font-semibold mb-2 p-4">{title}</h3>
      <p className="text-sm text-neutral-600 mb-4 p-4">{description}</p>

      <div className="flex justify-between text-xs text-neutral-500 p-4">
        <span>Ends: {deadline}</span>
      </div>
    </div>
  );
}
