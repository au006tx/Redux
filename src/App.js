import React from 'react';

import './App.css';

import { Provider } from 'react-redux';
import reducers from './reducers';
import { createStore } from 'redux';


// import StudentList from './screens/studentlist';
import UserList from './screens/users';

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
          <UserList />
        </div>
      </Provider>
    )
  }
}

export default App;
