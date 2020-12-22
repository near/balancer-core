const path = require('path');
const { NearProvider } = require('near-web3-provider');

module.exports = {
    networks: {
        near_mainnet: {
            network_id: "*",
            skipDryRun: true,
            provider: () => new NearProvider({
                networkId: 'mainnet',
                masterAccountId: process.env.NEAR_MASTER_ACCOUNT,
            }),
        },
        near_testnet: {
            network_id: "*",
            skipDryRun: true,
            provider: () => new NearProvider({
                networkId: 'testnet',
                masterAccountId: process.env.NEAR_MASTER_ACCOUNT,
            }),
        },
        near_betanet: {
            network_id: "*",
            skipDryRun: true,
            provider: () => new NearProvider({
                networkId: 'betanet',
                masterAccountId: process.env.NEAR_MASTER_ACCOUNT,
            }),
        },
        near_local: {
            network_id: "*",
            skipDryRun: true,
            provider: () => {
                if (process.env.NEAR_PYTEST) {
                    // Test in nightly using nearcore pytest library
                    return new NearProvider({
                        networkId: 'local',
                        masterAccountId: 'test0',
                        keyPath: path.join(process.env.HOME, '.near/test0/validator_key.json'),
                        nodeUrl: 'http://127.0.0.1:3040'
                    })
                } else {
                    return new NearProvider({
                        networkId: 'local',
                        masterAccountId: 'test.near',
                        keyPath: path.join(process.env.HOME, '.near/local/validator_key.json')
                    })
                }
            }
        },
        development: {
            host: 'localhost', // Localhost (default: none)
            port: 8545, // Standard Ethereum port (default: none)
            network_id: '*', // Any network (default: none)
            gas: 10000000,
        },
        coverage: {
            host: 'localhost',
            network_id: '*',
            port: 8555,
            gas: 0xfffffffffff,
            gasPrice: 0x01,
        },
    },
    // Configure your compilers
    compilers: {
        solc: {
            version: '0.5.12',
            settings: { // See the solidity docs for advice about optimization and evmVersion
                optimizer: {
                    enabled: true,
                    runs: 100,
                },
                evmVersion: 'byzantium',
            },
        },
    },
};
