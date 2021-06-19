import styled from 'styled-components';

export const StrongComponent = styled.strong`
    color: #e5383b;
`;

export const HoneComponent = styled.h1`
    color: #fff;
    font-size: 5.8rem;
    font-family: sans-serif;

    @media(max-width: 700px){
        margin-top: 1.6rem;
        margin-left: 2rem;
        font-size: 2.6rem;
    }
`;

export const HeaderComponent = styled.header`
    display: flex;
    justify-content: center;

    @media(max-width: 700px){
        display: flex;
        justify-content: right;
        margin-left: 3rem;
    }
`;

export const MainComponent = styled.main`
    padding: 1.6rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    @media(max-width: 700px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }

`;

export const FeedSpaceComponent = styled.div`
    margin-top: 12rem;
    padding: 1.6rem 2.5rem;
    background: var(--color-background-light);
    height: 40vh;
    max-width: 800vw;
    min-width: 50vw;
    font-size: 1.6rem;
    color: var(--color-text-base);
    border-radius: 0.8rem;

    @media(max-width: 700px){
        margin-top: 12rem;
    }
`;

export const SideBarMenu = styled.div`
    padding: 1.5rem 1.2rem; 
    font-size: 1.5rem;
    color: var(--color-text-base);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    ul{
        list-style: none;
        padding: 0.4rem;
    }

    ul li{
        padding: 0.4rem;
    }

    .userProfilePhoto{
        margin-top: -6rem;
        height: 14.0rem;
        width: 14.0rem;
    }

    .sideBarMenuTitle{
        font-size: 2.4rem;
        color: var(--color-primary);
    }

    .leftSide{
        visibility: hidden;
    }

    @media(max-width: 700px){
        .userProfilePhoto{
            margin-top: 3rem;
            margin-left: -4rem;
            height: 6rem;
        }
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-left: -5rem;
        
        h2{
            display: none;
        }
        
        ul li{
            margin-top: 4rem;
            margin-right: 1.6rem;
            margin-left: 1.6rem;
        }

        .liItem{
            display: none;
        }
        
    }
`;



