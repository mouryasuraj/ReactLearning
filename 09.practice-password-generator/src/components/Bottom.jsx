import Length from "./Length";
import Number from "./Number";
import Character from "./Character";

const Bottom = ({ length, setLength, number, setNum, setChar, character }) => {
  return (
    <div className="flex flex-wrap items-center gap-x-4">
      <Length length={length} setLength={setLength} />
      <div className="flex flex-wrap gap-x-4 gap-y-8 max-[498px]:mt-4">
        <Number number={number} setNum={setNum} />
        <Character character={character} setChar={setChar} />
      </div>
    </div>
  );
};

export default Bottom;
