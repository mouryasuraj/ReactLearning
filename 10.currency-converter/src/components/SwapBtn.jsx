function SwapBtn({swapBtn}) {
  return (
    <div className="absolute flex top-[40%] right-[40%] left-[40%]">
      <button onClick={swapBtn} className="px-4 py-3 flex items-center hover:bg-sky-400 duration-300 active:scale-[1.1]  bg-sky-500 text-white rounded-sm font-bold tracking-wide">
        Swap
      </button>
    </div>
  );
}

export default SwapBtn;
