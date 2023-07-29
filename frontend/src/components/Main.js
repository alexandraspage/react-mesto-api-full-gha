import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {

    const user = React.useContext(CurrentUserContext);


    return (
        <>
            <section className="profile">
                <div className="profile__container">
                    <button className="profile__avatar-button" type="button" onClick={props.onEditAvatar}>
                        <img className="profile__avatar" src={user.avatar} alt="аватар" />
                    </button>
                    <div className="profile__info">
                        <h1 className="profile__name">{user.name}</h1>
                        <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
                        <p className="profile__description">{user.about}</p>
                    </div>
                </div>
                <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
            </section>

            <section className="elements">
                {props.cards.map((item) => {
                    return (

                        <Card key={item._id} card={item} onCardClick={props.onCardClick} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete} />
                    )
                })}
            </section>
        </>
    )
}

export default Main;