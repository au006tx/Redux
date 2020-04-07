import React from 'react';

import './App.css';

import { Provider } from 'react-redux';
import reducers from './reducers';
import { createStore } from 'redux';


// import StudentList from './screens/studentlist';
// import UserList from './screens/users';
import CovidData from './screens/coviddata';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <Provider store={createStore(reducers)}>
        <div>
          <CovidData />
        </div>
      </Provider>
    )
  }
}

export default App;
