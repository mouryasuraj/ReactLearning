import TItle from "./components/TItle";
import InputBox from "./components/InputBox";
import SwapBtn from "./components/SwapBtn";
import ConvertBtn from "./components/ConvertBtn";
import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  // function to swap currency
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  // fucntio to convert currency
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="w-full h-[100vh] bg-gray-900 px-5 py-3">
      {/* Title */}
      <TItle />

      {/* currencyContainer */}
      <div className="bg-gray-700 p-4 rounded-md w-fit mx-auto mt-14">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="relative">
            <InputBox 
                  className="mb-4" 
                  label='from' 
                  selectCurrency={from} 
                  amount={amount} 
                  onCurrencyChange={(currency) => setFrom(currency)} 
                  currencyOptions={options}
                  onAmountChange={(amount) => setAmount(amount)} 
                  
            />
            <InputBox label="to" amount={convertedAmount} selectCurrency={to} amountDisable currencyOptions={options} onCurrencyChange={(currency) => setTo(currency)} />
            <SwapBtn swapBtn={swap} />
          </div>
          <ConvertBtn convertBtn={convert} from={from} to={to} />
        </form>
      </div>
    </div>
  );
}

export default App;
