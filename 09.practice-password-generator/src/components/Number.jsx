

const Number = ({number, setNum}) => {
  return (
    <div className="flex items-center gap-x-2">
        {/* Number */}
        <input 
              id="number"
              type="checkbox" 
              defaultChecked={number}
              onChange={()=> setNum(prev => !prev)}
          />
        {/* Label for Length Range */}
        <label htmlFor="number" className="md:text-lg font-bold text-green-700 tracking-wide">Number</label>
    </div>
  )
}

export default Number;
