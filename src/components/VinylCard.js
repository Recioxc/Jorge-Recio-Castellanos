const VinylCard = ( {VinylData} ) => {
    return (
      <div style={{border:'gray 5px', margin:'20px', padding:'20px'}}>
          <strong>{VinylData.name}</strong>
          <div><strong>{VinylData.Artista}</strong></div>
          <div>{VinylData.pictureurl}</div>
          <div>{VinylData.price}</div>
         
      </div>
    )
  }
  export default VinylCard