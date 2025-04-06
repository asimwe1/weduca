import { useParams } from 'react-router-dom';

export function Hero() {
  const { country } = useParams();

  // Format the country for display (e.g., "usa" → "United States")
  const countryMap = {
    usa: "United States",
    uk: "United Kingdom",
    canada: "Canada",
    australia: "Australia",
    germany: "Germany",
};

  const displayName = countryMap[country?.toLowerCase()] || country?.replace(/-/g, ' ') || "Your Country";

  return (
    <section className="flex flex-col bg-blend-normal relative min-h-[624px] w-full font-semibold px-[78px] py-[183px] max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/13508bbf4d50aeceecc21ccb3f3ebae78fa35ad4?placeholderIfAbsent=true"
        alt={`${displayName} Study Background`}
        className="absolute h-full w-full object-cover inset-0"
      />
      <div className="relative z-10">
        <h1 className="relative text-white text-[52px] leading-none max-md:max-w-full max-md:text-[40px]">
          Study in {displayName}
        </h1>
        <p className="relative text-lg text-white font-normal leading-8 mt-5">
          <span className="font-bold">
            Your journey to study in {displayName} starts here
          </span>
          . Known for its world-renowned academic reputation, cutting-edge
          research, and high quality of life, {displayName} is one of the most
          popular study destinations in the world!
        </p>
        <div className="relative flex gap-2.5 mt-[35px]">
          <button className="bg-neutral-50 min-w-60 text-[rgba(30,109,235,1)] w-64 px-[23px] py-3.5 rounded-lg cursor-pointer border-white border-solid border-2 max-md:pl-5">
            Explore Programs in {displayName}
          </button>
          <button className="bg-[rgba(245,248,255,0)] min-w-60 text-white w-[287px] px-[23px] py-3.5 rounded-lg cursor-pointer border-white border-solid border-2 max-md:pl-5">
            Download Your {displayName} Study Guide
          </button>
        </div>
      </div>
    </section>
  );
}
