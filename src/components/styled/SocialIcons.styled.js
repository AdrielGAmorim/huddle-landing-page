import styled from "styled-components";

export const StyledSocialIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    li {
        list-style: none;
    }

    a {
        border: 1px solid #fff;
        border-radius: 50%;
        color: #fff;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
        width: 40px;
        height: 40px;
        transition: all .5s ease-in-out;
    }

    a:hover {
        color: ${({ theme }) => theme.colors.footer};
        background-color: #fff;
    }
`