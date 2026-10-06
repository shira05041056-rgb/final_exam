import { Link } from "react-router";
import "./header.css"

export default function Header() {
  return (
    <header>
        <h1>מערכת התראות</h1>
        <Link className="logout" to={"/login"} onClick={()=>{localStorage.removeItem("Authorization")}}>log out</Link>
    </header>
  )
}
