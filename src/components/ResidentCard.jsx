import { useEffect } from "react";
import useFetch from "../hooks/usefetch";

function ResidentCard({ url }) {
    const [resident, setResident] = useFetch(url);

    useEffect(() => {
        setResident(url);
    }, [url]);

    return (
        <div className='card'> 
            <div className='card_image'>
                <img className='card_image-img' src={resident?.image} alt={resident?.name} />
                <span className='card_status'>{resident?.status}</span>
            </div>
            <h3 className='card_name'>{resident?.name}</h3>  
            <div className='card_info'>
                <span className="card_info-item">
                    <span className="card_info-label">Species</span>
                    {resident?.species}
                </span>
                <span className="card_info-item">
                    <span className='card_info-label'>Origin</span>
                    {resident?.origin?.name}
                </span>
                <span className="card_info-item">
                    <span className='card_info-label'>Episodes where appear</span>
                    {resident?.episode?.length || 0}
                </span>
            </div>
        </div>
    );
}

export default ResidentCard;
