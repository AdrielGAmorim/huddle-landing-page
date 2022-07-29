import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { StyledSocialIcons } from './styled/SocialIcons.styled'

export function SocialIcons() {
  return (
    <StyledSocialIcons>
        <li>
            <a href="https://twitter.com/">
                <FaTwitter />
            </a>
        </li>
        <li>
            <a href="https://facebook.com/">
                <FaFacebook />
            </a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/adrielamorim/">
                <FaLinkedin />
            </a>
        </li>
    </StyledSocialIcons>
  )
}
