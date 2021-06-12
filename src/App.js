import React from 'react';
import GlobalStyle from './components/Globalstyle';
import Homepage from './Pages/Home';
import { Redirect, Route } from 'react-router-dom';
import Nav from './components/Nav';
function App() {

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Homepage />
      </Route>
      <Redirect to="/"></Redirect>

    </div>
  );
}

export default App;
