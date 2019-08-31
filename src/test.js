const Data = require('./models/Data');
const BlockChain = require('./models/Blockchain');

const blockChain = new BlockChain(null);
blockChain.addNode(blockChain);
const initData = new Data('Genesis block');
blockChain.newData(initData);
const data = new Data('victorleandro.com.br');
blockChain.newData(data);

console.info(`Added transaction: ${JSON.stringify(data.getDetails(),null,)}`);
