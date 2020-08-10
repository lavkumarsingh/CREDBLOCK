// CLIENT SIDE
import React, { Component } from 'react';
import instance from '../ethereum/instance';
import web3 from '../ethereum/web3';
import md5 from 'md5';

class Index extends Component {
  state = {
    account: ''
  }
  render() {
    web3.eth.getAccounts().then( account => {
      if(account[0] !== ''){
      this.setState({ account: account[0] });
    }
    });
    return(
      <div className="container">
        <nav>
          <h5>Certify</h5>

          <div className="nav-item">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/create">Create</a></li>
              <li><a href="/verify">Verify</a></li>
            </ul>
          </div>
        </nav>

        <div className="body">
          <h1 className="brand">Certify</h1>
          <h2>You have logged in using: </h2>
          <h4 className="address">{this.state.account}</h4>

        </div>


        <style jsx>{`
            .container {
              margin: 0 50px;
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              margin: 0;
              padding: 0;
              background-color: #f5f6fa;
            }

            .body {
              margin-top: 100px;
            }

            nav {
              background-color: #2f3640;
              position: absolute;
              right: 0;
              left: 0;
              top: 0;
              height: 60px;
            }

            nav h5 {
              font-family: Montserrat;
              font-size: 30px;
              color: white;
              margin: 15px 50px;
            }

            ul {
              list-style-type: none;
              margin: 0;
              padding: 0;
              overflow: hidden;
              position: absolute;
              top: 0;
              right: 0;
            }

            li {
              float: left;
            }

            li a {
              display: block;
              padding: 8px;
              margin-right: 40px;
              font-family: Montserrat;
              color: #fff;
              text-decoration: none;
              margin-top: 10px;
            }

            h1 {
              font-family: Montserrat;
              font-size: 200px;
              margin-left: 35%;
              margin-top: 15%;
              color: #2f3640;
            }

            h2 {
              font-family: Montserrat;
              height: 15px;
              padding: 10px;
              border-radius: 8px;
              color: #2f3640;
              font-weight: 400;
              margin-left: 40%;
              margin-top: 0%;
              color: #4b6584;
            }

            h4 {
              font-family: Montserrat;
              height: 15px;
              padding: 10px;
              border-radius: 8px;
              color: #4b6584;
              font-weight: 600;
              margin-left: 40%;
              margin-top: 0%;
              font-size: 24px;
            }

          `}</style>
      </div>
    )
  }
}

export default Index;
