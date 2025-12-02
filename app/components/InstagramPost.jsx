import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

export default function InstagramPost() {
  const posts = [
    "/4.webp",
    "/4.webp",
    "/4.webp",
    "/4.webp",
    "/4.webp",
  ];

  return (
    <section className="w-full py-20 bg-[#1B1B1B] text-white">
      {/* Heading */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center mb-3">
          <span className="w-10 h-px bg-gray-500"></span>
          <Image src="/sublogo.svg" width={140} height={40} alt="divider" className="mx-3" />
          <span className="w-10 h-px bg-gray-500"></span>
        </div>
        <h2 className="text-5xl font-semibold">Instagram Post</h2>
      </div>

      {/* Instagram Grid */}
      <div className="flex justify-center gap-10 flex-wrap px-10">
        {posts.map((img, index) => (
          <div
            key={index}
            className="relative w-[260px] h-[300px] rounded-3xl overflow-hidden shadow-lg transform hover:rotate-0 transition duration-500"
            style={{
              transform:
                index === 0
                  ? "rotate(-10deg)"
                  : index === 1
                    ? "rotate(-5deg)"
                    : index === 3
                      ? "rotate(5deg)"
                      : index === 4
                        ? "rotate(10deg)"
                        : "rotate(0deg)",
            }}
          >
            {/* Background Image */}
            <Image
              src={img}
              alt="instagram post"
              fill
              className="object-cover transition duration-500 group-hover:scale-110"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-none opacity-0 hover:opacity-100 hover:backdrop-blur-sm transition duration-500 flex justify-center items-center">
              <FaInstagram className="text-white text-5xl opacity-100 transition duration-500" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
