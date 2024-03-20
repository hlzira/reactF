import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './slider.css'
import img1 from './img/1.avif'
import img2 from './img/2.avif'
import img3 from './img/3.avif'

export default function SliderC() {
    const setting = {
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1
    }
    return(
        <>
            <h1>Слайдер</h1>
            <div className="slider_place">
                <Slider {...setting}>
                    <div className="slide">
                        <img src={img1} />
                    </div>
                    <div className="slide">
                        <img src={img2} />
                    </div>
                    <div className="slide">
                        <img src={img3} />
                    </div>
                </Slider>
            </div>
        </>
    )
}