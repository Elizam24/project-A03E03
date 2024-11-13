import { useEffect } from "react";
import useFetch from "../hooks/usefetch";

function ResidentCard({ url }) {
    const [resident, setResident] = useFetch(url);

    useEffect(() => {
       setResident(url);
    }, [url]) ;
    const status= resident?.status.tolowerCase()
    const statusIcon= status ≡ 'alive'? '🟢':
    status ≡ 'dead'? '🔴':'⚫'

    return (
        <div className='card'> 
            <div className='card_image'>
                </div>
                <div className="card body">
                <h3 className='card_name'>{resident?.name}</h3>
            
            <div className='card_info'>
              </div>  
            </div>
        </div>
    );
}

export default ResidentCard;
