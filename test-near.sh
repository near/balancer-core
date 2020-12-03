#!/bin/bash
echo "Attempting to remove old local accounts from ~/.near-credentials/balancer-tests"
rm -f ~/.near-credentials/balancer-tests/*
echo "Creating test accounts…"
node create-near-test-accounts.js
echo "Running truffle tests…"
./node_modules/.bin/truffle test --network near_local
