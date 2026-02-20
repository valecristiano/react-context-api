import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <section className="container">
      <section className="homepage row align-items-end justify-content-end ">
        <div className="col-12 col-md-6">
          <img className="img-fluid" src="/img/shopping_spree.jpg" alt="shopping_spree" />
        </div>
        <div className="col-12 col-md-6">
          <Link to="/prodotti" className="btn btn-outline-light text-white text-decoration-none my-5 mx-3">
            Prodotti
          </Link>
          <Link to="/chisiamo" className="btn btn-outline-light text-white text-decoration-none my-5 mx-3">
            Chi siamo
          </Link>
        </div>
      </section>
    </section>
  );
}
