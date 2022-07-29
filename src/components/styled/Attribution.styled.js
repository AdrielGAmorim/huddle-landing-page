import styled from "styled-components";

export const StyledAttribution = styled.div`
    color: #fff;
    margin-top: -10px;
    padding: 10px 0;
    font-size: .9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.attribution};

    p a {
        text-decoration: none;
        color: #fff;
        font-weight: bold;
    }
`