import { useState } from 'react'
import { Button } from './components/Button'
import { InputModal } from './components/InputModal'
import { ResultModal } from './components/ResultModal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [inputNumber, setInputNumber] = useState<number>()
  const [resultNumber, setResultNumber] = useState<number>()
  const [isResultOpen, setIsResultOpen] = useState<boolean>(false)

  const handleFormSubmit = () => {
    const mathRand = Math.floor(Math.random() * 5) + 1
    setResultNumber(() => mathRand)
    setIsResultOpen(() => !isResultOpen)
  }

  return (
    <>
      <main>
        <h2 className="text-3xl font-bold select-none">
          Handling Events in React
        </h2>
        <h3 className="text-xl font-medium select-none">
          Guess the number between 1 and 5
        </h3>
        <Button
          onClick={() => setIsModalOpen(() => !isModalOpen)}
          name={'Start'}
        />
        <InputModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(() => !isModalOpen)}
          onGetInputValue={(value) => setInputNumber(() => value)}
          onSubmitted={handleFormSubmit}
        />
        <ResultModal
          input={inputNumber}
          result={resultNumber}
          isOpen={isResultOpen}
          onClose={() => setIsResultOpen(() => !isResultOpen)}
        />
      </main>
    </>
  )
}

export default App
