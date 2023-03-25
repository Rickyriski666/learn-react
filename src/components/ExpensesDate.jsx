import moment from "moment";

export default function ExpensesDate(props) {
  const day = moment(props.date).format("D");
  const month = moment(props.date).format("MMM");
  const year = moment(props.date).format("yyyy");

  return (
    <div
      className={`flex flex-col w-20 h-20 bg-gray-900 items-center justify-center border border-slate-50 rounded-xl`}
    >
      <div className={`text-xs font-bold`}>{month}</div>
      <div className={`text-xs`}>{day}</div>
      <div className={`text-xs font-bold`}>{year}</div>
    </div>
  );
}
