// import banner1 from '/assets/img/banner_big.png'
// import banner2 from '/assets/img/banner_small1.png'
// import banner3 from '/assets/img/banner_small2.png'

// export default function banner() {
//   return (
//     <div className="banner">
//       <div className="container">
//         <div className="banner-mainBlock">
//           <div className="banner-block">
//             <div className="banner-images-one">
//               <img
//                 src={banner1}
//                 alt=""
//                 className="banner-img1"
//               />
//             </div>
//             <div className="banner-images-two">
//               <img
//                 src={banner2}
//                 alt=""
//                 className="banner-img2"
//               />
//               <img
//                 src={banner3}
//                 alt=""
//                 className="banner-img3"
//               />
//             </div>
//           </div>
//           <div className="banner-block-text">
//             <div className="banner-text">
//               <h1 className="banner-title">АвтоТорг -</h1>
//               <p className="banner-subtitle">
//                 автозапчасти премиум-класса для всех моделей
//               </p>
//             </div>
//             <div className="banner-button">
//               <a href="" className="banner-btn">
//                 Подробнее
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//   );
// }

import "../../assets/css/style.css";
import Accordion from "../../components/accordion/accordion";

export default function mainPage() {
  return (
    <>
      <br />
      <hr />
      <Accordion title="vopros111" content="answer on vopros 111" />
      <Accordion title="vopros222" content="answer on vopros 222" />
      <Accordion title="vopros333" content="answer on vopros 333" />
    </>
  );
}
