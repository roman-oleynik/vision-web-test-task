import React from 'react';
import { MainPage } from 'app/pages/MainPage';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { LoginPage } from 'app/pages/LoginPage';
import { BooksPage } from 'app/pages/BooksPage';
import { ProfilePage } from 'app/pages/ProfilePage';
import { Navbar } from 'app/components/Navbar';



function App() {
  return (
  <>
    <Navbar />
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/books" component={BooksPage} />
      <Route path="/profile" component={ProfilePage} />
    </Switch>
  </>
  );
}

export default App;