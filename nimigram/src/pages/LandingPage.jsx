import {useState} from "react";
import {Link, Links} from "react-router-dom";

function LandingPage() {
    const [display, setDisplay] = useState("hide");

    const showSection = () => {
        setDisplay(display === "hide" ? "show" : "hide");
    }

    return(
        <section id={"landing-page-section"}>
            <div style={display === "show" ? { display: "none" } : {}}>
                <p>Bem-vindo(a) ao</p>
                <h1>Nimigram</h1>
                <button onClick={showSection}>Vamos começar</button>
            </div>
            <div style={display === "hide" ? { display: "none" } : {}}>
                <p>
                    O Nimigram é uma alternativa ao imediatismo social da vida moderna. Aqui, adotamos um meio tradicional de comunicação à distância, e o reconfiguramos para o meio digital.
                </p>
                <Link to={'/dashboard'}>
                    <button>Entrar com o Google</button>
                </Link>
            </div>
        </section>
    );
}

export default LandingPage