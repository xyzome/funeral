import React, { useState, useEffect } from "react";
import BookingModal from "./BookingModal"; // Ensure BookingModal is in the same directory or adjust the import path

const HeroCarousel = () => {
  const slides = [
    {
      image: "/banner-1.jpg",
      title: (
        <>
          Guiding You Through Moments <br />
          Of <span className="text-orange-500">Remembrance</span> With <br />
          Care And Compassion
        </>
      ),
      buttonText: "Enquire Now",
    },
    {
      image: "/banner-1.jpg",
      title: (
        <>
          Every Life Deserves A <br />
          <span className="text-orange-500">Dignified Farewell</span>, <br />
          We're Here To Ensure It
        </>
      ),
      buttonText: "Enquire Now",
    },
    {
      image: "/banner-1.jpg",
      title: (
        <>
          Where <span className="text-orange-500">Empathy</span> And{" "}
          <span className="text-orange-500">Professionalism</span> Unite, <br />
          Creating Meaningful Tributes
        </>
      ),
      buttonText: "Enquire Now",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal open state

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Slide change every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="relative w-full h-[75vh] overflow-hidden bg-gray-900">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col items-start justify-center w-full h-full bg-black bg-opacity-50 pl-8">
              <h1 className="text-3xl md:text-5xl font-medium text-white">
                {slide.title}
              </h1>
              <button
                onClick={openModal} // Opens the modal on button click
                className="px-8 py-4 mt-8 font-semibold text-white bg-orange-500 rounded hover:bg-orange-600"
              >
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}

        {/* Navigation Controls */}
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <button
            onClick={() =>
              setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? slides.length - 1 : prevIndex - 1
              )
            }
            className="p-2 text-white bg-black bg-opacity-30 rounded-full hover:bg-opacity-50"
          >
            &#10094;
          </button>
          <button
            onClick={() =>
              setCurrentIndex((prevIndex) =>
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
              )
            }
            className="p-2 text-white bg-black bg-opacity-30 rounded-full hover:bg-opacity-50"
          >
            &#10095;
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="absolute flex justify-center w-full bottom-5">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 mx-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-400"
                }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={(formData) => {
          console.log("Form submitted:", formData);
          closeModal();
        }}
      />
    </>
  );
};

export default HeroCarousel;