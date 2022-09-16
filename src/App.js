import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import './App.css';
import Content from './features/Content/Content';
import Subreddits from './features/Subreddits/Subreddits';
import ScrollToTop from './utilities/ScrollToTop';



function App() {
  return (
    
    <Router>
      <div className="App">
        <header >
          <Subreddits />
        </header>
        <main>
          <ScrollToTop />
          <Route path="/">
              <Redirect to="/r/soccer" />
            </Route>
          <Route path="/r/:subreddit">
            <Content />
          </Route>
          
        </main>
      </div>
    </Router>
    
  );
}

export default App;
