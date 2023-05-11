import { useState } from "react";
import Form from "./components/base/Form";
import Expenses from "./components/Expenses";
import AddExpense from "./components/base/AddExpense";

function App() {
  const dataExpenses = [
    {
      id: 1,
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 2, title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 3,
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 4,
      title: "New Desk (Wooden)",
      amount: 450.59,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(dataExpenses);
  const [addExpense, setAddExpense] = useState(false);

  function inputHandler(dataOnForm) {
    const dataFromForm = {
      id: expenses.length + 1,
      ...dataOnForm,
    };
    setExpenses((prevData) => {
      return [dataFromForm, ...prevData];
    });
  }

  function addExpenseHandler(dataOnAddExpense) {
    setAddExpense(dataOnAddExpense);
  }

  return (
    <div>
      {!addExpense && <AddExpense addExpense={addExpenseHandler} />}
      {addExpense && (
        <Form inputData={inputHandler} addExpense={addExpenseHandler} />
      )}
      <Expenses data={expenses} />
    </div>
  );
}

export default App;
