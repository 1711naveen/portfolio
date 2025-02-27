import LeftSideNav from "@/components/LeftSideNav";
import RightSide from "@/components/RightSide";

export default function Home() {
  return (
    <div className="flex ">
      <div className="w-1/4 border-2 rounded-xl m-8 border-black ">
        <LeftSideNav />
      </div>
      <div className="w-3/4 border-2 border-black">
        <RightSide />
      </div>
    </div>
  );
}
