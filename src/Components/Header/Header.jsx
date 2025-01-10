import { NavLink } from "react-router-dom"


const Header = () => {
  return (
    <div className="py-5 flex justify-between items-center">
        <div><h1 className="font-medium text-4xl">React-Map-Creator</h1></div>
        <div className="flex justify-center items-center gap-10 text-xl font-medium">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/creators"}>Creator</NavLink>
            <NavLink to={"/map"}>Map</NavLink>
            <NavLink to={"/"}>Contact</NavLink>
        </div>
    </div>
  )
}

export default Header