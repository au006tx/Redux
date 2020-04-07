import React from 'react';
import axios from 'axios';
import { Card, CardGroup } from 'react-bootstrap';



class CovidData extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            countries : [],
        }
    }

    componentDidMount(){
        axios.get('https://corona.lmao.ninja/countries') 
        .then(res => res.data )
        .then(data => {
            this.setState({
                countries : data,
                info : data.countryInfo
            })
            console.log(data)
            
        })
    }

    allCovidData(){
        return this.state.countries.map((item, index) => (
            <div key={index}> 
                {/* <div>
                    <h1>
                        {item.country}
                    </h1>
                    <img src={Object.values(item.countryInfo)[5]} alt='flag' />
                    <h6>
                        Cases :  {item.cases}
                    </h6>
                    <h6>
                        Today Cases : {item.todayCases}
                    </h6>
                    <h6>
                        Deaths : {item.deaths}
                    </h6>
                    <h6>
                        Today Deaths : {item.todayDeaths}   
                    </h6>
                    <h6>
                        Recovered : {item.recovered}    
                    </h6>
                    <h6>
                        Active : {item.active} 
                    </h6>
                    <h6>
                        Critical : {item.critical}
                    </h6>                
                </div> */}

                {/* {Object.keys(item.countryInfo).map((keyName, i) => (
                        <div key={i}>
                        
                            <img alt='flag' src={item.countryInfo[keyName]} >
                            
                            </img>
                        </div>
                ))}
                 */}

                <CardGroup style={{paddingTop:20, paddingLeft:10, paddingRight:10, alignContent: 'center'}}>
                    <Card border="dark" style={{paddingLeft:20, paddingRight:20, paddingTop:20, width: '18rem' }}>
                        <Card.Img variant="top" style={{width: 200, height: 200}} src={Object.values(item.countryInfo)[5]} alt='flag' />
                        <Card.Body>
                            <Card.Title style={{ flexWrap: "wrap", width: 200}} > <b> {item.country} </b> </Card.Title>
                                <Card.Text>
                                <h6 style={{color:'blue'}}>
                                    Cases :  {item.cases}
                                </h6>
                                <h6>
                                    Today Cases : {item.todayCases}
                                </h6>
                                <h6 style={{color:'red'}}>
                                    Deaths : {item.deaths}
                                </h6>
                                <h6>
                                    Today Deaths : {item.todayDeaths}   
                                </h6>
                                <h6 style={{color:'green'}}>
                                    Recovered : {item.recovered}    
                                </h6>
                                <h6>
                                    Active : {item.active} 
                                </h6>
                                <h6>
                                    Critical : {item.critical}
                                </h6>   
                                    
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
        ))
    }

    render(){
        return(
            <div style={{display: 'flex',justifyContent:'center',flexDirection:'row', flexWrap: "wrap"}}>   

                {this.allCovidData()}
            </div>
        )
    }
}


export default CovidData;

