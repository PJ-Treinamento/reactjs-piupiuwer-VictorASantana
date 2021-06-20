import React, {useState, useEffect} from "react";
import { LoginLabel } from "./styles";
import { StrongComponent } from "../Feed/styles";
import { LoginInput } from "./styles";

import './styles.tsx'
import { ButtonPostComponent } from "../../Components/NewPost/styles";

function Login(){
    return(
        <>
            <LoginLabel>
                <header className="loginAreaTitle">
                    Entrar no <StrongComponent>P</StrongComponent>iu<StrongComponent>P</StrongComponent>iuwer
                </header>
                <LoginInput placeholder="Email"></LoginInput>
                <LoginInput placeholder="Senha"></LoginInput>
                <p className="forgotThePassword">Esqueceu a senha?</p>
                <ButtonPostComponent className="Login" id="nPiu">Login</ButtonPostComponent>
            </LoginLabel>
        </>
    );
}

export default Login;

