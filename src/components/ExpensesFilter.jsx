export default function ExpenseFilter(props) {
  const dropdownHandler = (event) => {
    props.selected(event.target.value);
  };

  return (
    <div className="expenses-filter text-[white] px-4 py-0">
      <div className="expenses-filter__control flex w-full items-center justify-between mx-0 my-4">
        <label className="font-bold mb-2">Filter by year</label>
        <select
          onChange={dropdownHandler}
          className="font-bold px-12 py-2 rounded-md text-black"
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}
