import HomeCard from "../components/cards/HomeCard";

export default function Home() {
    return (
        <div className="mt-50">
            <HomeCard>
                <HomeCard.Avatar
                    name="Janmeru"
                    imageUrl="https://i.pravatar.cc/100"
                ></HomeCard.Avatar>
            </HomeCard>
        </div>
    );
}