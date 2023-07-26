import PopupWithForm from "./PopupWithForm"
import React from "react";

function AddPlacePopup(props) {
    const [name, setName] = React.useState();
    const [link, setLink] = React.useState();

    React.useEffect(() => {
        setName('');
        setLink('');
    }, [props.isOpen])

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleLinkChange(e) {
        setLink(e.target.value);

    }

    function handleSubmit(e) {
        e.preventDefault();

        props.onCreateCard({
            name,
            link
        });
    }

    return (
        <PopupWithForm title="Новое место" name="card" onSubmit={handleSubmit} isOpen={props.isOpen} onClosePopup={props.onClose} buttonText="Сохранить">
            <div>
                <input id="card-name-input" className="popup__input popup__input_card_name" placeholder="Название" type="text"
                    name="name" required minLength="2" maxLength="30" onChange={handleNameChange} value={name ?? ''} />
                <span className="card-name-input-error popup__span"></span>
                <input id="card-link-input" className="popup__input popup__input_card_link" placeholder="Ссылка на картинку"
                    type="url" name="link" required onChange={handleLinkChange} value={link ?? ''} />
                <span className="card-link-input-error popup__span"></span>
            </div>
        </PopupWithForm>
    )
}
export default AddPlacePopup;