import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "components/Header";
import { useQuery } from "@apollo/client";
import { query_getUser } from "apollo";
import styled from "styled-components";
import { Footer } from "components/Footer";
import { Home } from "pages/Home";
import { About } from "pages/About";

function App() {
  const { loading, error, data } = useQuery(query_getUser);

  console.log({ loading, error, data });

  return (
    <Router>
      <Wrapper>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>

        <BodyWrapper>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </BodyWrapper>

        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      </Wrapper>
    </Router>
  );
}
export default App;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.div``;

const BodyWrapper = styled.div`
  flex-grow: 1;
`;
const FooterWrapper = styled.div``;
