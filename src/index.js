import React from "react";
// import faker from "faker";
import ReactDOM from "react-dom";
// import ApprovalCard from "./approvalCard";
// import ComentDetails from "./comentDetails";
import SeasonDetails from "./seasonDetails";
import Spinner from "./spinner";
// import "semantic-ui-css/semantic.min.css";


//class components
class App extends React.Component {
  state = { lat: null, errorMessage: null };

  componentDidMount() {
    window.navigator.geolocation.
      getCurrentPosition(
        (position) => this.setState({ lat: position.coords.latitude }),
        (err) => this.setState({ errorMessage: err.message })

      )
  }



  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error : {this.state.errorMessage}</div>
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDetails lat={this.state.lat} />
    }

    return <Spinner />
  }
}





ReactDOM.render(
  <App />, document.querySelector('#root')
);
