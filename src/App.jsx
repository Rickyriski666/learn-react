import Form from "./components/base/Form";
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
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

  function inputHandler(dataOnForm) {
    const dataFromForm = {
      id: expenses.length + 1,
      ...dataOnForm,
    };
    console.log(dataFromForm);
    expenses.push(dataFromForm);
    console.log(expenses);
  }

  return (
    <div>
      <Form inputData={inputHandler} />
      <Expenses data={expenses} />
    </div>
  );
}

export default App;
