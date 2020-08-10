// CLIENT SIDE
import React, { Component } from 'react';
import instance from '../ethereum/instance';
import web3 from '../ethereum/web3';
import md5 from 'md5';

class Create extends Component {
  state = {
    account: '',
    name: '',
    course: '',
    hash: '',
    desc: '',
    date: '',
    aadhar: '',
    uni: '',
    block: 'block0'
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const hash = md5(this.state.course + this.state.name + this.state.organisation);
    this.setState({ hash });
    try {
      const accounts = await web3.eth.getAccounts();
      await instance
        .methods.generateCertificate(this.state.account, this.state.aadhar, this.state.course, hash)
        .send({ gas: '1000000', from: accounts[0]});
    } catch(err) {
      console.log(err);
    }
    // data upload finishes...
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    this.setState({ date: today });
    console.log(today);
    this.setState({ block: "block1" });

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
        <form onSubmit={this.onSubmit}>


          <div>
            <h4>Issuer</h4>
            <input
              className="input"
              value={this.state.account}
            />
          </div>

          <div>
            <h4>Aadhar</h4>
            <input
              className="input"
              placeholder="Aadhar..."
              value={this.state.aadhar}
              onChange={event => this.setState({ aadhar: event.target.value })}
            />
          </div>

          <div>
            <h4>Name</h4>
            <input
              className="input"
              placeholder="Full Name..."
              value={this.state.name}
              onChange={event => this.setState({ name: event.target.value })}
            />
          </div>

          <div>
            <h4>Course ID</h4>
            <input
              className="input"
              placeholder="Course ID..."
              value={this.state.course}
              onChange={event => this.setState({ course: event.target.value })}
            />
          </div>

          <div>
            <h4>University</h4>
            <input
              className="input"
              placeholder="University name..."
              value={this.state.uni}
              onChange={event => this.setState({ uni: event.target.value })}
            />
          </div>

          <div>
            <h4>Description</h4>
            <textarea
              className="txt"
              placeholder="Description..."
              value={this.state.desc}
              onChange={event => this.setState({ desc: event.target.value })}
            >
            </textarea>
          </div>

          <button className="btn">Issue Certificate</button>
        </form>
        </div>

        <div className={this.state.block}>
          <div className="certificate">
            <h4 className="university">{this.state.uni}</h4>
            <h4 className="date">{this.state.date}</h4>
            <h4 className="name">{this.state.name}</h4>
            <h4 className="course">{this.state.course}</h4>
            <h4 className="description">{this.state.desc}</h4>

            <h4 className="aadhar">Government Id: {this.state.aadhar}</h4>
            <h4 className="account">Issued from: {this.state.account}</h4>
            <h4 className="hash">Credential ID: {this.state.hash}</h4>
        </div>
      </div>

        <style jsx>{`

          .certificate {
              background-color: #353b48;
              padding: 50px 10px 20px 10px;
              max-width: 80vw;
              height: 1000px;
              margin: 200px;
              margin-top: 5%;
              border-radius: 12px;
              border-style: dashed;
              border-color: #fff;
            }
            .university {
              font-family: Cinzel;
              font-size: 50px;
              margin-left: 20%;
              color: #fff;
            }

            .date {
              font-family: Cinzel;
              font-size: 14px;
              margin-left: 20%;
              color: #fff;

            }

            .name {
              font-family: Cinzel;
              font-size: 28px;
              margin-left: 20%;
              margin-top: 100px;
              color: #fff;
            }

            .course {
              font-family: Cinzel;
              font-size: 18px;
              margin-left: 20%;
              margin-top: 20px;
              color: #fff;
            }

            .description {
              font-family: Cinzel;
              font-size: 16px;
              margin-left: 20%;
              max-width: 500px;
              margin-top: 40px;
              color: #fff;
            }

            .aadhar {
              font-family: Cinzel;
              font-size: 20px;
              margin-left: 20%;
              max-width: 500px;
              margin-top: 100px;
              color: #fff;
            }

            .account {
              font-family: Cinzel;
              font-size: 16px;
              margin-left: 20%;
              max-width: 500px;
              margin-top: 60px;
              color: #fff;
            }

            .hash {
              font-family: Cinzel;
              font-size: 16px;
              margin-left: 20%;
              max-width: 500px;
              margin-top: 100px;
              margin-left: 40%;
              color: #fff;
            }

            form {
              margin-left: 30%;
              margin-top: 5%;
            }

            .input {
              border-radius: 0;
              border: 0;
              padding: 0;
              border-radius: 8px;
              height: 40px;
              width: 600px;
              font-family: Montserrat;
              font-size: 22px;
              padding: 10px 60px;
              background-color: #dcdde1;
            }

            .txt {
              border-radius: 0;
              border: 0;
              padding: 0;
              border-radius: 8px;
              height: 200px;
              width: 600px;
              font-family: Montserrat;
              font-size: 22px;
              padding: 10px 60px;
              background-color: #dcdde1;
            }

            .btn {
              border-radius: 0;
              border: 0;
              padding: 0;
              border-radius: 8px;
              height: 60px;
              color: #fff;
              padding: 10px 60px;
              margin-top: 20px;
              margin-left: 15%;
              background-color: #4cd137;
              margin-bottom: 50px;
              font-family: Montserrat;
              font-size: 28px;
              font-weight: 600;
            }

            h4 {
              font-family: Montserrat;
              font-size: 18px;
              font-weight: 600;
              margin-bottom: 10px;
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
              background-color: #192a56;
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
              background-color: #192a56;
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

export default Create;
