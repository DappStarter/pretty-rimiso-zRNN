require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty fringe trophy name rice pizza pudding inflict kangaroo army gauge'; 
let testAccounts = [
"0x3555e4ca108cc2475f52d265f9e6f3bc9517451fe2f5129f874cca96e8af686d",
"0x051a1e026f55e5aafef1f7a756c3e5e8c62dae55cf8dbc312fef70cd04ed540c",
"0xe16b7903fb468c41f6398b561864cb34a46b6bde8cf13d83547995969835f087",
"0x249eb3a3003fbcca8d861c8b2c9e430c9ef212dc25520d44c1b6ed0ac312f058",
"0x7df1bb6dc2e0c1587f589f99f3b1c4a87dbeaf0daf5b24ab3820c645edb6fcbd",
"0xdfe331a550843bdce47a8b6dc5b02a42dc0588751ad5cc8adb10e6f94136c221",
"0xb54c528896e9a2f01f420525e56389cc6e8251b6594639f695c748158ee72e0a",
"0x5ab8a3774364652bc6eaa8378f5800324a086f6b67113709db948e5e464f78ca",
"0xe15f5b49b988863d0517c0f422259f7b141a0084dbf292ca00505e7d8c3d41a9",
"0xb3c9d6c4e68499a4c6e4d8ff4c89c679d3e4aa4fd40f4fc3e74809ca3cf6de79"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


