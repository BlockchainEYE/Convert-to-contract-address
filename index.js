var Web3 = require('web3');

const DAIaddress = Web3.utils.toChecksumAddress('0x8f3cf7ad23cd3cadbd9735aff958023239c6a063');
const Nulladdress = Web3.utils.toChecksumAddress('0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');
const WBTCaddress = Web3.utils.toChecksumAddress('0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6');
const USDCaddress = Web3.utils.toChecksumAddress('0x2791bca1f2de4661ed88a30c99a7a9449aa84174');
const router1 = Web3.utils.toChecksumAddress('0xC0788A3aD43d79aa53B09c2EaCc313A787d1d607');
const router2 = Web3.utils.toChecksumAddress('0xd99d1c33f9fc3444f8101754abc46c52416550d1');
console.log("DAI address :", DAIaddress);
console.log("Null address :", Nulladdress);
console.log("WBTC address :", WBTCaddress);
console.log("USDC address :", USDCaddress);
console.log("router2 :", router2);

new Date('2012.08.10').getTime() / 1000;