import { NavLink } from "react-router-dom"


const Header = () => {
  return (
    <div>
        <div><h1>React-Map-Creator</h1></div>
        <div>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/creator"}>Creator</NavLink>
            <NavLink to={"/map"}>Map</NavLink>
            <NavLink to={"/"}>Contact</NavLink>
        </div>
    </div>
  )
}

export default Header