import React, { Component } from 'react';
import './App.scss';
import Content from './components/content/Content';
import MyNav from './components/nav/MyNav';
import Menu from './components/sidebar/SideBar';
import Description from './components/description/Description';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="row">
          <div className="col-md-4 logo"></div>
          <div className="col-md-8 header-box">
            <MyNav />
          </div>
        </header>
        <section></section>
        <main className="row">
          <div className="col-sm-4 disable-padding">
            <Menu />
          </div>
          <div className="col-sm-8 disable-padding">
            <Description />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
