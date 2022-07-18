import React, {useState} from "react";
import { slides } from "./data";
import leftArrow from "../../images/left-arrow.svg"
import rightArrow from "../../images/right-arrow.svg"

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        let newSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
        setCurrentSlide(newSlide)
    }

    const nextSlide = () => {
        let newSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
        setCurrentSlide(newSlide)
    }

    return (
        <main className="main">
            <section className="testimonial section">
                <h2 className="section-title">testimonials</h2>
                <div className="testimonial__container grid">
                    <div className="testimonial__slider">
                        <div className="slider__wrapper">
                            {slides.map((slide, index) => {
                                const { id, quote, description, date, image, name, detail } = slide;

                                let position = "next-slide"

                                if (index === currentSlide) {
                                    position = "active-slide"
                                }
                                else if (index === currentSlide - 1 || (currentSlide === 0 && index === slides.length - 1)) {
                                    position = "prev-slide"
                                }
                                return (
                                    <article key={id} className={`testimonial__slide ${position}`}>
                                        <div className="testimonial__slide-content">
                                            <img src={quote} alt="quote" className="testimonial__quote" width="30px" height="30px" />
                                            <p className="testimonial__description">{description}</p>
                                            <span className="testimonial__date">{date}</span>
                                            <div className="testimonial__profile">
                                                <h3 className="testimonial__profile-name">{name}</h3>
                                                <span className="testimonial__profile-detail">{detail}</span>
                                            </div>
                                        </div>
                                        <img src={image} alt="" className="testimonial__slide-img" />
                                    </article>
                                )
                            })}
                        </div>
                    </div>
                    
                </div>
                <button className="slider__button-prev" onClick={prevSlide}>
                    <img src={leftArrow} alt="slider left arrow" width="30px" height="30px"/>
                </button>
                <button className="slider__button-next" onClick={nextSlide}>
                    <img src={rightArrow} alt="slider right arrow" width="30px" height="30px"/>
                </button>
            </section>
        </main>
    )
}

export default Testimonials;