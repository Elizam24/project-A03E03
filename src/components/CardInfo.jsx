function CarddInfo ({ info }) {
  // Verificar si location está definido y si los datos son válidos
  
  return (
    <div className="carddInfo">
      <div className="cardInfo_item">
        <h3 className="cardInfo_item-title">Type</h3>
        <p className="cardInfo_item-data">{type.info}</p>
      </div>
      <div className="cardInfo_item">
        <h3 className="cardInfo_item-title">Dimension</h3>
        <p className="cardInfo_item-data">{dimension}</p>
      </div>
      <div className="cardInfo_item">
        <h3 className="cardInfo_item-title">Population</h3>
        <p className="cardInfo_item-data">{population}</p>
      </div>
    </div>
  );
}

export default CarddInfo
