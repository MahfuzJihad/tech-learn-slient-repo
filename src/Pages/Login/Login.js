import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';



const Login = () => {

    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} variant="outline-primary"><FaGoogle></FaGoogle>Login with Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub>Login with Github</Button>
            </ButtonGroup>
        </div>
    );
};

export default Login;