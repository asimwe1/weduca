import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Hero } from "../../components/sections/Hero";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { InstitutionCard } from "../../components/ui/InstitutionCard";
import StudyInUKPage from "../../components/StudyInUKPage";

const StudyIn = () => {
  const coventryUniversity = {
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/4b7002ab9cb48bbe67a9b9ff89c853cc08a2f239?placeholderIfAbsent=true",
    name: "Coventry University",
    address: "Priory Street, Coventry",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/a1db7316105b3f5427319d744bcf4a7a38b50d2c?placeholderIfAbsent=true",
    description:
      "Coventry University is a forward-looking, modern university with a proud tradition as a provider of high quality education and a focus on applied research. Students benefit from state-of-the-art equipment and facilities in all academic disciplines, including health, design and engineering laboratories, and performing arts studios and computing centres.",
    details: {
      schoolType: "Public",
      tuition: "£16,729.44 GBP / Year",
      costOfLiving: "£9,135.00 GBP / Year",
      undergradDuration: "3 years",
      applicationFee: "£0.00 GBP",
      gradDuration: "1 year",
    },
  };

  const { country } = useParams();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main>
        <Hero />

        <section className="px-[63px] py-[60px] max-md:px-5">
          <div className="max-w-[1270px] mx-auto">
            <div className="flex items-center gap-5 mb-8">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/253a4d82a800926eacc8f36d5404c1399963bfff?placeholderIfAbsent=true"
                alt="Institutions Icon"
                className="w-20 h-20 object-contain"
              />
              <h2 className="text-[37px] text-[rgba(54,59,81,1)] font-semibold leading-none">
                Popular Institutions in the { country }
              </h2>
            </div>

            <p className="text-lg text-[rgba(49,54,74,1)] mb-8">
              The { country } has it all—from the world's oldest and most prestigious
              universities to modern-day institutions with sleek amenities and
              innovative new courses. Either way, choosing to study in the { country }
              gives you access to a premium education, flexible study options,
              and exciting post-graduate work opportunities. Choose from some of
              the world's leading universities and vocational institutions here!
            </p>

            <div className="bg-white rounded-lg shadow-lg">
              <div className="flex gap-8 text-sm font-semibold tracking-[0.13px] border-b p-4">
                <button className="text-[rgba(0,54,138,1)] bg-[rgba(230,239,254,1)] px-4 py-2 rounded-t-lg">
                  COVENTRY UNIVERSITY
                </button>
                <button className="text-[rgba(84,89,95,1)]">
                  MIDDLESEX UNIVERSITY
                </button>
                <button className="text-[rgba(84,89,95,1)]">
                  LONDON METROPOLITAN UNIVERSITY-HOLLOWAY
                </button>
              </div>

              <InstitutionCard {...coventryUniversity} />
            </div>
          </div>
        </section>

        {/* Additional sections will be added here */}
        <StudyInUKPage />      
      </main>

      <Footer />
    </div>
  );
};

export default StudyIn;
