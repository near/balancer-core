<p align=center>
<img width="128px" src="https://balancer-labs.github.io/pebbles/images/pebbles-pad.256w.png" alt="balancer pebbles logo"/>
</p>

<p align="center">
  <a href="https://circleci.com/gh/balancer-labs/balancer-core">
    <img src="https://circleci.com/gh/balancer-labs/balancer-core.svg?style=svg&circle-token=2f432d0cf2690bec7f215a7738bd1142b97bd9b4" />
  </a>
  <a href="https://coveralls.io/github/balancer-labs/balancer-core">
    <img src="https://coveralls.io/repos/github/balancer-labs/balancer-core/badge.svg?t=7avwwt" />
  </a>
  <a href="https://www.gnu.org/licenses/gpl-3.0">
    <img src="https://img.shields.io/badge/License-GPLv3-green.svg" />
  </a>
</p>

<h1 align=center><code>balancer</code></h1>

**Balancer** is an automated **portfolio manager**, **liquidity provider**, and **price sensor**.

Balancer turns the concept of an index fund on its head: instead of a paying fees
to portfolio managers to rebalance your portfolio, you collect fees from traders, who rebalance
your portfolio by following arbitrage opportunities.

Balancer is based on an N-dimensional invariant surface which is a generalization of the constant product formula described by Vitalik Buterin and proven viable by the popular Uniswap dapp.

## 🍂 Bronze Release 🍂

The *🍂Bronze Release🍂*  is the first of 3 planned releases of the Balancer Protocol. Bronze emphasizes code clarity for audit and verification, and does not go to great lengths to optimize for gas.

The *❄️Silver Release❄️* will bring many gas optimizations and architecture changes that will reduce transaction overhead and enable more flexibility for managed pools.

The *☀️Golden Release☀️* will introduce a curious new liquidity mechanism to the market.

## Documentation

The full documentation can be found at [https://docs.balancer.finance](https://docs.balancer.finance)


## Development

Most users will want to consume the ABI definitions for BFactory and BPool.

This project follows the standard Truffle project structure. 

```
yarn compile   # build artifacts to `build/contracts`
yarn testrpc # run ganache
yarn test    # run the tests
```

Tests can be run verbosely to view approximation diffs:

```
yarn test:verbose
```

```
  Contract: BPool
    With fees
pAi
expected: 10.891089108910892)
actual  : 10.891089106783580001)
relDif  : 1.9532588879656032e-10)
Pool Balance
expected: 98010000000000030000)
actual  : 98010000001320543977)
relDif  : 1.3473294888276702e-11)
Dirt Balance
expected: 3921200210105053000)
actual  : 3921200210099248361)
relDif  : 1.480428360949332e-12)
Rock Balance
expected: 11763600630315160000)
actual  : 11763600630334527239)
relDif  : 1.6464292361378058e-12)
      ✓ exitswap_ExternAmountOut (537ms)
```

Complete API docs are available at [https://docs.balancer.finance/smart-contracts/api](https://docs.balancer.finance/smart-contracts/api)

---

## NEAR Protocol

Balancer's Solidity contracts also work on the NEAR EVM. Visit https://near.org for details on the technology. At the time of this writing the EVM is live on betanet, so the directions will be targeted there.

### Get NEAR betanet account

Visit the betanet NEAR Wallet:
http://wallet.betanet.near.org/

Follow the instructions to create an account.

### Login with NEAR CLI

Next we'll use NEAR CLI to login, which creates a full-access key as a file in your computer's `~/.near-credentials` directory.

See the [NEAR CLI documentation](https://docs.near.org/docs/development/near-cli) for specifics, but it can be installed with:

    npm install -g near-cli

After it's installed, run:

    env NEAR_ENV=betanet near login
    
You'll be redirected to Wallet. Please follow the directions on Wallet and return to your terminal application.

### Build and deploy with Truffle

Truffle's configuration contains the custom provider from [near-web3-provider](https://github.com/near/near-web3-provider). 

Replace `MY_NAME` below with the name of your account, and run:

    env NEAR_MASTER_ACCOUNT=MY_NAME.betanet truffle migrate --network near_betanet    

### Run tests

Running tests is the same as standard Truffle commands. For instance, to run tests on betanet the command is:

    env NEAR_MASTER_ACCOUNT=MY_NAME.betanet truffle test --network near_betanet    
    
Expect the result:

>87 passing

<p align=center>⊙</p>
