import * as React from 'react';

export default () => (
  <React.Fragment>
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
      <a className="navbar-brand" href="#">
        <img src="https://www.w3schools.com/bootstrap4/bird.jpg" style={{ height: "20px" }}/>
      </a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">Link 1</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link 2</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link 3</a>
        </li>
      </ul>
    </nav>

    <div className="container">
      <div className="row jumbotron text-center">
        <div className="container">
          <h1>My First Bootstrap Page</h1>
          <p>Resize this responsive page to see the effect!</p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <h3>Column 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
        </div>
        <div className="col-sm-4">
          <h3>Column 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
        </div>
        <div className="col-sm-4">
          <h3>Column 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
        </div>
      </div>
    </div>

    <footer className="footer">
      <div className="container">
        <p className="text-muted">Place sticky footer content here.</p>
      </div>
    </footer>
  </React.Fragment>
);
