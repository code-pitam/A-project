import React from 'react'

function SliderContent({activeIndex, sliderImage}) {
  return (
    <section>
      {sliderImage?.map((slide, index) => (
        <div className={index === activeIndex ? "slides active" : "inactive"}>
          <div className="s-content">
            <div className="slide-left">
              <p className="slide-heading slide-title">{slide.title}</p>
              <p className="text slide-text ">{slide.description1}</p>
              <p className="text slide-text">{slide.description2}</p>
            </div>
            <img className="slide-image" src={slide.urls} alt="" srcset="" />
          </div>
        </div>
      ))}
    </section>
  );
}

export default SliderContent