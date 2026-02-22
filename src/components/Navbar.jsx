import { NavLink, useLocation } from "react-router-dom";
import { useBudget } from "../contexts/BudgetContext";
import { useEffect, useRef } from "react";

export default function Navbar() {
  //dati context per button filtro e dato prezzo
  const { budgetMode, setBudgetMode, maxPrice, setMaxPrice } = useBudget();

  // hook per input in focus su location prodotti
  const inputFocus = useRef(null);
  const location = useLocation();

  //funzione onclick bottone
  function buttonSetter() {
    setBudgetMode((budgetMode) => !budgetMode);
  }

  //funzione per focus
  useEffect(() => {
    if (location.pathname === "/prodotti") {
      inputFocus.current?.focus();
    }
  }, [location.pathname]);

  // funzione per pulire input
  useEffect(() => {
    if (!budgetMode) {
      setMaxPrice("");
    }
  }, [budgetMode]);

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
              <div className="navbar-nav ">
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
              {/* form filtro */}
              <form onSubmit={(e) => e.preventDefault()} className="d-flex ms-auto gap-2">
                <label className="form-label" htmlFor="filtro-prezzo">
                  Filtra per prezzo
                </label>
                <input ref={inputFocus} id="filtro-prezzo" type="number" className="form-control" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
                <button onClick={buttonSetter} className={` btn ${budgetMode ? "btn-outline-success" : "btn-success"}`}>
                  {budgetMode ? "Torna indietro" : "Cerca prodotti"}
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
