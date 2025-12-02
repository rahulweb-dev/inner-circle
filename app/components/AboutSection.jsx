import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto px-10 flex flex-col lg:flex-row items-center gap-16">

        {/* LEFT CONTENT */}
        <div className="lg:w-1/2">
          <div className="flex items-center gap-4 mb-4 justify-start">
            <span className="w-8 h-1px bg-gray-400"></span>
            <Image src="/sublogo.svg" width={300} height={40} alt="divider" />
            <span className="w-8 h-px bg-gray-400"></span>
          </div>

          <h2 className="text-5xl font-semibold text-gray-900 leading-tight mb-6">
            Welcome Our Metroluxe <br /> Hotel & Resort
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Welcome to Metroluxe , where luxury meets comfort in the heart of canada.
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
        <div className="lg:w-1/2 grid grid-cols-1 lg:grid-cols-1 gap-10 relative">

          {/* TOP IMAGE (Big) */}
          <div className="relative mx-auto">
            <div className="relative w-[380px] h-[430px] border-2 border-orange-300 rounded-[30px] rotate-0 clip-octagon shadow-md">
              <Image
                src="/4.webp"
                alt="about image"
                fill
                className="object-cover rounded-[30px]"
              />
            </div>
          </div>

          {/* BOTTOM IMAGE (Small) */}
          <div className="relative mx-auto lg:absolute lg:-bottom-10 lg:-left-28">
            <div className="relative w-[300px] h-[220px] border-2 border-orange-300 rounded-[30px] clip-octagon shadow-md">
              <Image
                src="/4.webp"
                alt="about image"
                fill
                className="object-cover rounded-[30px]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
