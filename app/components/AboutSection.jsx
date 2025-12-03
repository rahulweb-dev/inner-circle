import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full py-20 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-center gap-16">

        {/* LEFT CONTENT */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
            <span className="w-10 h-px bg-gray-400"></span>
            <Image src="/sublogo.svg" width={200} height={40} alt="divider" />
            <span className="w-10 h-px bg-gray-400"></span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight mb-6">
            Welcome to Our Metroluxe <br /> Hotel & Resort
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
            Welcome to Metroluxe, where luxury meets comfort in the heart of Canada.
            Since 1999, we have been dedicated to providing an exceptional stay for our
            guests, blending modern amenities with timeless elegance. Our beautifully
            designed rooms and suites offer stunning views and plush accommodations,
            ensuring a restful retreat whether youre here for business or leisure.
          </p>

          <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-600 duration-300">
            Learn More
          </button>
        </div>

        {/* RIGHT IMAGES GRID */}
        <div className="lg:w-1/2 relative flex flex-col items-center gap-10">

          {/* TOP IMAGE */}
          <div className="relative w-[260px] h-[320px] md:w-[320px] md:h-[380px] lg:w-[380px] lg:h-[430px] border-2 border-orange-300 rounded-[30px] shadow-md">
            <Image
              src="/4.webp"
              alt="about image"
              fill
              className="object-cover rounded-[30px]"
            />
          </div>

          {/* BOTTOM IMAGE */}
          <div className="relative w-[220px] h-[180px] md:w-[260px] md:h-[200px] lg:w-[300px] lg:h-[220px] border-2 border-orange-300 rounded-[30px] shadow-md lg:absolute lg:-bottom-10 lg:-left-20">
            <Image
              src="/4.webp"
              alt="about image"
              fill
              className="object-cover rounded-[30px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
