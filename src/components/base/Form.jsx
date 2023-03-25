import Container from "./Container";

export default function Form() {
  return (
    <div>
      <Container className={"text-white"}>
        <form action="" className="px-5 py-4 bg-slate-800 rounded-2xl">
          <div className={"m-auto"}>
            <label
              htmlFor=""
              className="block mb-3 font-bold text-sm text-gray-200"
            >
              Title
            </label>
            <input
              type="text"
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
              className="w-full mb-3 py-1 px-2 appearance-none rounded-lg text-gray-700 shadow-white"
            />
          </div>
        </form>
      </Container>
    </div>
  );
}
