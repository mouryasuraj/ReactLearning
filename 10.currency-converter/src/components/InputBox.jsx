import React, { useId } from 'react'

function InputBox({
    label='from',
    amount,
    onAmountChange,
    selectCurrency='usd',
    onCurrencyChange,
    currencyOptions = ['usd', 'inr', 'jpn'],
    currencyDisable=false,
    amountDisable=false,
    className=''
}) {
    const amountID = useId()


  return (
    <div className={`bg-white p-4 flex flex-wrap rounded-md text-sm ${className}`}>
        {/* input */}
        <div className='w-1/2'>
            {/* label */}
            <label htmlFor={amountID} className='inline-block mb-3 text-black/40 text-lg capitalize'>
                {label}
            </label>
            {/* input */}
            <input
                id={amountID} 
                type="number"
                placeholder='amount'
                className='py-2 w-full bg-transparant outline-none text-[16px]'
                value={amount}
                onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                disabled={amountDisable}
            />
        </div>

        {/* select currency */}
        <div className='w-1/2 flex flex-wrap justify-end text-right'>
            {/* currency Type */}
            <p className='text-black/40 w-full mb-3 text-lg'>Currency Type</p>
            {/* select currency */}
            <select 
                className='rounded-md cursor-pointer px-2 py-1 outline-none bg-gray-300 font-bold tracking-wider' 
                value={selectCurrency}
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                disabled={currencyDisable}
                >
                {
                    currencyOptions.map((currency) =>(
                         <option className='cursor-pointer' key={currency} value={currency}>{currency}</option>
                    ))
                }
            </select>
        </div>
    </div>
  )
}

export default InputBox
