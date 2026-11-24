import {useState} from "react";
import {useAuth} from "../../authContext/AuthContext.jsx";
import {db} from "../../firebase/firebase.js";
import {getDocs, doc, collection, runTransaction} from "firebase/firestore";

export default function CompleteProfile() {
    const {currentUser} = useAuth();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const [isCreatingProfile, setIsCreatingProfile] = useState(false);

    const normalizeUsername = (username) => {
        return username.trim().toLowerCase();
    }
    const isValidUsername = (username) => {
        return USERNAME_REGEX.test(username);
    }

    const USERNAME_REGEX = /^[a-z][a-z0-9_]{4,24}$/;
    const handleSubmit = async (e) => {
        if(isCreatingProfile) {
            return;
        }

        e.preventDefault();

        const normalizedUsername = normalizeUsername(username);
        const fullName = `${firstName} ${lastName}`;

        setError('');

        //checar se o username é valido com regex
        if (!isValidUsername(normalizedUsername)) {
            setError('O nome de utilizador deve começar com uma letra e ter entre 5 e 25 caracteres (a-z, números e _).');
            return;
        }

        setIsCreatingProfile(true);

        try {
            const userCollectionRef = collection(db, 'users');

            //ler sobre o runTransaction
            await runTransaction(db, async (transaction) => {
                //depois checar se o username está disponível
                const userDocs = await getDocs(userCollectionRef)
                    userDocs.forEach((doc) => {
                    const snapshotData = doc.data();
                    if(snapshotData.username === normalizedUsername) {
                        const usernameTakenError = new Error('Username já está em uso.')
                        usernameTakenError.code = 'username-taken'
                        throw usernameTakenError;
                    }
                })

                //se o username estiver disponível, criar o perfil do utilizador
                transaction.set(doc(userCollectionRef, currentUser.uid), {
                    id: currentUser.uid,
                    name: fullName,
                    username: normalizedUsername,
                    email: currentUser.email,
                    photoURL: currentUser.photoURL ?? null,
                    bio: "Estou no nimigram!",
                    friends: []
                });
            })

        } catch(error) {
            console.log(error);

            if (error.code === 'username-taken') {
                setError('O nome de utilizador não está disponível.');
            } else {
                setError('Ocorreu um erro: ' + error.code);
            }
        } finally {
            setIsCreatingProfile(false);
        }

        console.log('UserProfile criado!');
    }

    return(
        <>
            {error && alert(error)}
            <div className={'landing-page-content'}>
                <h1>Quase lá!</h1>
                <p>Vamos completar o seu perfil</p>
                <form className={'auth-form'} onSubmit={handleSubmit}>
                    <label>
                        Nome
                        <input
                            type={'text'}
                            placeholder={'Nome próprio'}
                            required={true}
                            onChange={(e) => setFirstName(f => f = e.target.value)}
                        />
                        <input
                            type={'text'}
                            placeholder={'Apelido'}
                            required={true}
                            onChange={(e) => setLastName(l => l = e.target.value)}
                        />
                    </label>
                    <label>
                        Username
                        <input
                            type={'text'}
                            placeholder={'Insira um nome de utilizador'}
                            required={true}
                            onChange={(e) => setUsername(u => u = e.target.value)}
                        />
                    </label>
                    <button
                        disabled={isCreatingProfile}
                        className={'submit-login'}
                        type={'submit'}
                    >
                        Criar perfil
                    </button>
                </form>
            </div>
        </>
    );
}