import { Hero } from "@shared/pages/home/components";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-12">
      <div className="text-center">
        <Hero />
      </div>
      <div className="mt-24">
        <h1></h1>
      </div>
    </div>
  );
};

export default HomePage;
