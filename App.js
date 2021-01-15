import React from 'react'
import { NativeRouter as Router, Route, Switch } from 'react-router-native'
import { Container, Header, Body, Title } from 'native-base'
import ItemList from './components/ItemList'
import ItemInfo from './components/ItemInfo'

const App = () => {
  return (
    <Container>
      <Header>
        <Body><Title>Rick and Morty Wiki</Title></Body>
      </Header>
      <Router>
        <Switch>
          <Route exact path="/" component={ItemList} />
          <Route path="/character/:id" component={ItemInfo} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App