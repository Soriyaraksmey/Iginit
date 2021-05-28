import React from 'react';
import GlobalStyle from './components/Globalstyle';
import Homepage from './Pages/Home';
import { Route } from 'react-router-dom';
function App() {

  return (
    <div className="App">
      <GlobalStyle />
      <Route path={["/game/:id", "/"]}>
        <Homepage />
      </Route>

    </div>
  );
}

export default App;
