import { Link } from "react-router";


export default function Header() {
  return (
    <div>
        <Link to={"/login"} onClick={()=>{localStorage.removeItem("Authorization")}}>log out</Link>
    </div>
  )
}
