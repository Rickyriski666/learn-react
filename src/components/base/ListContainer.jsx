export default function ListContainer(props) {
  return (
    <div
      className={`flex items-center gap-4 shadow p-2 my-4 rounded-xl bg-slate-700 text-white text-xs md:text-base`}
    >
      <div className={`flex-none `}>{props.date}</div>

      <div className={`flex items-center flex-1 gap-4 justify-start`}>
        <h2 className={`grow`}>{props.title}</h2>
        <div
          className={`text-center font-bold border rounded-2xl p-2 w-20 bg-purple-900 `}
        >
          {`$${props.amount}`}
        </div>
      </div>
    </div>
    // <div
    //   className={`flex items-center gap-4 shadow p-2 mx-4 my-4 rounded-xl bg-slate-700 text-white`}
    // >
    //   <div className={`flex-none `}>{props.date}</div>

    //   <div className={`flex items-center flex-1 gap-4 justify-start`}>
    //     <h2 className={`grow`}>{props.title}</h2>
    //     <div className={`font-bold border rounded-2xl p-2 bg-purple-900 `}>
    //       {`$ ${props.amount}`}
    //     </div>
    //   </div>
    // </div>
  );
}
