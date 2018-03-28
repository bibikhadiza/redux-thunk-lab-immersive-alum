import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import CatList from './CatList';
import { connect } from 'react-redux';
import actions from './actions/catActions';
import { bindActionCreators } from 'redux';


class App extends Component {
  constructor(){
    super()
  }

  componentDidMount() {
    this.props.fetchCats();
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <CatList catPics={this.props.catPics}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {catPics: state.catPics}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchCats: actions.fetchCats}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
