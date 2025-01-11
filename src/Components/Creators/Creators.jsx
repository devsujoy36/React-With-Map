import { useLoaderData } from "react-router-dom"
import Creator from "./Creator";

const Creators = () => {
  const creators = useLoaderData()
  

  return (
    <div className="max-w-screen-2xl md:mx-auto mx-10 text-center">
      <h1>Creators</h1>
      <div className="grid grid-cols-4 gap-2">
        {creators.map((creator,idx)=><Creator key={idx} creator={creator}/>)}
      </div>
    </div>
  )
}

export default Creators