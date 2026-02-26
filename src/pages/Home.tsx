import HomeCard from "../components/cards/HomeCard";
import Carousel from "../components/sections/Carousel";
import Favorites from "../components/sections/Favorites";

export default function Home() {
  return (
    <div className="mt-5">
        <Carousel imageUrl="/public/download (5).jpg"> </Carousel>
      <div className="grid grid-cols-3 gap-x-50 gap-y-10 ">
        <HomeCard.Label label="What's New" color="#DA70B3"></HomeCard.Label>
        <HomeCard.Label label="Recently Most Liked" color="#DB8C7E"></HomeCard.Label>
        <HomeCard.Label label="Word of the Day" color="#A8D490"></HomeCard.Label>
        <HomeCard rotate={3}>
          <h1>New Challenge Posted</h1>
          <br></br>
          <HomeCard.Avatar
            name="Janmeru"
            imageUrl="https://i.pravatar.cc/100"
          ></HomeCard.Avatar>
          <HomeCard.TextContent content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac."></HomeCard.TextContent>
        </HomeCard>

        <HomeCard rotate={5}>
          <h1>New Challenge Posted</h1>
          <br></br>
          <HomeCard.Avatar
            name="Janmeru"
            imageUrl="https://i.pravatar.cc/100"
          ></HomeCard.Avatar>
          <HomeCard.ImageContent
            title="Ocean Wave"
            imageUrl="/public/download (5).jpg"
          ></HomeCard.ImageContent>
        </HomeCard>

        <HomeCard rotate={-2}>         
                <HomeCard.TextContent
                content="To be is Tutubi"
                author="Ike"
            ></HomeCard.TextContent>
        </HomeCard>
      </div>
      <Favorites></Favorites>
    </div>
  );
}
