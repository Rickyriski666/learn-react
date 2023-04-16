import { useState } from "react";
import Container from "./Container";

export default function Form(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleHandler = (event) => setEnteredTitle(event.target.value);
  const amountHandler = (event) => setEnteredAmount(event.target.value);
  const dateHandler = (event) => setEnteredDate(event.target.value);

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
    };

    props.inputData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <div>
      <Container className={"text-white"}>
        <form
          onSubmit={submitHandler}
          action=""
          className="px-5 py-4 bg-slate-800 rounded-2xl"
        >
          <div className={"mx-auto mb-4"}>
            <label
              htmlFor=""
              className="block mb-3 font-bold text-sm text-gray-200"
            >
              Title
            </label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleHandler}
              className="w-full mb-3 py-1 px-2 appearance-none rounded-lg text-gray-700 shadow-white"
            />

            <label
              htmlFor=""
              className="block mb-3 font-bold text-sm text-gray-200"
            >
              Price
            </label>
            <input
              type="number"
              value={enteredAmount}
              onChange={amountHandler}
              className="w-full mb-3 py-1 px-2 appearance-none rounded-lg text-gray-700 shadow-white"
            />

            <label
              htmlFor=""
              className="block mb-3 font-bold text-sm text-gray-200"
            >
              Date
            </label>
            <input
              type="date"
              value={enteredDate}
              onChange={dateHandler}
              className="w-full mb-3 py-1 px-2 appearance-none rounded-lg text-gray-700 shadow-white"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className=" text-white bg-purple-900 rounded-2xl p-2"
            >
              Add Expense
            </button>
          </div>
        </form>
      </Container>
    </div>
  );
}
