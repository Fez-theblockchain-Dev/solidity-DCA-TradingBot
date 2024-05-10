// SPDX-License-Identifier: MIT
pragma solidity 0.8.25;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/IERC20.sol";
import "https://github.com/Uniswap/v2-periphery/blob/master/contracts/UniswapV2Router02.sol";
contract Dca {
    IERC20 public usdc = IERC20(0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48)
    // allows you to buy/sell tokens on Uniswap w/ router02 address
    IUniswapV2Router02 public router = IUniswapV2Router02("0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D");
    address public owner;
    uint public lastInvestment;
    uint public budget

constructor() {
    owner = msg.sender;

}

    function fund(uint amount) external {
    //transfer stablecoin to smart contract
        usdc.transferFrom(msg.sender, address(this), amount);
    }

    function invest() external {
        require (block.timestamp > lastInvestment + 30days, "too soon");
    
    address[] memory path = new address [] (2);
    path[0] = address(usdc)
    path[1] = router.WETH();


        usdc.approve(address(router), budget);
        // above code line allows you to buy ether w/ USDC
        router.swapExactTokensForETH(
        uint amountIn,
        uint amountOutMin,
        address[] calldata path, 
        address to, 
        uint deadline)
    }
    
    lastInvestment = block.timestamp;

    function withdraw (uint, amount) external {

        msg.sender.call{value: amount} ("");
    }

}