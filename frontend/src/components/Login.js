import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as auth from '../utils/auth.js';

function Login(props) {
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

        props.handleLogin({email, password});
       console.log(document.cookie);

    }

    return (
        <div className="access__container">
            <form className="access__form login-access__form" name="login" onSubmit={handleSubmit}>
                <h3 className="access__title">{props.title}</h3>
                <input id="email" className="access__input" placeholder="Email" type="email"
                    name="email" required minLength="2" maxLength="40" onChange={handleChange} value={formValue.email ?? ''}/>
                <span className="name-input-error popup__span"></span>
                <input id="password" className="access__input" placeholder="Пароль"
                    type="password" name="password" required minLength="2" maxLength="200" onChange={handleChange} value={formValue.password ?? ''}/>
                <span className="input-description-error popup__span"></span>
                <button type="submit" className="access__submit-button">{props.button}</button>
            </form>
        </div>

    )
}

export default Login;