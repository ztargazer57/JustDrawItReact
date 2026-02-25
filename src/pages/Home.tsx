import ChallengeCard from "../components/cards/ChallengeCard";
import Carousel from "../components/sections/Carousel";

export default function Home() {
  return (
    <>
      <Carousel imageUrl="" />
      <div>
        <h1>Recent Sessions</h1>
      </div>
      <div className=" grid grid-cols-3 gap-90 gap-y-10 mt-9">
        <ChallengeCard
          title="Your OC in Fantasy"
          description="Draw your OC in a Fantasy Setting"
          deadline="Feb 30, 2026"
          host="Janmeru"
          imageUrl="https://i.pravatar.cc/100"
        />
        <ChallengeCard
          title="Your OC in Fantasy"
          description="Draw your OC in a Fantasy Setting"
          deadline="Feb 30, 2026"
          host="Janmeru"
          imageUrl="https://i.pravatar.cc/100"
        />
        <ChallengeCard
          title="Your OC in Fantasy"
          description="Draw your OC in a Fantasy Setting"
          deadline="Feb 30, 2026"
          host="Janmeru"
          imageUrl="https://i.pravatar.cc/100"
        />
        <ChallengeCard
          title="Your OC in Fantasy"
          description="Draw your OC in a Fantasy Setting"
          deadline="Feb 30, 2026"
          host="Janmeru"
          imageUrl="https://i.pravatar.cc/100"
        />
      </div>
    </>
  );
}
