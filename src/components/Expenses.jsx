import { useState } from "react";
import Container from "./base/Container";
import ExpenseFilter from "./ExpensesFilter";
import Expensesitems from "./Expensesitems";

export default function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("");

  const filterHandler = (e) => {
    setSelectedYear(e);
  };

  const expensesList = props.data.map((expense) => (
    <Expensesitems
      key={expense.id}
      date={expense.date}
      title={expense.title}
      amount={expense.amount}
    />
  ));

  return (
    <div>
      <Container>
        <ExpenseFilter selected={filterHandler} />
        {expensesList}
      </Container>
    </div>
  );
}
