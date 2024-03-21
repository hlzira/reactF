import Card from "../../components/card/card";
import { Catalog } from "../../data";
import { useState } from "react";
import "../../assets/css/style.css";

export default function catalog() {
  const [query, setQuery] = useState("");
  const [sorting, setSorting] = useState("");
  const [Category, setCategory] = useState(0);

  function search(e) {
    setQuery(e.target.value);
  }

  const filterdProducts = Catalog.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase()) &&

    (item.cat == Category || Category == 0)
  );

  function sort(event) {
    const sortValue = event.target.value;
    setSorting(sortValue);
  }

  const sortProducts = (sorting, Catalog) => {
    switch (sorting) {
      case "price_asc":
        return [...Catalog].sort((a, b) => a.price - b.price);
      case "price_desc":
        return [...Catalog].sort((a, b) => b.price - a.price);
      case "ost_asc":
        return [...Catalog].sort((a, b) => a.ost - b.ost);
      case "ost_desc":
        return [...Catalog].sort((a, b) => b.ost - a.ost);
      default:
        return Catalog
    }
  }

  const sortAndFilterProducts = sortProducts(sorting,filterdProducts)

  return (
    <>
      <div className="catalog">
        <h1 className="catalog-title">Каталог</h1>
        <div className="container">
          <div className="catalog-filtr">
            <button className="catalog-filtr-link" onClick={()=>setCategory(0)}>Все</button>
            <button className="catalog-filtr-link" onClick={()=>setCategory(1)}>Шины/колеса</button>
            <button className="catalog-filtr-link" onClick={()=>setCategory(2)}>Масла</button>
          </div>
          <input
            onChange={search}
            type="search"
            name="search"
            placeholder="Поиск"
          ></input>
          <br />
          <br />
          <br />
              <p>Цена</p>
          <select className="option"  onChange={sort}>
            <option className="option" value="price_asc">По возрастанию</option>
            <option className="option" value="price_desc">По убыванию</option>
          </select>
          <br /><br />
              <p>Остаток</p>
          <select className="option"  onChange={sort}>
            <option className="option" value="ost_asc">По возрастанию</option>
            <option className="option" value="ost_desc">По убыванию</option>
          </select>
          <br /><br />
          <div className="catalog-products">
            {sortAndFilterProducts.length ? 
              sortAndFilterProducts.map((card, index) => {
                return( <Card key={index} {...card} />)
              })
            : (
              <h2>По запросу "{query}" ничего не найдено</h2>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
