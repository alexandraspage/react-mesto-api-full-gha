function ImagePopup(props) {
  
  return (
    <div className={`popup image-popup ${props.card ? 'popup_opened' : ''}`}>
      <div className="image-popup__container">
        <img className="image-popup__image" src={`${props.card?.link}`} alt={`${props.card?.name}`} />
        <h2 className="image-popup__title">{`${props.card?.name}`}</h2>
        <button className="image-popup__close-button popup__close-button" type="button" onClick={props.onClosePopup}></button>
      </div>
    </div >
  )

}

export default ImagePopup;