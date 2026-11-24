import {useRef, useState} from "react";
import {Navigate, Link} from "react-router-dom";
import {login} from "../../firebase/auth.js";
import {useAuth} from "../../authContext/AuthContext.jsx";

export default function Login() {
    const {userLoggedIn} = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSingingIn, setIsSingingIn] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!isSingingIn) {
            try {
                setError('');
                setIsSingingIn(true);
                await login(email, password);
            } catch (error) {
                setError('Não foi possível fazer login, erro: ' + error.code);
            } finally {
                console.log('User logado!');
                setIsSingingIn(false);
            }
        }
    }

    return(
        <>
            {error && alert(error)}
            <div className={'landing-page-content'}>
                <h1>Login</h1>
                <form className={'auth-form'} onSubmit={handleSubmit}>
                    <label>
                        Email
                        <input
                            id={'email'}
                            type={'email'}
                            placeholder={'Insira seu email'}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label>
                        Senha
                        <input
                            id={'senha'}
                            type={'password'}
                            placeholder={'Insira sua senha'}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <button
                        disabled={isSingingIn}
                        className={'submit-login'}
                        type={'submit'}
                        value={'Entrar'}
                    >
                        Entrar
                    </button>
                </form>
            </div>
        </>
    );
}