import { useState, useEffect } from 'react'
import { passEncrypt } from '@/utils/passEncrypt'
import { Button, Input } from 'reactstrap'

export default function Home() {
  const [inputValue, setInputValue] = useState('')
  const [outputValue, setOutputValue] = useState('')

  useEffect(() => {
    setOutputValue(passEncrypt(inputValue))
  }, [inputValue])

  const handleChangeInput = (e) => {
    setInputValue(e.target.value)
  }

  const handleResetInput = () => {
    setInputValue('')
  }

  return (
    <div>
      <Input value={inputValue} onChange={handleChangeInput}></Input>
      <Button
        color='primary'
        className={'button-passEncrypt'}
        onClick={handleResetInput}
      >
        Clear
      </Button>
      <p>{outputValue}</p>
    </div>
  )
}
