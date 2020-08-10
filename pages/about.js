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

          <h4 className="address">{this.state.account}</h4>
        </nav>

        <div className="body">
        <h1>Blockchain POC</h1>
        <h2>Introduction</h2>
        <p>According to [1], academic certificates are highly esteemed as
            they serve as an indicator of the human capital of their bearers.
            Human capital refers to the skills, competencies, knowledge and
            aptitudes achieved through education [2]. Academic
            qualifications are particularly important in employment
            situations as they serve as a guarantee of not just the knowledge,
            expertise and skills of the holders but also of their abilities,
            reliability and dedication [3]. From the perspective of the
            bearers, [4] found a positive correlation between educational
            attainment levels and better employment prospects and
            economic security. [5] pointed out that academic qualifications
            are deemed to be genuine when they are conferred by a
            university that is legally authorized to award such certificates.
            Because they are so valuable, people often lie about their
            academic qualifications by producing fake certificates. [6]
            mentioned that in the United States there are currently 2 million
            fake degree certificates in circulation and 300 unauthorized
            universities operating. [7] indicated that the United Sates has the
            highest number of fake institutions in the world followed by the
            United Kingdom which has about 270 fake institutes. Healy
            (2015) found that up to 35% of candidates in Australia falsified
            their academic credentials for the sake of employment. [8]
            observed that most candidates lie at least about some part of
            their educational credentials and experience. [9] mentioned that
            academic certificate fraud costs employers about $ 600 billion
            every year.
            There are five (5) different sources of fake academic certificates.
            These include ‘Degree Mills’ where bogus qualifications are
            generated and sold to clients[10], ‘Fabricated Documents’ that
            represent a fictitious degree or institute, ‘Modified Documents’
            that are alterations in legitimate documents such as changes in
            enrollment / graduation dates, grades, course content, date of
            birth, specialization etc, ‘In-House Produced’ which are fake documents fabricated by the employees of legitimate institutions
            and printed on authentic paper and bearing the seals, stamps and
            signatures of the institution and ‘Translations’ or documents
            inaccurately translated to match requirements in a receiving
            country. [7] also indicated academic certificates issued by
            institutions that are not registered / unaccredited / lack
            government authority to grant such credentials / make
            unsubstantiated claims about recognition and accreditations are
            fake. The implication arising from the above findings is that the
            problem of fake certifications has assumed serious and alarming
            proportions and needs to be urgently tackled. Blockchain
            technology is recently introduced to improve the document
            verification process and combats the document fraud and mise
            use. Blockchain technology simply can be defined as a distributed
            database, that chronologically stores a chain of data packed into
            sealed blocks [11]. However, the scope of this research is to
            determine a framework for implementing security requirements
            in educational certificate verification in the blockchain. The
            framework is intended to avoid the problem of fake certificates
            or fraud in educational certificates.
            </p>

            <h2>BLOCKCHAIN TECHNOLOGY: FEATURES AND
            CHARACTERISTICS</h2>
            <p>
            Blockchain technology is not only a single technique, it is a
            combination of many techniques such as cryptography,
            mathematics, algorithms and distributed consensus algorithms
            [12], [13], [14]. A blockchain is composed of six key elements
            [15] as follows:</p>
            <h2>Decentralized.</h2>
            <p> Blockchain doesn’t have to rely on a single
            centralized node any more like a master node, each node can
            record, store and update the ledger, and together they form the
            blockchain.</p>

            <h2>Transparent.</h2> <p>The block’s data recorded by each node and
            distributed among other connected nodes is visible to each node
            which creates transparency among connected nodes.</p>
            <h2>Anonymous.</h2>
            <p>In order to make the transactions anonymous, data
            is hashed before sharing by using a secure algorithm.</p>
            <h2>Consensus Base.</h2>
            <p>Since node are publicly connected on
            blockchain and changes can only happen when majority of nodes
            accept the change, all nodes are eligible to transfer and update
            data safely providing a consensus base to the system.</p>
            <h2>Immutable.</h2>
            <p> All records are permanently kept which cannot be
            altered unless someone can take control of more than 51% nodes
            simultaneously.</p>

            <h2>Open Source.</h2>
            <p>Most Blockchain systems are open to everyone,
            allowing participants to modify the code and technology in ways
            that best suits their needs. However this does not mean that
            anyone can modify a running blockchain solution. Making any
            modification to a running solution means all connected nodes are
            publicly accepting the change.</p>
            <h2>Blockchain Structure</h2>
            <p>Each block in the blockchain contains five elements which are: 1)
            the main data; 2) the hash of the pervious block; 3) the hash of
            the current block; 4) the timestamp and 5) other information
            [15]</p>

            <h2>Main Data.</h2>
            <p>The data depends on the type of transaction; it is
            generally a transfer between nodes A and B however it can be of
            any type like money transfer or record transfer.</p>
            <h2>Hash of the Previous Block.</h2>
            <p>When a transaction is executed, its
            hash is generated and broadcasted to the network. There are
            several hashing algorithms in use but the most dominant is the
            Merkle Tree. This algorithm allows easy hash and easy de-hash
            options which is why Merkle Trees is a common choice.</p>
            <h2>Hash of the Current Block.</h2>
            <p>The final hash value is recorded in
            block header (hash of current block), while the content itself is
            stored in the body of the block. Blocks are generally bound to a
            size hence allowing a limited number of transactions per block.</p>
            <h2>Timestamp.</h2>
            <p>The time the block was generated.</p>

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
              background-color: #fff;
            }

            .body {
              margin-top: 100px;
              margin-bottom: 50px;
            }

            nav {
              background-color: #4b6584;
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
              font-family: Cinzel;
              font-size: 28px;
              color: #4b6584;
              margin-left: 500px;
              width: 500px;
              margin-top: 150px;
              opacity: 1;
            }

            h2 {
              font-family: Cinzel;
              font-size: 24px;
              color: #4b6584;
              margin-left: 520px;
              width: 800px;
              margin-top: 40px;
              margin-bottom: 10px;
              opacity: 1;
            }

            p {
              font-family: Montserrat;
              font-size: 16px;
              color: #4b6584;
              margin-left: 520px;
              width: 800px;
              margin-top: 10px;
              opacity: 1;
            }

            .address {
              font-family: Montserrat;
              background-color: #4b6584;
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

export default Index;
