class Data {
  constructor(text) {
    this.text = text;
    this.timestamp = Date.now();
  }
  getDetails() {
    const { text, timestamp } = this;
    return {
      text,
      timestamp,
    };
  }
  parseData(data) {
    this.text = data.text;
    this.timestamp = data.timestamp;
  }
}

module.exports = Data;