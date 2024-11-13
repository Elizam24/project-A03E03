import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import CardInfo from "./components/CardInfo";
import ResidentsList from "./components/ResidentsList";
import Search from "./components/Search";
import './App.css';

function App() {
    const [location, setLocation] = useState(null);
    const [locationId, setLocationId] = useState(1);
    const { data, loading, error } = useFetch(`https://rickandmortyapi.com/api/location/${locationId}`);

    useEffect(() => {
        if (data) {
            setLocation(data);
        }
    }, [data]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error fetching location</div>;

    return (
        <div>
            <div className='hero'/>
            <div className="container"/> 
            <Search setLocation={setLocationId} />
            <h2>{location?.name}</h2>
            <CardInfo location={location} />
            <ResidentsList residents={location?.residents} />
        </div>
    );
}

export default App;


