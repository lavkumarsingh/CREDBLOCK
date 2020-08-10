// CLIENT SIDE
import React, { Component } from 'react';
import instance from '../ethereum/instance';
import web3 from '../ethereum/web3';
import md5 from 'md5';
// 098bc8ecc4b72c6ea5d165a654bafd5f
class Verify extends Component {
  state = {
    account: '',
    address: '',
    aadhar: '',
    course: '',
    hashId: '',
    block: 'block0'
  }

  onFetch = async (e) => {
    e.preventDefault();

    try {
      const getbykey = await instance.methods.getValue(this.state.hash)
        .call().then(result => {
          console.log(result[0], result[1], result[2], result[3]);
          this.setState({address: result[0]});
          this.setState({aadhar: result[1]});
          this.setState({course: result[2]});
          this.setState({hashId: result[3]});
        });
        console.log(getbykey);
        this.setState({ block: 'block1' });
    } catch(err) {
      console.log(err);
    }
  };

  render() {
    web3.eth.getAccounts().then( account => {
      if(account[0] !== ''){
      this.setState({ account: account[0] });
    } else {
      this.setState({ account: 'Login to your Metamask' })
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

          <h4 className="address">{this.state.account}</h4>
        </nav>

        <div className="body">

        <form onSubmit={this.onFetch}>

          <div>
            <input
              className="input"
              value={this.state.hash}
              placeholder="Enter the hash..."
              onChange={event => this.setState({ hash: event.target.value })}
            />
          </div>

          <button className="btn">Verify</button>
          <h2>{this.state.fetch}</h2>
        </form>

          <div className={this.state.block}>
            <div className="certificate">
              <h2>Credential id</h2>
              <p>{this.state.hashId}</p>
              <br/><hr/>
              <h2>Government id</h2>
              <p>{this.state.aadhar}</p>
              <br/><hr/>
              <h2>Issued by</h2>
              <p>{this.state.address}</p>
              <br/><hr/>
              <h2>Course</h2>
              <p>{this.state.course}</p>
            </div>
          </div>
        </div>

        <style jsx>{`
            form {
              display: flex;
              margin-top: 15%;
              margin-left: 28%;
            }
            p {
              font-family: Montserrat;
              font-size: 18px;
              color: #fff;
            }
            h2 {
              font-family: Montserrat;
              font-size: 18px;
              color: #fff;
            }
            hr {
              margin-left: -400px;
              width: 1000px;
            }
            .btn {
              height: 60px;
              width: 150px;
              border: 0;
              border-radius: 0 8px 8px 0;
              font-family: Montserrat;
              font-size: 24px;
              background-color: #44bd32;
              color: #fff;
              font-family: Montserrat;
              font-size: 28px;
              font-weight: 600;
            }
            .input {
              border: 0;
              border-radius: 8px 0 0 8px;
              height: 40px;
              width: 600px;
              font-family: Montserrat;
              font-size: 24px;
              padding: 10px 60px;
              background-color: #dcdde1;
            }
            .certificate {
              background-color: #273c75;
              padding: 50px 500px;
              width: 200px;
              margin: 380px;
              margin-top: 5%;
              border-radius: 12px;
            }

            .block1 {
              display: block;
            }
            .block0 {
              display: none;
            }

            .container {
              margin: 0 50px;
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              margin: 0;
              padding: 0;
              background-color: #f5f6fa;
            }

            .body {
              margin-top: 100px;
            }

            nav {
              background-color: #16a085;
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

            .address {
              font-family: Montserrat;
              background-color: #16a085;
              height: 15px;
              padding: 20px;
              border-radius: 8px;
              color: #fff;
              font-weight: 600;
              position: absolute;
              top: 60px;
              right: 15px;
            }
          `}</style>

      </div>
    )
  }
}

export default Verify;
