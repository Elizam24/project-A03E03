import { useEffect, useState } from "react"
import useFetch from "./hooks/useFetch"
import CardInfo from "./components/CardInfo"
import ResidentsList from "./components/ResidentsList"
import Search from "./components/Search"
import './App.css'

function App() {
    const [location, setLocation] = useFetch()
    const [locationId, setLocationId] = useState(1)


    useEffect(() => {
        setLocation(`https://rickandmortyapi.com/api/location/${locationId}`)
    }, [locationId]);

    const setLocationIdSearch = (value) => {
        setLocationId(value)
    }

    return (
        <div>
            <div className= 'hero'/>
             <div className="container"/> 
            <Search setLocation={setLocationIdSearch} />

            <h2>{location?.name}</h2>
            <CardInfo location={location} />
            <ResidentsList residents={location?.residents} />
        </div>
    );
}

export default App;


