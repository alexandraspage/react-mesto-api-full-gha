import check from '../images/check.svg'
import cross from '../images/cross.svg'

export function InfoTooltip(props) {

    return (
        <div className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className='popup__container'>
                {props.isSignedUp ?
                    (
                        <>
                            <img className='popup__image' src={check} alt='ОК' />
                            <h3 className="popup__title popup__title_access">Вы успешно зарегистрировались!</h3>
                        </>
                    )
                    :
                    (
                        <>
                            <img className='popup__image' src={cross} alt='ошибка' />
                            <h3 className="popup__title popup__title_access">Что-то пошло не так!
                                Попробуйте ещё раз.</h3>
                        </>
                    )
                }
                <button className="popup__close-button" type="button" onClick={props.onClosePopup}></button>
            </div>
        </div>
    )
}

