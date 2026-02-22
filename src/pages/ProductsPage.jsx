import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useBudget } from "../contexts/BudgetContext";

const productsApi = "https://fakestoreapi.com/products";

export default function ProdottiPage() {
  // stato prodotti presi da axios
  const [productList, setProductList] = useState([]);

  //stato loanding
  const [isLoading, setIsLoading] = useState(true);

  // dati context per budget mode acceso/spento e prezzo base del filtro
  const { budgetMode, maxPrice } = useBudget();

  //chiamata axios
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(productsApi)
      .then((res) => setProductList(res.data))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  // ricalcolo lista in nuova costante in base al filtro prezzo
  const budgetProductList = budgetMode ? productList.filter((product) => product.price <= maxPrice) : productList;

  //loading
  if (isLoading)
    return (
      <div className="container layover">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  return (
    <section className="container">
      {maxPrice && (
        <div>
          <h2 className="h5">{budgetProductList.length} prodotti trovati</h2>
        </div>
      )}
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4">
        {budgetProductList.map((product) => (
          <div key={product.id} className="col">
            <Link to={"/prodotti/" + product.id}>
              <div className="card-wrapper card h-100">
                <img src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Price: {product.price}</li>
                  <li className="list-group-item">Category: {product.category}</li>
                </ul>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
