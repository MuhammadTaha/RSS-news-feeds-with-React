import React, { Component } from "react";
import Feed from "./Feed";
import InfiniteScroll from "react-infinite-scroll-component";

export default class NewsFeeds extends Component {
  constructor() {
    super();
    this.newFeeds = [];

    this.state = {
      feeds: []
    };
  }

  componentDidMount() {
    if (this.state.feeds.length <= 0) {
      console.log("called Here");
      this.getFeeds();
      //   this.displayFeeds();
    }
  }

  getFeeds() {
    var url = "http://localhost:3001/feeds";
    var req = new Request(url);
    fetch(req)
      .then(response => response.json())
      .then(json => {
        console.log("json", json);
        this.setState({
          feeds: json
        });
        this.displayFeeds();
      });
  }

  displayFeeds() {
    console.log("displayfeeds called");
    if (this.state.feeds.length <= 0) {
      this.getFeeds();
    } else {
      this.newFeeds = [];
      for (let i = 0; i < 10; i++) {
        this.newFeeds.push(this.state.feeds.pop());
      }

      console.log(this.state.feeds.length);
      console.log(this.newFeeds.length);
    }

    // return newFeeds;
  }

  render() {
    console.log("inside render", this.newFeeds.length);
    return (
      <div>
        <InfiniteScroll
          dataLength={10}
          next={this.displayFeeds()}
          hasMore={true}
          loader={<h1>Loading...</h1>}
        >
          {this.newFeeds.map(feed => (
            <Feed {...feed} />
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}
