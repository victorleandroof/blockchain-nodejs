const crypto = require('crypto');

const Data = require('./Data');

class Block {
  constructor(index, previousBlockHash, previousProof, datas) {
    this.index = index;
    this.proof = previousProof;
    this.previousBlockHash = previousBlockHash;
    this.datas = datas;
    this.timestamp = Date.now();
  }

  hashValue() {
    const { index, proof, transactions, timestamp } = this;
    const blockString= `${index}-${proof}-${JSON.stringify(transactions)}-${timestamp}`;
    const hashFunction = crypto.createHash('sha256');
    hashFunction.update(blockString);
    return hashFunction.digest('hex');
  }

  setProof(proof) {
    this.proof = proof;
  }

  getProof() {
    return this.proof;
  }

  getIndex() {
    return this.index;
  }

  getPreviousBlockHash() {
    return this.previousBlockHash;
  }

  getDetails() {
    const { index, proof, previousBlockHash, datas, timestamp } = this;
    return {
      index,
      proof,
      timestamp,
      previousBlockHash,
      datas: datas.map(data => data.getDetails()),
    };
  }

  parseBlock(block) {
    this.index = block.index;
    this.proof = block.proof;
    this.previousBlockHash = block.previousBlockHash;
    this.timestamp = block.timestamp;
    this.data = block.datas.map(data => {
      const parsedData = new Data();
      parsedData.parseData(transaction);
      return parsedTransaction;
    });
  }

  printTransactions() {
    this.transactions.forEach(transaction => console.log(transaction));
  }
}

module.exports = Block;