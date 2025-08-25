// src/components/Testimonial.jsx
import React from "react";

const Testimonial = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
            alt="testimonial"
            className="w-full h-72 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-black/60 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <p className="text-gray-600">
            <span className="font-medium text-gray-900">Marie Poirot</span>, Co-Founder{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Art-Gal
            </a>
          </p>

          <p className="mt-4 text-lg text-gray-800 italic">
            “Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit
            in. Nibh in purus sit convallis phasellus ut. Neque suspendisse a habitasse
            commodo.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
