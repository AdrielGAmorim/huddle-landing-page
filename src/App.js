import { ThemeProvider } from 'styled-components';
import { theme } from './components/styled/theme';
import { Container } from './components/styled/Container.styled'
import { Header } from './components/Header'
import { Cards } from './components/Cards'
import { Footer } from './components/Footer'
import { GlobalStyle } from './components/styled/Global';
import { content } from './content'
import { Attribution } from './components/Attribution';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <Container>
          { content.map((item, index) => (
            <Cards key={ index } item={ item }/>
            )) }
        </Container>
        <Footer />
        <Attribution />
      </>
    </ThemeProvider>
  );
}

export default App;
