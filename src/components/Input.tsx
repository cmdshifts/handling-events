import { ChangeEvent, InputHTMLAttributes, useEffect, useState } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onGetData: (value: number) => void
}

export const Input: React.FC<InputProps> = ({ onGetData }: InputProps) => {
  const [number, setNumber] = useState<number>(1)

  useEffect(() => {
    onGetData(number)
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue: string = e.target.value

    // Use regular expression to check if the input is a number between 1 and 5
    if (/^[1-5]$/.test(inputValue)) {
      setNumber(() => parseInt(inputValue))
    }
  }

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => handleChange(e)}
        placeholder="Enter a number between 1 and 5"
        className="w-full bg-slate-100/50 outline-none focus:outline-none hover:bg-slate-100/70 border-transparent border-[1px] hover:border-zinc-900/20 focus:border-zinc-900/20 rounded-[5px] py-2 px-2 transition-all duration-100 ease-in-out font-medium"
      />
    </>
  )
}
