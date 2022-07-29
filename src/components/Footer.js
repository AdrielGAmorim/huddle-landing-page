import { Container } from "./styled/Container.styled"
import { Flex } from "./styled/Flex.styled"
import { SocialIcons } from "./SocialIcons"
import { StyledFooter } from "./styled/Footer.styled"

export function Footer() {
  return (
    <StyledFooter>
        <Container>
            <img src='./images/logo_white.svg' alt='' />

            <Flex>
                <ul>
                    <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </li>
                    <li>+1-543-123-4567</li>
                    <li>
                        <a href='mailto:example@huddle.com' target='_blank'>example@huddle.com</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href='#'>About Us</a>
                    </li>
                    <li>
                        <a href='#'>What We Do</a>
                    </li>
                    <li>
                        <a href='#'>FAQ</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href='#'>Carrer</a>
                    </li>
                    <li>
                        <a href='#'>Blog</a> 
                    </li>
                    <li>
                        <a href='#'>Contact Us</a>
                    </li>
                </ul>

                <SocialIcons />
            </Flex>

            
            <p>&copy; Copyright 2022 Huddle. All rights reserved.</p>
        </Container>
    </StyledFooter>
  )
}
