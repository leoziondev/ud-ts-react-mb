interface Props {
    name: string
}

const SecondComponent = (props: Props) => {
  return (
    <div>
        <p>Second Component</p>
        <p>O nome dele é: {props.name}</p>
    </div>
  )
}

export default SecondComponent