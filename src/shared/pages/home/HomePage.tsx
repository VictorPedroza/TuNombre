import { Hero } from "@shared/pages/home/components";
import { Timer } from "./components/timer/Timer";
import { DailyMessage } from "./components/message/Message";
import { LoveLetter } from "./components/letter/Letter";
const HomePage = () => {
  return (
    <div className="w-full h-min-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="text-center">
        <Hero />
      </div>
      <div className="w-full max-w-lg">
        <Timer />
        <DailyMessage />
        <LoveLetter />
      </div>
    </div>
  );
};

export default HomePage;