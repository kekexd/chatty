import React, {Component} from 'react';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Main from './components/Main.jsx';
require('../styles/application.scss');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {loading: true};
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({loading: false})
    }, 500)
  }

  render() {
    return (
      this.state.loading? <h2>Loading...</h2> :      
      <div>
        <Nav />
        <Main />
        <Footer />
      </div> 
    );
  }
}
export default App;
