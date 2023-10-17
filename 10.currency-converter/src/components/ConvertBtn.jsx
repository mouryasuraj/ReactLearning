

function ConvertBtn({convertBtn, from, to}) {
  return (
        <button onClick={convertBtn} className="px-4 py-3 mt-4  hover:bg-sky-400 active:scale-[1.01] duration-200 mx-auto block w-full text-lg bg-sky-500 text-white rounded-sm font-bold tracking-wide">Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
  )
}

export default ConvertBtn
