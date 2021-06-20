import styled from 'styled-components';

export const PostComponent = styled.div`
    textarea{
        width: 60vw;
        background: var(--color-backgroun-light);
        color: var(--color-text-base);
        border-style: none;

        ::placeholder{
            color: var(--color-text-base);
        }
    }
`;

export const ButtonPostComponent = styled.button`
    background: var(--color-primary);
    color: var(--color-text-base);
    border-style: none;
    height: 2rem;
    width: 10rem;
    border-radius: 0.3rem;

    :hover{
        background: var(--color-primary-dark);
    }
`;