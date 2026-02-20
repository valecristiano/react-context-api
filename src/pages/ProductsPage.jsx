import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useBudget } from "../contexts/BudgetContext";

const productsApi = "https://fakestoreapi.com/products";

export default function ProdottiPage() {
  const [productList, setProductList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const { budgetMode, maxPrice } = useBudget();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(productsApi)
      .then((res) => setProductList(res.data))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const budgetProductList = budgetMode ? productList.filter((product) => product.price <= maxPrice) : productList;

  if (isLoading)
    return (
      <div className="container layover">
        {" "}
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>{" "}
      </div>
    );

  return (
    <section className="container">
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
