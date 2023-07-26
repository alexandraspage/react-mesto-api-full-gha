function PopupWithForm(props) {

  return (
    <div className={`popup ${props.name}-popup ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className={`popup__container ${props.name}-popup__container`}>
        <form className={`popup__form ${props.name}-popup__form`} name={`${props.name}`} onSubmit={props.onSubmit}>
          <h3 className="popup__title">{`${props.title}`}</h3>
          {props.children}
          <input type="submit" className={`popup__submit-button ${props.name}-popup__submit-button`} value={`${props.buttonText}`} />
        </form>
        <button className="popup__close-button" type="button" onClick={props.onClosePopup}></button>
      </div>
    </div>
  )
}

export default PopupWithForm;