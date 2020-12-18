const TMath = artifacts.require('TMath');
const BToken = artifacts.require('BToken');
const BFactory = artifacts.require('BFactory');

module.exports = async function (deployer, network, accounts) {
    if (network === 'development' || network === 'coverage' || network === 'near_local'
        || network === 'near_betanet' || network === 'near_testnet' || network === 'near_mainnet') {
        deployer.deploy(TMath);
    }
    deployer.deploy(BFactory);
};
