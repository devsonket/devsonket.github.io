import React, { Component } from 'react';
import { withRouter } from "react-router"
import ReactGA from 'react-ga';

class AppContainer extends Component {

    componentWillMount() {
      this.unlisten = this.props.history.listen((location, action) => {
        ReactGA.pageview(location.pathname);
      });
    }
    componentWillUnmount() {
        this.unlisten();
    }
    render() {
       return (
           <div>{this.props.children}</div>
        );
    }
  }

  export default withRouter(AppContainer);