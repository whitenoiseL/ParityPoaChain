const Web3 = require('web3');
const Wallet = require('ethereumjs-wallet');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const util = require('ethereumjs-util');
// let pk = '0x580086C00EFB0746CAEA8668B02EADF5529D7A2C4F5A2FA85485500E8139FBA9';
// let pub = '0xb527180d346e45031f35f709d5bfc52693ed068f453f7174a78d04ec67aa1a7839959d9f53af38da9db8d9724b7afb16fa364161b144eb4265b1c04a23defa83';
// const wallet = Wallet.fromPrivateKey(util.toBuffer(pk));
//
// console.log(util.bufferToHex(wallet.getPublicKeyString()));

(async function(){
    // for (let i = 1;i < 10;i++)
        console.log((await web3.eth.isSyncing()));
})().catch(console.error);