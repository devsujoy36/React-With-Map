import { NavLink } from "react-router-dom"


const Header = () => {
  return (
    <div className="max-w-screen-2xl md:mx-auto mx-10 py-5 flex justify-between items-center">
        <div><h1>React-Map-Creator</h1></div>
        <div className="flex justify-center items-center gap-2">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/creators"}>Creator</NavLink>
            <NavLink to={"/map"}>Map</NavLink>
            <NavLink to={"/"}>Contact</NavLink>
        </div>
    </div>
  )
}

export default Header