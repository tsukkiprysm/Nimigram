import {loginGoogle} from "../../firebase/auth.js";

export default function Introduction(props) {
    return(
        <div className={'landing-page-content'}>
            <p>
                O Nimigram é uma alternativa ao imediatismo social da vida moderna. Aqui, adotamos um meio tradicional de comunicação à distância, e o reconfiguramos para o meio digital.
            </p>
            <div className={'intro-buttons-container'}>
                <button onClick={props.login}>Login</button>
                <button onClick={props.create}>Criar conta</button>
                <button onClick={loginGoogle}>Entrar com o Google</button>
            </div>
        </div>
    );
}