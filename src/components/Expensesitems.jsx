import ListContainer from "./base/ListContainer";
import ExpensesDate from "./ExpensesDate";

function Expensesitems(props) {
  return (
    <ListContainer
      date={<ExpensesDate date={props.date} />}
      title={props.title}
      amount={props.amount}
    />
  );
}

export default Expensesitems;
