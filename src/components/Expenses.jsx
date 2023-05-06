import { useState } from "react";
import Container from "./base/Container";
import ExpenseFilter from "./ExpensesFilter";
import Expensesitems from "./Expensesitems";
import moment from "moment";
import NotFound from "./base/NotFound";

export default function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2023");

  const filterHandler = (e) => {
    setSelectedYear(e);
  };

  const filterExpense = props.data.filter((expense) => {
    return moment(expense.date).format("yyyy") === selectedYear;
  });

  const itemsList = filterExpense.map((expense) => {
    return (
      <Expensesitems
        key={expense.id}
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
        data={expense}
      />
    );
  });

  return (
    <div>
      <Container>
        <ExpenseFilter selected={filterHandler} />
        {itemsList.length === 0 ? <NotFound /> : itemsList}
      </Container>
    </div>
  );
}
