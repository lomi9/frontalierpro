
import Hero from "./components/home/Hero";
import Presentation from "./components/home/Presentation";



export default function Home() {
  return (
    <div className="scroll-container">
    <div className="scroll-snap flex w-full">
      <Hero/>
    </div>
    <div className="h-screen scroll-snap bg-transparent  w-full pb-10 pt-28 px-12">
      <Presentation/>

    </div>
    <div className="relative h-screen scroll-snap bg-green-400 w-full pb-10 pt-20 px-6">

</div>
<div className="relative h-screen scroll-snap bg-blue-200 w-full py-10 px-6">

</div>
  </div>
  );
}
