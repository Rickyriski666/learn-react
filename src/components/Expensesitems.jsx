import { useState } from "react";
import ExpensesDate from "./ExpensesDate";

function Expensesitems(props) {
  const [title, setTitle] = useState(props.title);

  const changeHandle = () => {
    setTitle("Titit");
    console.log(title);
  };

  return (
    <div
      className={`flex items-center gap-4 shadow p-2 mx-4 my-4 rounded-xl bg-slate-700 text-white`}
    >
      <div className={`flex-none `}>
        <ExpensesDate date={props.date} />
      </div>
      <div className={`flex items-center flex-1 gap-4 justify-start`}>
        <h2 className={`grow`}>{title}</h2>
        <div className={`font-bold border rounded-2xl p-2 bg-purple-900 `}>
          {`$ ${props.amount}`}
        </div>
      </div>
      <button onClick={changeHandle}>Change Title</button>
    </div>
  );
}

export default Expensesitems;
