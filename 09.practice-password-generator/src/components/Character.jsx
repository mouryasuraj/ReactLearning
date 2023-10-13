

const Character = ({character, setChar}) => {
  return (
    <div className="flex items-center gap-x-2">
        {/* Number */}
        <input 
              id="character"
              type="checkbox" 
              defaultChecked={character}
              onChange={() => setChar(prev => !prev)}
          />
        {/* Label for Length Range */}
        <label htmlFor="character" className="md:text-lg font-bold text-green-700 tracking-wide">Character</label>
    </div>
  )
}

export default Character
