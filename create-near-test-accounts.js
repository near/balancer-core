const path = require('path');
const { readKeyFile } = require('near-web3-provider/node_modules/near-api-js/lib/key_stores/unencrypted_file_system_keystore')

async function setupNEARAccounts() {
  const networkId = 'balancer-tests';
  const { nearAPI, utils } = require('near-web3-provider');
  // Since the key file doesn't match the typical keystore pattern of networkId/accountId.json, load it into memory
  const inMemoryKeyStore = new nearAPI.keyStores.InMemoryKeyStore();
  const masterAccountKeyFile = await readKeyFile(path.join(process.env.HOME, '.near/local/validator_key.json'));
  await inMemoryKeyStore.setKey(networkId, masterAccountKeyFile[0], masterAccountKeyFile[1]);
  // Use MergeKeyStore such that new accounts are created as files so they can be used by Truffle tests
  const keyStore = new nearAPI.keyStores.MergeKeyStore([new nearAPI.keyStores.UnencryptedFileSystemKeyStore(path.join(process.env.HOME, '.near-credentials')), inMemoryKeyStore])

  const config = {
    nodeUrl: 'http://127.0.0.1:3030',
    keyStore,
    networkId,
    masterAccountId: 'test.near',
    evmAccountId: 'evm',
  };
  const near = await nearAPI.connect(config);
  const acct = await near.account(near.config.masterAccountId);
  await utils.createTestAccounts(acct, 5);
}

setupNEARAccounts()
  .catch(e => {
    console.log('Issue setting up accounts: ' + e.message);
  });
