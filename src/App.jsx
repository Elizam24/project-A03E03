import { useEffect, useState } from "react"
import useFetch from "./hooks/useFetch"
import CardInfo from "./components/CardInfo"
import ResidentsList from "./components/ResidentsList"
import Search from "./components/Search"


function App() {
    const [location, setLocation] = useFetch()
    const [locationId, setLocationId] = useState()

    useEffect(() => {
        setLocation(`https://rickandmortyapi.com/api/location/${locationId}`)
    }, [locationId])

    return (
        <div>
            <div className= 'hero'/>
             <div className="container"/> 
            <Search setLocation={setLocationId} />
            <h2>{location?.name}</h2>
            <CardInfo location={location} />
            <ResidentsList residents={location?.residents} />
        </div>
    )
}

export default App


