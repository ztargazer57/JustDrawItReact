import { Link } from "react-router-dom";
import ChallengeCard from "../components/cards/ChallengeCard";
import Carousel from "../components/sections/Carousel";
import Button from "../components/Button";

const challenges = [
  { id: 1, title: "Dark Fantasy" },
  { id: 2, title: "Cyberpunk City" },
  { id: 3, title: "Ocean Theme" },
];

export default function ChallengeList() {
  return (
    <>
      <Carousel imageUrl="">
        <Link to="/challenge/add">
          <div className="ml-auto h-fit w-fit">
            <Button label="New Challenge" bgColor="#9FB27F"></Button>
          </div>
        </Link>
      </Carousel>
      <div className="flex">
        <h1>Recent Sessions</h1>
      </div>
      <div className=" grid grid-cols-3 gap-90 gap-y-10 mt-9">
        {challenges.map((c) => (
          <Link key={c.id} to={`/challenge/${c.id}`} className="block p-2">
            <ChallengeCard
              title="Your OC in Fantasy"
              description="Draw your OC in a Fantasy Setting"
              deadline="Feb 30, 2026"
              host="Janmeru"
              imageUrl="https://i.pravatar.cc/100"
            />
          </Link>
        ))}
      </div>
    </>
  );
}
