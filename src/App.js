import "./App.css";
import TabButton from "./components/TabButton";

function App() {
  return (
    <div className="flex flex-col items-center my-6 min-h-screen">
      <h1 className="font-bold text-4xl text-gray1 font-raleway">#todo</h1>
      <div>
        <menu className="grid grid-cols-3 gap-28 mt-12 border-b border-gray2 px-14 text-center font-montserrat font-semibold">
          <TabButton content="All" class={["active"]} />
          <TabButton content="Active" />
          <TabButton content="Completed" />
        </menu>
        <div className="flex flex-col mt-4 font-montserrat">
          <form className="flex justify-between gap-5 text-sm">
            <input
              placeholder="add details"
              name="add"
              id="add"
              className="border border-gray3 px-3 py-3 rounded-xl w-full"
            />
            <button className="text-white bg-blue px-8 py-3 rounded-xl font-semibold">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
