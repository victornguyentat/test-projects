import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddConfluencePage from './AddConfluencePage';
import Chatbot from './Chatbot';
import FrontPage from './FrontPage';



class App extends Component {

 
  render() {
    return (
      <>
      <main>
            <Switch>
                <Route path="/" component={FrontPage} exact />
                <Route path="/chatbot" component={Chatbot} />
                <Route path="/addConfluencePage" component={AddConfluencePage} />
            </Switch>
        </main>
      </>
    );
  }
}

export default App;