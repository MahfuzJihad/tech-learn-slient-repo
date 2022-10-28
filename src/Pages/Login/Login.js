import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button variant="outline-primary"><FaGoogle></FaGoogle>Login with Google</Button>
                <Button variant="outline-primary"><FaGithub></FaGithub>Login with Google</Button>


            </ButtonGroup>
        </div>
    );
};

export default Login;