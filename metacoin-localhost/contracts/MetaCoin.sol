// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MetaCoin {
    mapping(address => uint256) private balances;

    event Transfer(address indexed from, address indexed to, uint256 value);

    string public name = "Test Coin Nice";

    constructor() {
        balances[msg.sender] = 10000;
    }

    function sendCoin(address receiver, uint256 amount) public returns (bool) {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        emit Transfer(msg.sender, receiver, amount);
        return true;
    }

    function getBalance(address addr) public view returns (uint256) {
        return balances[addr];
    }
}
