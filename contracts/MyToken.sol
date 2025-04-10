// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.22;

import {ERC20} from "./ERC20.sol";
import {ERC20Burnable} from "./extensions/ERC20Burnable.sol";
import {Ownable} from "./Ownable.sol";

contract MyToken is ERC20, ERC20Burnable, Ownable {

    constructor(address recipient, address initialOwner)
        ERC20("MyToken", "MTK")
        Ownable(initialOwner)
    {
        _mint(recipient, 10000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
