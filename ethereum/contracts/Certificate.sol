pragma solidity ^0.4.17;
contract BlockCert {

    struct Credential {
        string org;
        string name;
        string course;
        string hash;
    }

    mapping(bytes32 => Credential) public credentials;

    function generateCertificate(string memory _org, string memory _name, string memory _course, string memory _hash ) public returns(bytes32){

        bytes32 hash = keccak256(_hash);
        credentials[hash] = Credential( _org, _name, _course, _hash );
    }

    function getValue(string _hash) public view returns(string, string, string, string){

        bytes32 hash = keccak256(_hash);
        Credential memory temp = credentials[hash];

        return (temp.org, temp.name, temp.course, temp.hash);
    }
}

