import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void
  name: string
}

export const Button: React.FC<ButtonProps> = ({ onClick, name }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="outline-none select-none focus:outline-none bg-zinc-900 hover:bg-zinc-900/90 text-white rounded-[5px] py-3 px-8 transition-all duration-100 ease-in-out font-bold"
      >
        {name}
      </button>
    </>
  )
}
