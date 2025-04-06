import { section } from "framer-motion/client";

export function InstitutionCard({
    logo,
    name,
    address,
    image,
    description,
    details,
  }) {
    return (
<section className="flex flex-row items-center justify-center bg-[rgba(246,248,254,1)] py-10 max-md:flex-col">
  {/* Left Column */}
  <div className="bg-white w-1/2 flex flex-col items-stretch font-normal justify-center px-[35px] py-[69px] rounded-[8px] max-md:w-full max-md:px-5">
    <div className="flex items-stretch gap-[15px] text-2xl text-[rgba(30,109,235,1)] font-semibold leading-none">
      <img
        src={logo}
        alt={`${name} logo`}
        className="aspect-[1] object-contain w-[84px] bg-blend-normal shrink-0"
      />
      <h3 className="basis-auto my-auto">{name}</h3>
    </div>
    <p className="text-[rgba(49,54,74,1)] text-lg leading-8 mt-2.5 max-md:max-w-full">
      {description}
    </p>
    <div className="bg-[rgba(246,248,254,1)] mt-5 p-6 rounded-lg">
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-8">
          <DetailItem
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/935e66ff5353998d518cda68ceef63e6c72986c6?placeholderIfAbsent=true"
            label="School Type"
            value={details.schoolType}
          />
          <DetailItem
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/aada4ca4beb2dce8d92bd236825f70efa43c8b10?placeholderIfAbsent=true"
            label="Tuition"
            value={details.tuition}
          />
          <DetailItem
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/de787e955236352482ed93af7a8326948deb0642?placeholderIfAbsent=true"
            label="Cost of Living"
            value={details.costOfLiving}
          />
        </div>
        <div className="space-y-8">
          <DetailItem
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/d4a9397dadd336433a820cc489143f1913537b54?placeholderIfAbsent=true"
            label="Avg Undergrad Program"
            value={details.undergradDuration}
          />
          <DetailItem
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/08000472c7ef1c2aa61245799a0895c781837d70?placeholderIfAbsent=true"
            label="Application Fee"
            value={details.applicationFee}
          />
          <DetailItem
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/7ca95260d49070e4c36a1336c62efef029205796?placeholderIfAbsent=true"
            label="Avg Graduate Program"
            value={details.gradDuration}
          />
        </div>
      </div>
    </div>
    <button className="bg-[rgba(30,109,235,1)] text-white text-base tracking-[0.13px] mt-4 px-4 py-3 rounded-lg">
      Explore All Institutions in the UK
    </button>
  </div>

  {/* Right Column with background image */}
  <div
    className="w-1/2 h-full min-h-[600px] bg-cover bg-center rounded-[8px] max-md:w-full max-md:mt-6"
    style={{
      backgroundImage: `url('https://www.applyboard.com/wp-content/uploads/2023/02/Coventry-University-Business-Simulation-Suite-July2020-1.webp')`,
    }}
  >
    {/* Optional: Add overlay or content */}
    <div className="flex items-center justify-center h-full text-white text-3xl font-bold bg-black/40">
      hello
    </div>
  </div>
</section>
    );
  }
  
  function DetailItem({
    icon,
    label,
    value,
  }) {
    return (
      <div className="flex items-center gap-4">
        <img
          src={icon}
          alt={label}
          className="aspect-[1] object-contain w-12 bg-blend-normal shrink-0"
        />
        <div>
          <p className="text-[rgba(97,109,146,1)] text-sm leading-6 tracking-[0.13px]">
            {label}
          </p>
          <p className="text-[rgba(54,59,81,1)] text-lg leading-8">{value}</p>
        </div>
      </div>
    );
  }