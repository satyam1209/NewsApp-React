import "./App.css";

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  //   this.updateState = this.updateState.bind(this)
  // }
  apiKey = "456e72b3f8cb42afa9f1968fea4efd5a"
  state = {
    progress: 0,
  };
  setProgress=(progress)=> {
    this.setState({ progress: progress });
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar></Navbar>
          <LoadingBar
            progress={this.state.progress}
            height={3}
            color="red"
            // onLoaderFinished={this.setProgress()}
          />
          <Switch>
            <Route exact path="/">
              <News
              setProgress={this.setProgress}
                key="home"
                pageSize={18}
                country={"in"}
                apikey={this.apiKey}
                color={"success"}
              ></News>
            </Route>
            <Route exact path="/sports">
              <News
              setProgress={this.setProgress}
                key="sports"
                pageSize={18}
                country={"in"}
                category={"sports"}
                apikey={this.apiKey}
              ></News>
            </Route>
            {/* <Route  exact path="/general">
            
        <News key="general" pageSize={18} country={"in"} category={"general"} apikey={"79b8e5d62224470fa6f3e5d625cdb96a"}></News>
          </Route> */}
            <Route exact path="/business">
              <News
              setProgress={this.setProgress}
                key="business"
                pageSize={18}
                country={"in"}
                category={"business"}
                apikey={this.apiKey}
              ></News>
            </Route>
            <Route exact path="/entertainment">
              <News
              setProgress={this.setProgress}
                key="entertainment"
                pageSize={18}
                country={"in"}
                category={"entertainment"}
                apikey={this.apiKey}
              ></News>
            </Route>
            <Route exact path="/health">
              <News
              setProgress={this.setProgress}
                key="health"
                pageSize={18}
                country={"in"}
                category={"health"}
                apikey={this.apiKey}
              ></News>
            </Route>
            <Route exact path="/science">
              <News
              setProgress={this.setProgress}
                key="science"
                pageSize={18}
                country={"in"}
                category={"science"}
                apikey={this.apiKey}
                color={"warning"}
              ></News>
            </Route>
            <Route exact path="/technology">
              <News
              setProgress={this.setProgress}
                key="technology"
                pageSize={18}
                country={"in"}
                category={"technology"}
                apikey={this.apiKey}
              ></News>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
