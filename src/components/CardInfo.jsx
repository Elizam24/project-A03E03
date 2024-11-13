
function CardInfo ({ location }) {
  // Verificar si location está definido y si los datos son válidos
    return (
    <div className='carddInfo'>
      <h2 className='carInfo_title'>{location?.name} </h2>
      <div className= 'cardInfo_container'>
        <div className="cardInfo_item">
        <h3 className="cardInfo_item-title">Type</h3>
        <p className="cardInfo_item-data">{location?.type}</p>
     </div>
      <div className="cardInfo_item">
        <h3 className="cardInfo_item-title">Dimension</h3>
        <p className="cardInfo_item-data">{location?.dimension}</p>
      </div>
      <div className="cardInfo_item">
        <h3 className="cardInfo_item-title">Population</h3>
        <p className="cardInfo_item-data">{location?.population}</p>
      </div>
    </div>
    </div>
  )
}


export default CardInfo
