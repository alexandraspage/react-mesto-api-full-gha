import PopupWithForm from "./PopupWithForm"
import React from "react";

function EditAvatarPopup(props) {

  const ref = React.createRef();

  React.useEffect(() => {
    ref.current.value = '';
  }, [props.isOpen])

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: ref.current.value,
    });
  }

  return (
    <PopupWithForm title="Обновить аватар" name="avatar" onSubmit={handleSubmit} isOpen={props.isOpen} onClosePopup={props.onClose} buttonText="Сохранить">
      <div>
        <input id="avatar-input" className="popup__input popup__input_type_avatar" placeholder="Ссылка на картинку"
          type="url" name="avatar" ref={ref} required minLength="2" maxLength="200" />
        <span className="avatar-input-error popup__span"></span>
      </div>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;