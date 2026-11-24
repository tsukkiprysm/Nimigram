import {useState} from "react";
import Welcome from "../components/landingPageComponents/Welcome.jsx";
import Introduction from "../components/landingPageComponents/Introduction.jsx";
import Login from "../components/landingPageComponents/Login.jsx";
import CreateAccount from "../components/landingPageComponents/CreateAccount.jsx";
import {useAuth} from "../authContext/AuthContext.jsx";
import {Navigate} from "react-router-dom";
import CompleteProfile from "../components/landingPageComponents/CompleteProfile.jsx";

function LandingPage() {
    const {userLoggedIn, userProfile, profileLoading} = useAuth();

    //console.log('UserProfile lp: ' + userProfile);
    //console.log('ProfileLoading lp: ' + profileLoading);
    //console.log('UserLoggedIn lp: ' + userLoggedIn);

    //content salvo como string para depois ser usado para a comparação do switch
    const [content, setContent] = useState('welcome');

    //função renderContent que usa um switch para decidir qual componente mostrar
    const renderContent = () => {
        if(userLoggedIn && !profileLoading && !userProfile) {
            return <CompleteProfile/>
        }

        switch (content) {
            case 'welcome':
                return <Welcome intro={() => setContent('introduction')}/>
            case 'introduction':
                return <Introduction
                            login={() => setContent('login')}
                            create={() => setContent('create')}/>
            case 'login':
                return <Login/>
            case 'create':
                return <CreateAccount/>
            default:
                return null;
        }
    }

    return(
        <>
            {/*Manda o utilizador para o dashboard caso já esteja logado e tenha perfil*/}
            {userLoggedIn && userProfile && (<Navigate to={'/dashboard'} replace={true}/>)}
            <section id={'landing-page-section'}>
                {renderContent()}
            </section>
        </>
    );
}

export default LandingPage