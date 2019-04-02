import React, { Component } from "react";
import NewsFeeds from "./components/NewsFeed";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <NewsFeeds />
      </div>
    );
  }
}

export default App;
