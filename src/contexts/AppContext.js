import { createContext, useContext } from "react";
import { useState } from "react";
const AppContext = createContext();

function UseAppContext({ children }) {
  const [income, setIncome] = useState("");
  const [rideCom, setRideCom] = useState("");
  const [emplCom, setEmplCom] = useState("");
  const [otherCom, setOtherCom] = useState("");
  const [gasExp, setGasExp] = useState("");
  const [mealsExp, setMealsExp] = useState("");
  const [otherExp, setOtherExp] = useState("");
  const [toggle, setToggle] = useState(false);
  const commissionPerc = rideCom + emplCom;
  const totalExpenses = Number(gasExp) + Number(mealsExp) + Number(otherExp);
  const netIncome = Math.round(
    income - (commissionPerc * income) / 100 - otherCom - totalExpenses
  );

  return (
    <AppContext
      value={{
        income,
        setIncome,
        rideCom,
        setRideCom,
        emplCom,
        setEmplCom,
        otherCom,
        setOtherCom,
        gasExp,
        setGasExp,
        mealsExp,
        setMealsExp,
        otherExp,
        setOtherExp,
        toggle,
        setToggle,
        commissionPerc,
        totalExpenses,
        netIncome,
      }}
    >
      {children}
    </AppContext>
  );
}

function UseApp() {
  const context = useContext(AppContext);
  if (context === undefined)
    throw new Error("Context used outside proper component!");
  return context;
}

export { UseAppContext, UseApp };
