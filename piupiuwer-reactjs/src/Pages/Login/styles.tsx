import styled from 'styled-components';

export const LoginLabel = styled.div`
    background: var(--color-box-base);
    margin: 20rem;
    color: var(--color-text-base);
    font-size: 2.4rem;
    border-radius: 0.6rem;
    padding: 1.2rem;
    display: flex;
    height: 45vh;
    max-width: 60vw;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    header{
        margin-top: -5rem;
        margin-left: 2rem;
    }

    .forgotThePassword{
        color: var(--color-text-base);
        font-size: 1.4rem;
        margin-top: 1.1rem;

    }

    .loginAreaTitle{
        font-family: sans-serif;
    }

    @media(max-width: 700px){
        margin: 20rem 10rem;
        padding: 1.1rem;
        min-width: 60vw;

        header{
            margin-top: -5rem;
            margin-left: 4rem;
        }
    }

    .Login{
        margin-top: 2.4rem;
        height: 2.4rem;
    }
`;

export const LoginInput = styled.input`
    background: var(--color-box-base-dark);
    color: var(--color-text-base);
    border: none;
    border-radius: 0.5rem;

    @media(min-width: 700px){
        width: 40vw;
        height: 5vh;
        margin-top: 1.6rem;
        margin-left: 1rem;
        padding: 1.0rem;
    }


    @media(max-width: 700px){
        width: 55vw;
        height: 5vh;
        margin-top: 1.6rem;
        padding: 1.0rem;
    }

`;