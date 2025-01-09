import { useLoaderData } from "react-router-dom"

const Creators = () => {
    const creator = useLoaderData()
    console.log(creator);
  return (
    <div>Creators</div>
  )
}

export default Creators