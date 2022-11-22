import React, { useEffect} from "react";
import Topbar from "./core/Topbar/Topbar";
import Main from "./core/Main/Main";
import TopInfo from "./core/TopInfo/TopInfo"
import './assets/App.css'
import { useBudget } from "./contexts/BudgetContext";

// localStorage.clear()

function App() {
  const {budgets, addExpense, updateSpreadSheet} = useBudget()

  useEffect(()=> {
    addExpense()
  },[budgets])

  useEffect(()=>{
    updateSpreadSheet()
  },[budgets])

  return (
    <>
      <Topbar />
      <TopInfo />
      <Main />
    </>
     
          
    
  );
}
export default App;
