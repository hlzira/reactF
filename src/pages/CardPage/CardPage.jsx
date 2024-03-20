import { useParams } from "react-router-dom";
import { Catalog } from "../../data";
import Image from "/assets/img/product.png";

export default function CardPage() {
  const { id } = useParams();
  const product = Catalog.find((product) => product.id === parseInt(id));

  return (
    <>
      <div className="container">
        <br />
        <br />
        <h1>Страница одного товара</h1>
        <br />
        <img src={Image} alt="" className="catalog-product-img-" />
        <h1>{product.name}</h1>
        <h3>{product.price}</h3>
      </div>
    </>
  );
}