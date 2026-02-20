import { createContext, useContext, useState } from "react";

// creazione del contesto
const BudgetContext = createContext();

//funzione componente provider
function BudgetProvider({ children }) {
  const [budgetMode, setBudgetMode] = useState(false);
  const [maxPrice, setMaxPrice] = useState("");

  const contexValue = { budgetMode, setBudgetMode, maxPrice, setMaxPrice };

  return <BudgetContext.Provider value={contexValue}>{children}</BudgetContext.Provider>;
}

//custom hook consumo
function useBudget() {
  return useContext(BudgetContext);
}

export { BudgetProvider, useBudget };
