import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-light mb-3">
      <div className="container p-2">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              <img src="/img/boolean_favicon.png" alt="logo-shopping" style={{ height: 50 }} />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
                <NavLink className="nav-link" to="/prodotti">
                  Prodotti
                </NavLink>
                <NavLink className="nav-link" to="/chisiamo">
                  Chi siamo
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
