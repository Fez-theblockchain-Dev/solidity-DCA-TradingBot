

require('ethers');
require('dotenv').configure();


const budget = 1000 * 10^6;
const USDC_ADDRESS = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';
const WETH_ADDRESS = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';
const ROUTER_ADDRESS = '8f59a61cc9fe4fd59b9b936fd7dac1c9';
const DCA_ADDRESS = '??';


const init = async () => {
// 1. connect to blockchain using ethers & infura

const Provider = new ethers.InfuraProvider (
    "mainnet",
    process.env.INFURA_API_KEY,

);



// 3. get current price of ether and set the slippage
const amountsOut = await router.getAmountsOut(budget,[USDC_ADDRESS, WETH_ADDRESS]);

console.log(amountsOut[0].toString());
console.log(amountsOut[1].toString());

const ethMin = amountsOut[1] * BigInt(95) / BigInt (100);

const block = await provider.getBlock('latest');
const timestamp = block.timestamp + 60 * 10;

const dca = new ethers.Contract (
    ROUTER_ADDRESS,
    ["function invest (uint ethMin, uint deadline) external"],
    Provider // we need a signer
);

const signer = await dca.invest(ethMin,deadline);
const signerReceipt = await signer.wait();

// 4. create object to interact with dca bot

}
init();



// below arguments multiply secs in a day by 1000 to find milliseconds /day. Then multiply by 30 day month
setInterval(init, 86400 * 1000 * 30); 

