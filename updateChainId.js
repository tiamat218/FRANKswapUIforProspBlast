const fs = require('fs');
const fetch = require('node-fetch'); // Importing fetch from node-fetch library

const PANCAKE_EXTENDED = 'https://tokens.pancakeswap.finance/pancakeswap-extended.json';
const PANCAKE_TOP100 = 'https://tokens.pancakeswap.finance/pancakeswap-top-100.json';

const updateChainId = async (url, oldChainId, newChainId) => {
  try {
    const response = await fetch(url); // Use the renamed fetch
    const data = await response.json();

    data.tokens = data.tokens.map(token => {
      if (token.chainId === oldChainId) {
        token.chainId = newChainId;
      }
      return token;
    });

    const fileName = url.split('/').pop();
    fs.writeFileSync(`./src/config/constants/${fileName}`, JSON.stringify(data, null, 2)); // Speichern in src/config/constants
    console.log(`Updated ${fileName}`);
  } catch (error) {
    console.error(`Failed to update ${url}:`, error);
  }
};

const main = async () => {
  await updateChainId(PANCAKE_EXTENDED, 56, 81457);  // Beispiel für das Ändern der chainId von 56 (BSC) zu 1 (Ethereum)
  await updateChainId(PANCAKE_TOP100, 56, 81457);    // Beispiel für das Ändern der chainId von 56 (BSC) zu 1 (Ethereum)
};

main();
