export default function Container(props) {
  const { data, children, className } = props;
  return (
    <div
      className={`${className} p-4 bg-gray-900 w-[50rem] my-8 m-auto max-w-[95%] rounded-2xl`}
    >
      {data || children}
    </div>
  );
}
