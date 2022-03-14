import { useContext } from "react"
import { AppContext } from "../context/AppContext"

const Context = () => {
    const details = useContext(AppContext)

  return (
    <>
        {details && (
            <div>
                <h2>Linguagem: {details.language}</h2>
                <h4>Framework: {details.framework}</h4>
                <p>Qtd.Projetos: {details.projects}</p>
            </div>
        )}
    </>
  )
}

export default Context