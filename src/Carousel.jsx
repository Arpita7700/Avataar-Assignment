import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);
    
    return () => clearInterval(intervalId);
  }, [current, length]);

  
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }





  return (
    <section className=" flex flex-col justify-center items-center w-full mt-20 ">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`transition-all duration-500 ease-in-out px-10 ${
            index === current ? "opacity-100 scale-108" : "opacity-30"
          }`}
        >
          {index === current && (
            <div
              className="flex justify-center items-center -gap-8"
              key={index}
            >
              <img
                src={slides[(length+index -2)%length].img}
                alt={`travel image ${(length+index -2)%length}`}
                onClick={()=>setCurrent((length+index -2)%length)}
                className=" xl:block hidden w-96 h-60 rounded-lg scale-75 -mr-28 z-5 opacity-70 object-cover"
              />

              <img
                src={slides[(length+index -1)%length].img}
                alt={`travel image ${(length+index -1)%length}`}
                onClick={()=>setCurrent((length+index -1)%length)}
                className=" md:block hidden w-96 h-60 rounded-lg
                max-xl:scale-70 xl:scale-120 max-xl:opacity-70 max-xl:-mr-28 scale-120 z-10 opacity-100 object-cover"
              />
              <div className={`max-sm:aspect-square group w-96 h-60 rounded-lg scale-150 z-30  object-cover hover:shadow-xl relative `}>
              <img
                src={slides[index].img}
                alt={`travel image ${index}`}
                className="w-full h-full rounded-lg"
                />
                <h1 className="absolute bottom-0 rounded-lg text-white bg-stone-800/50 w-full px-2 py-1 group-hover:block hidden">{slide.title}</h1>
                </div>
              <img
                src={slides[(length+index +1)%length].img}
                alt={`travel image ${(length+index +1)%length}`}
                onClick={()=>setCurrent((length+index +1)%length)}
                className=" md:block hidden w-96 h-60 rounded-lg max-xl:scale-70 xl:scale-120 max-xl:opacity-70 max-xl:-ml-28  z-10 opacity-100 object-cover "
              />

              <img
                src={slides[(length+index +2)%length].img}
                alt={`travel image ${(length+index +2)%length}`}
                onClick={()=>setCurrent((length+index +2)%length)}
                className="xl:block hidden w-96 h-60 rounded-lg scale-75 -ml-28 z-5 opacity-70 object-cover"
              />
            </div>
          )}
        </div>
      ))}
      <div className=" w-full flex justify-center items-center pt-28 gap-2 ">
        <FaArrowLeft className="text-gray-300" onClick={prevSlide} size={20} />
        {Array.from({ length: slides.length }).map((_, index) => (
          <div
            key={index}
            className={`  h-3 rounded-full ${
              current === index ? "bg-blue-300 w-6" : "w-3 bg-gray-300"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}

        <FaArrowRight className="text-gray-300" onClick={nextSlide} size={20} />
      </div>
    </section>
  );
};

export default Carousel;
