import { Hero } from "@shared/pages/home/components";
import { Timer } from "./components/timer/Timer";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-12">
      <div className="text-center">
        <Hero />
      </div>
      <div>
        <Timer />
      </div>
    </div>
  );
};

export default HomePage;
