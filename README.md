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

Balancer's Solidity contracts also work on the NEAR EVM. Visit https://near.org for details on the technology. The following steps will walk through how to set up a local NEAR node and run Balancer's Truffle tests.

### Setup

#### Get Rust

    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

[Rustup reference site](https://rustup.rs/)

#### Set up NEAR node

Clone the [nearcore repository](https://github.com/near/nearcore) with:

    git clone git@github.com:near/nearcore.git
    
Navigate to the project root:

    cd nearcore
    
Build (this will take a while):

    cargo build -p neard --release --features protocol_feature_evm,nightly_protocol_features
    
Initialize:

    ./target/release/neard --home=$HOME/.near/local init    

Run:

    ./target/release/neard --home=$HOME/.near/local run
    
**Note**: hit Ctrl + C to stop the local node. If you want to pick up where you left off, just use this final "run" command again. If you'd like to start from scratch, remove the folder:

    rm -rf ~/.near/local
    
and then use the "initialize" and "run" commands.

### Test

    yarn test:near
    # or
    npm run test:near
    
Expect the result:

>87 passing

<p align=center>⊙</p>
