import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as auth from '../utils/auth.js';

function Register(props) {
    const [formValue, setFormValue] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormValue({
            ...formValue,
            [name]: value
        })

    }

    function handleSubmit(e) {

        e.preventDefault();
        const { email, password } = formValue;

        props.handleRegister({email, password});

    }

    return (
        <div className="access__container">
            <form className="access__form register-access__form" name="register" onSubmit={handleSubmit}>
                <h3 className="access__title">{props.title}</h3>
                <input id="email" className="access__input" placeholder="Email" type="email"
                    name="email" required minLength="2" maxLength="40" value={formValue.email} onChange={handleChange} />
                <span className="name-input-error popup__span"></span>
                <input id="password" className="access__input" placeholder="Пароль"
                    type="password" name="password" required minLength="2" maxLength="200" value={formValue.password} onChange={handleChange} />
                <span className="input-description-error popup__span"></span>
                <button type="submit" className="access__submit-button">{props.button}</button>
                <Link to="/sign-in" replace className="access__link">Уже зарегистрированы? Войти</Link>
            </form>
        </div>

    )
}

export default Register;