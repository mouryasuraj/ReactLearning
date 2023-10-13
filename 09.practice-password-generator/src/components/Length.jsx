

const Length = ({length, setLength}) => {
  return (
    <div className="flex items-center gap-x-2">
        {/* Range */}
        <input 
              id="length"
              className="cursor-pointer"
              type="range" 
              value={length}
              min={6}
              max={30}
              onChange={(e) => setLength(e.target.value)}
          />
        {/* Label for Length Range */}
        <label htmlFor="length" className="md:text-lg font-bold text-green-700 tracking-wide">Length: {length}</label>
    </div>
  )
}

export default Length
