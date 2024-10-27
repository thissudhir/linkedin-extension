import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-col items-center p-[30px] gap-3">
        {" "}
        <img src="/wxt.svg" alt="" className="h-8 w-8 bg-black rounded-full " />
        <h1 className="text-lg font-bold">LinkedIn Extension</h1>
      </div>
      <div className="pl-[30px] pr-[30px] ">
        <p className="text-base font-semibold text-slate- mb-2 text-center">
          Welcome to LinkedIn Extension
        </p>
        <p className="text-sm text-center">
          LinkedIn Extension is a Chrome extension that helps you generate
          messages.
        </p>
        <div className="mt-4 flex justify-center items-center">
          <button className="bg-black text-white pb-[6px] pt-[6px] w-52 rounded-md hover:bg-slate-950">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
