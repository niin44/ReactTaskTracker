const Button = ({text, onClick, showAdd}) => {
  let className = "btn col"

  return (
    <button className={className + (showAdd ? " btn-danger" : " btn-primary")} onClick={onClick}>
        {text}
    </button>
  )
}

export default Button