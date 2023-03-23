import Expensesitems from "./Expensesitems";

export default function Expenses(props) {
  const expensesList = props.data.map((expense) => (
    <Expensesitems
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
    />
  ));

  return (
    <div
      className={`p-4 bg-gray-900 w-[50rem] my-8 m-auto max-w-[95%] rounded-2xl`}
    >
      {expensesList}
    </div>
  );
}
