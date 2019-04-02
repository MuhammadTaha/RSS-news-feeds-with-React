import React, { Component } from "react";

export default class Feeds extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="single-feed col-md-8 offset-md-2">
        <div className="row">
          <div className="col-md-12">
            <div className="post-data">
              <a href={this.props.link} className="post-catagory">
                {this.props.title}
              </a>
              <div className="post-title">
                {/* <a href="#" className="post-title"> */}
                <h6>{this.props.contentSnippet}</h6>
                {/* </a> */}
                <p className="post-date">{this.props.pubDate}</p>
              </div>
            </div>
          </div>
          {/* <div className="col-md-6 offset-md-3">
            <div className="post-thumb" />
          </div> */}
        </div>
      </div>

      //   <div className="single-feed col-md-8 offset-md-2">
      //     <a href={this.props.link}>
      //       <div className="row">
      //         <div className="col-md-6 offset-md-3">
      //           <div className="post-thumb" />
      //         </div>
      //         <div className="col-md-8">
      //           {this.props.contentSnippet}
      //           <div className="post-data">
      //             <a href="#" className="post-catagory">
      //               Finance
      //             </a>
      //             <div className="post-meta">
      //               <a href="#" className="post-title">
      //                 <h6>{this.props.title}</h6>
      //               </a>
      //               <p className="post-date">{this.props.pubDate}</p>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </a>
      //   </div>
    );
  }
}
