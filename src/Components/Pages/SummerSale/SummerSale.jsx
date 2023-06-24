import React from "react";

const SummerSale = () => {
  return (
    <section>
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="md:h-80 flex flex-col sm:flex-row bg-gray-900 rounded-lg overflow-hidden">
            <div className="w-full sm:w-1/2 lg:w-2/5 flex flex-col p-4 sm:p-8">
              <h2 className="text-white text-xl md:text-2xl lg:text-4xl font-bold mb-4">
                Summer Sale
                <br />
                Up to 70% off.
              </h2>

              <p className="max-w-md text-gray-400 mb-8">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text.
              </p>

              <div className="mt-auto">
                <a
                  href="#"
                  className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 text-gray-800 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                >
                  Save now
                </a>
              </div>
            </div>

            <div className="w-full sm:w-1/2 lg:w-3/5 h-48 sm:h-auto order-first sm:order-none bg-gray-700">
              <img
                src="https://images.unsplash.com/photo-1505846951821-e25bacf2eccd?auto=format&q=75&fit=crop&crop=top&w=1000&h=500"
                loading="lazy"
                alt="Photo by Dom Hill"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummerSale;
