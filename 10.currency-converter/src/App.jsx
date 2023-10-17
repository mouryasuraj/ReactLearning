import TItle from "./components/TItle";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { useState } from "react";

function App() {
  // const [amount, setAmount] = useState(0);
  // const [from, setFrom] = useState("usd");
  // const [to, setTo] = useState("inr");

  // const currencyInfo = useCurrencyInfo(from);
  // const [convertedAmount, setConvertedAmount] = useState(0);

  // const options = Object.keys(currencyInfo);

  // // Function to swap the currency
  // const swap = () => {
  //   setFrom(to);
  //   setTo(from);
  //   setConvertedAmount(amount);
  //   setAmount(convertedAmount);
  // };

  // // function to convert the currency
  // const convert = () => {
  //   setConvertedAmount(amount * currencyInfo[to]);
  // };

  return (
    <div className="w-full h-[100vh] bg-gray-900 px-5 py-3">
      {/* Title */}
      <TItle />

      {/* currencyContainer */}
      <div className="bg-white p-3 rounded-md w-fit mx-auto mt-14">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // convert();
          }}
        >
          <InputBox 
              // label="from" 
              // amount={amount} 
              // currencyOptions={options} 
              // onCurrencyChange={(currency) => setAmount(amount)}
              // selectCurrency={from}
          />
        </form>
      </div>
    </div>
  );
}

export default App;
