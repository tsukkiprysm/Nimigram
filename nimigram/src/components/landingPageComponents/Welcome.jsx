export default function Welcome(props) {
    return(
        <div>
            <p>Bem-vindo(a) ao</p>
            <h1>Nimigram</h1>
            <button onClick={props.intro}>Vamos começar</button>
        </div>
    );
}