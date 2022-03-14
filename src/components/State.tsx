import { ChangeEvent, useState } from "react"

const State = () => {
    const [text, setText] = useState<string | null>("teste hook")

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
  return (
    <div>
        <p>O valor de text é: {text}</p>
        <input type="text" onChange={handleChange} />
    </div>
  )
}

export default State