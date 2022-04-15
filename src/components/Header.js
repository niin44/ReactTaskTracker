import Button from "./Button"
import { useLocation } from "react-router-dom"

const Header = ({ onAdd, showAdd }) => {
  const location = useLocation()

  return (
    <div className="row">
        <h1 className="col-9">Task Tracker</h1>
        {location.pathname === '/' && <Button 
        text={showAdd ? "Close" : "Add"} 
        onClick={onAdd} 
        showAdd = {showAdd}/>}
    </div>
  )
}

export default Header