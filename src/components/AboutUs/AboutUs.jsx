// export default function AboutUs () {
//     return (
//         <><br /><br />
//         <div className="about-us">
//         <div className="container">
//             <div className="about-us-item">
//                 <h1 className="about-us-title">О нас</h1>
//                 <p className="about-us-text">Интернет-магазин "АвтоТорг" занимается розничной продажей <br />
//                     авто-аксессуаров,
//                     авто-товаров. В нашем магазине Вы найдете все <br /> для комфортного и безопасного путешествия.</p>
//             </div>
//         </div>
//     </div>
//         </>
//     );
// }

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/css/style.css";
import img1 from "/assets/img/img1.jpg";
import img2 from "/assets/img/img2.jpg";
import img3 from "/assets/img/img3.jpg";

export default function SliderC() {
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="container">
          <br />
        <h1>Слайдер</h1>
        <br />
        <div className="slider_place">
          <Slider {...setting}>
            <div className="slide">
              <img className="img_slider" src={img1} />
            </div>
            <div className="slide">
              <img className="img_slider" src={img2} />
            </div>
            <div className="slide">
              <img className="img_slider" src={img3} />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}
