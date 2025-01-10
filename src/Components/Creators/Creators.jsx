import { useLoaderData } from "react-router-dom"

const Creators = () => {
  const creator = useLoaderData()
  console.log(creator);
  return (
    <div className="max-w-screen-2xl md:mx-auto mx-10 flex justify-center items-center">Creators</div>
  )
}

export default Creators