import BgHero from "../../../assets/digitalwallet.webp";
import mediaQuery from "../../../config/mediaQuery/mediaQuery";
import { Content } from "../../../utils/types";

const heros: Content = {
  title: "Get the latest market information.",
  content:
    "Stay up-to-date with the latest blockchain technology and crypto innovations",
};

const HeroSection = () => {
  const isMobile = mediaQuery("(max-width: 600px)");
  return (
    <div className="flex mx-32 mt-20 items-center">
      {/* Content */}
      <div>
        <h1 className="text-[75px] font-extrabold">{heros.title}</h1>
        <p className="text-gray-500">{heros.content}</p>
        <button className="bg-gradient-to-r from-cyan-500 py-2 rounded-md px-5 to-blue-500 mt-6">
          Get Started
        </button>
      </div>
      <img src={BgHero} alt="bg-hero" className="w-auto" />
    </div>
  );
};

export default HeroSection;
