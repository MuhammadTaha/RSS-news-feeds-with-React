"use strict";

let Parser = require("rss-parser");
let parser = new Parser();

module.exports = {
  allfeeds: [],
  async getFeedsSourceBBC() {
    let feed = await parser.parseURL(
      "https://news.google.com/rss/search?q=bbc&hl=en-US&gl=US&ceid=US:en"
    );
    // console.log(allfeeds.length);
    feed.items.forEach(item => {
      this.allfeeds.push(item);
      // console.log(item.title + ":" + item.link);
    });
  },

  async getFeedsSourceDW() {
    let feed = await parser.parseURL(
      "https://news.google.com/rss/search?q=dw&hl=en-US&gl=US&ceid=US:en"
    );
    // console.log(this.allfeeds.length);

    feed.items.forEach(item => {
      if (this.allfeeds) {
        this.allfeeds.push(item);
      }
    });
  }
};
