const {ApiPromise, WsProvider} = require('@polkadot/api');

const wsProvider = new WsProvider('wss://rpc.polkadot.io');

async function main () {
    const api = await ApiPromise.create({provider: wsProvider});
    const lastHeader = await api.rpc.chain.getHeader();
    console.log(`${lastHeader.number}`);
};

main().catch(console.error).finally(() => process.exit());
