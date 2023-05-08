import styled from '@emotion/styled';

export const ButtonContainer = styled.div`
display: flex;
gap: 8px;
`;

export const Button = styled.button`
padding: 4px 8px;
background-color: #fff;
border-radius: 0.4rem;
border: 1px solid rgba(0, 0, 0, 0.5);
transition: background-color 300ms ease-in-out, border 300ms ease-in-out;
:hover{
    background-color: #38ebe2;
    border: 1px solid rgba(0, 0, 0, 0.0);
}
`;