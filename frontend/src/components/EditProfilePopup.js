import PopupWithForm from "./PopupWithForm";
import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {

    const [name, setName] = React.useState();
    const [description, setDescription] = React.useState();
    const user = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        setName(user.name);
        setDescription(user.about);
    }, [user, props.isOpen])

    function handleNameChange(e) {
        setName(e.target.value);

    }

    function handleDesChange(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateUser({
            name,
            description,
        });

    }

    return (
        <PopupWithForm title="Редактировать профиль" name="profile" isOpen={props.isOpen} onClosePopup={props.onClose} onSubmit={handleSubmit} buttonText="Сохранить">
            <div>
                <input id="name-input" className="popup__input popup__input_type_name" placeholder="Имя" type="text"
                    name="profileName" required minLength="2" maxLength="40" onChange={handleNameChange} value={name ?? ''} />
                <span className="name-input-error popup__span"></span>
                <input id="input-description" className="popup__input popup__input_type_description" placeholder="О себе"
                    type="text" name="profileDescription" required minLength="2" maxLength="200" onChange={handleDesChange} value={description ?? ''} />
                <span className="input-description-error popup__span"></span>
            </div>
        </PopupWithForm>
    )
}

export default EditProfilePopup;