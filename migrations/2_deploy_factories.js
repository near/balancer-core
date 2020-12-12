const TMath = artifacts.require('TMath');
const BToken = artifacts.require('BToken');
const BFactory = artifacts.require('BFactory');

module.exports = async function (deployer, network, accounts) {
    if (network === 'development' || network === 'coverage' || network === 'near_local') {
        deployer.deploy(TMath);
    }
    deployer.deploy(BFactory);
};
