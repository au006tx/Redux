import React from 'react';

import './App.css';

import { Provider } from 'react-redux';
import reducers from './reducers';
import { createStore } from 'redux';


// import StudentList from './screens/studentlist';
// import UserList from './screens/users';
import CovidData from './screens/coviddata';
import { Navbar, Carousel } from 'react-bootstrap';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <Provider store={createStore(reducers)}>
        
        <Navbar style={{backgroundColor:"#515151"}} variant="dark">
                <Navbar.Brand href='/'> 
                  <h3> Covid-19  </h3>
                  <span> live data - by Salman Ahmed </span> 
                </Navbar.Brand>
            </Navbar>
            <Carousel>
              <Carousel.Item>
              <img
                className="d-block w-100"
                src="./assets/slide1.jpeg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 style={{color:'black'}}>Live Updates</h3>
                <p>#stayhome #workfromhome</p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./assets/wash.jpg"
              alt="second slide"
            /> 
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./assets/slide_3.png"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <div style={{flexDirection:'row', justifyContent:'center', display:'flex', marginTop:'10px'}}>
          <h5 style={{color:'#515151'}}>
            Stay home Stay Safe
          </h5>
        </div>
        <div style={{flexDirection:'row', justifyContent:'center', display:'flex'}}>
          <CovidData />
        </div>
        <div class="d-flex flex-column" style={{backgroundColor:'#515151', marginTop:'10px'}}>
          <footer class="footer">
            <div style={{color:'white', justifyContent:'center', flexDirection:'row', display:'flex'}}>
              <span>&copy; 2020 Design by Salman Ahmed</span>
            </div>
            
          </footer>
        </div>
      </Provider>
    )
  }
}

export default App;
