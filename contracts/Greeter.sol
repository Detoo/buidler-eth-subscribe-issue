pragma solidity ^0.6.0;

import "@nomiclabs/buidler/console.sol";

contract Greeter {

    event Greet(address indexed from, uint256 value);

    string greeting;

    constructor(string memory _greeting) public {
        console.log("Deploying a Greeter with greeting:", _greeting);
        greeting = _greeting;
    }

    function greet() public returns (string memory) {
        emit Greet(address(this), 123);
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
        greeting = _greeting;
    }

}
