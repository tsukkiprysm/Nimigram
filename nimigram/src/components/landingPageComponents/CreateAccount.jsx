import {useRef, useState} from "react";
import {createUser} from "../../firebase/auth.js";
import {useAuth} from "../../authContext/AuthContext.jsx";

export default function CreateAccount() {
    const {userLoggedIn} = useAuth();

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');
    const [isCreatingAccount, setIsCreatingAccount] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(emailRef.current);
        console.log(passwordRef.current);
        console.log(confirmPasswordRef.current);

        if (passwordRef.current !== confirmPasswordRef.current) {
            return setError('As senhas não são iguais.');
        }

        if (passwordRef.current.length < 6) {
            return setError('A senha deve ter no mínimo 6 caracteres');
        }

        if(!isCreatingAccount) {
            try {
                setError('');
                setIsCreatingAccount(true);
                await createUser(emailRef.current, passwordRef.current);
            } catch (error) {
                console.log(error)
                setError('Não foi possível criar a conta.');
            }
        }

        setIsCreatingAccount(false);
    }

    return(
        <>
            {error && alert(error)}
            <div className={'landing-page-content'}>
                <h1>Criar conta</h1>
                <form className={'auth-form'} onSubmit={handleSubmit}>
                    <label>
                        Email
                        <input
                            ref={emailRef}
                            id={'email'}
                            type={'email'}
                            placeholder={'Insira seu email'}
                            onChange={(e) => emailRef.current = e.target.value}
                        />
                    </label>
                    <label>
                        Senha
                        <input
                            ref={passwordRef}
                            id={'senha'}
                            type={'password'}
                            placeholder={'Insira sua senha'}
                            onChange={(e) => passwordRef.current = e.target.value}
                        />
                    </label>
                    <label>
                        Confirme sua senha
                        <input
                            ref={confirmPasswordRef}
                            id={'confirmarSenha'}
                            type={'password'}
                            placeholder={'Confirme sua senha'}
                            onChange={(e) => confirmPasswordRef.current = e.target.value}
                        />
                    </label>
                    <button
                        disabled={isCreatingAccount}
                        className={'submit-login'}
                        type={'submit'}
                        value={'Criar conta'}
                    >
                        Criar conta
                    </button>
                </form>
            </div>
        </>
    );
}