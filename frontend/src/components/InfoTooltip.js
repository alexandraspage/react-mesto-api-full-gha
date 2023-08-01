
export function InfoTooltip(props) {

    return (
        <div className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className='popup__container'>
                        <>
                            <img className='popup__image' src={props.info.img} alt='ОК' />
                            <h3 className="popup__title popup__title_access">{props.info.text}</h3>
                        </>
                
                <button className="popup__close-button" type="button" onClick={props.onClosePopup}></button>
            </div>
        </div>
    )
}

