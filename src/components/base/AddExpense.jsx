import { useState } from "react";
import Container from "./Container";

export default function AddExpense(props) {
  const clickHandler = (e) => {
    props.addExpense(true);
  };

  return (
    <Container className={``}>
      <div className={`flex items-center bg-slate-800 rounded-2xl p-2`}>
        <button
          onClick={clickHandler}
          className={`mx-auto text-white bg-purple-900 rounded-2xl p-2`}
        >
          Add Expense
        </button>
      </div>
    </Container>
  );
}
