import { useState } from "react";
import ListContainer from "./base/ListContainer";
import ExpensesDate from "./ExpensesDate";

function Expensesitems(props) {
  const [title, setTitle] = useState(props.title);

  const changeHandle = () => {
    setTitle("Titit");
    console.log(title);
  };

  return (
    <ListContainer
      date={<ExpensesDate data={props.date} />}
      title={title}
      amount={props.amount}
    />
  );
}

export default Expensesitems;
