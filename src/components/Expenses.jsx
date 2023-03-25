import Container from "./base/Container";
import Expensesitems from "./Expensesitems";

export default function Expenses(props) {
  const expensesList = props.data.map((expense) => (
    <Expensesitems
      key={expense.id}
      date={expense.date}
      title={expense.title}
      amount={expense.amount}
    />
  ));

  return <Container data={expensesList} />;
}
