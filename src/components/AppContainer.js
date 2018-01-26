import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import App from './App';


function mapStateToProps(state){
  return {
    todos:state.todos
  }
}

function mapDispachToProps(dispatch){
  return bindActionCreators(actionCreators,dispatch);
}

const AppContainer = connect(mapStateToProps, mapDispachToProps)(App);

export default AppContainer;
