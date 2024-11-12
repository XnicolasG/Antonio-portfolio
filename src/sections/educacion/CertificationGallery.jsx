import React, { useState } from 'react'
import { certificados } from '../../data/Certificados';

const CertificationGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 6 ? 0 : prevIndex + 1
        );
      };
    
      const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? 6 : prevIndex - 1
        );
      };
    console.log(currentIndex);
    
      return (
        <section className="relative w-full flex items-center overflow-hidden">
          <button 
            onClick={handlePrev} 
            className="absolute flex justify-center items-center left-0 p-2 text-white bg-blue-500 size-8 rounded-full z-10"
          >
            &#9664;
          </button>
    
          <div className="flex overflow-hidden w-full">
            <ul
              className="flex transition-transform duration-300"
              style={{
                transform: `translateX(-${currentIndex * 14.5}%)`
              }}
            >
              {certificados.map((cert, index) => (
                <li
                  key={index}
                  className="flex flex-col items-center shadow-lg p-2 w-52 h-60 flex-shrink-0 rounded bg-slate-100 text-gray-600 mr-4"
                >
                  <div className="w-44">
                    <img 
                      className="w-full object-cover"
                      src={cert.imagen} 
                      alt={`${cert.titulo} - ${cert.institucion}`} 
                    />
                  </div>
                  <article>
                    <p>{cert.titulo}</p>
                    <p className="text-sm">{cert.institucion}</p>
                  </article>
                </li>
              ))}
            </ul>
          </div>
    
          <button 
            onClick={handleNext} 
            className="absolute flex justify-center items-center right-0 p-2 text-white bg-blue-500 size-8 rounded-full z-10"
          >
            &#9654;
          </button>
        </section>
      );
}

export default CertificationGallery