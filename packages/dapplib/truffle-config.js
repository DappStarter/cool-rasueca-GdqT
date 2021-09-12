require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi swallow foot champion rifle stereo property gentle light army genre'; 
let testAccounts = [
"0x1cc65cfd137f459735007a13994af601c139f070cd5ef6928f17394b3dd67880",
"0x4610e613b6e1fbff5ebf15472beb63b0a5a14df520955aa0f94245f35e06a452",
"0x462d3487866682b1c4c732efc19766c134662c0a86b74a920058ff8fa6db4152",
"0x5d6eaca3576298f890f5dada48559f5cc9ac32b337a7ae6e8f4b97c9028887ac",
"0xb0462dfd85257b8bc76b54d4f26c44340013a7ae104c5e8f167bbe206ffd1c64",
"0xb66d8b1d48a546ca0468f9576071435c329e2827c7d9e6ea576f1cb16b1b43de",
"0x8c9d4b8ecc986a278c35aace86437e1410dd8baa79b31f71f3f75b6889f13e30",
"0x6525bf290b4183b34f74dc911a7eabd0d51c3bd262027b14960127e22a6ba0e3",
"0xf34aa881f77d83ff907f0ea04702ebef658bc9e929b8cf9ec68df31b86aa4fb9",
"0xdc736f442aba79dec4a14979cf50f6122a66bad68c87dd25b0a6cbbe4408e68d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

