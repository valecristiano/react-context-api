import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const productsApi = "https://fakestoreapi.com/products";

export default function SingleProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  //stato dati del prodotto
  const [product, setProduct] = useState();
  //stato caricamento pagina
  const [isLoading, setIsLoading] = useState(true);
  // stato errore
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productsApi}/${id}`)
      .then((res) => {
        console.log(res);
        // condizione per far andare in errore in caso di id non presente (status 200)
        if (!res.data.id) {
          setError(true);
        } else {
          setProduct(res.data);
        }
      })
      .catch((err) => {
        console.log("errore", err.response);
        if (err?.response?.status === 404) {
          setError(true);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <div className="container layover">
        {" "}
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>{" "}
      </div>
    );
  if (error) return navigate("/404");

  return (
    <section className="container">
      <div className="row row-cols-3 justify-content-centers">
        <div className="col">
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
        </div>
      </div>
    </section>
  );
}
