import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color: ${({ theme }) => theme.colors.footer};
    color: #fff;
    padding: 10px 0;

    ul {
        list-style-type: none;
    }

    ul li {
        margin-bottom: 20px;
    }

    li a {
        text-decoration: none;
        color: #fff;
    }

    li a:hover {
        text-decoration: underline;
    }

    p {
        text-align: right;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        text-align: center;

        ul {
            padding: 0;
        }

        p {
            text-align: center;
        }
    }
`