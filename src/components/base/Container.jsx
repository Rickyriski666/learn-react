export default function Container(props) {
  return (
    <div
      className={`p-4 bg-gray-900 w-[50rem] my-8 m-auto max-w-[95%] rounded-2xl`}
    >
      {props.data}
    </div>
  );
}
