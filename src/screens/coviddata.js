import React from 'react';
import axios from 'axios';
import { Card, CardGroup } from 'react-bootstrap';



class CovidData extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            countries : [],
            all : [],
        }
    }

    componentDidMount(){
        axios.get('https://corona.lmao.ninja/v3/covid-19/countries') 
        .then(res => res.data )
        .then(data => {
            this.setState({
                countries : data,
            })
            console.log(data)
            
        })
        axios.get('https://corona.lmao.ninja/v3/covid-19/all') 
        .then(res => res.data )
        .then(data => {
            this.setState({
                all : data,

            })
            console.log('all',data)
            
        })
        
    }

    // totalCount() {
    //     return this.state.all.map((item, index) => (
    //         <div key={index}>
    //             <div>
    //                 {item.cases}
    //             </div>

    //         </div>
    //     ))
    // }


    allCovidData(){
        return this.state.countries.map((item, index) => (
            <div key={index}> 
                

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
                                <Card.Text style={{color:'blue'}}>
                                    Cases :  {item.cases}
                                </Card.Text>
                                <Card.Text>
                                    Today Cases : {item.todayCases}
                                </Card.Text>
                                <Card.Text style={{color:'red'}}>
                                    Deaths : {item.deaths}
                                </Card.Text>
                                <Card.Text>
                                    Today Deaths : {item.todayDeaths}   
                                </Card.Text>
                                <Card.Text style={{color:'green'}}>
                                    Recovered : {item.recovered}    
                                </Card.Text>
                                <Card.Text>
                                    Active : {item.active} 
                                </Card.Text>
                                <Card.Text>
                                Critical : {item.critical}
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
        ))
    }

    render(){
        const india = this.state.countries;
        return(
            <div style={{display: 'flex',justifyContent:'center',flexDirection:'row', flexWrap: "wrap"}}>
            
        

           
                 <div style={{ display: 'flex', flexDirection:'row',borderRadius:'5px', padding:'30px', border:'1px solid black', margin:'2px'}} >
                    
                        <Card.Body>
                        <Card.Img variant="top" style={{width: 250, height: 200}} src={'./assets/world.jpeg'} alt='flag' />

                                <Card.Title style={{ flexWrap: "wrap", width: 200, marginTop:'10px'}} > <b> World Total Count  </b> </Card.Title>
                                    <Card.Text style={{color:'blue'}}>
                                       <b> Cases :   {Object.values(this.state.all)[1]} </b> 
                                    </Card.Text>
                                    <Card.Text>
                                       <b> Today Cases : {Object.values(this.state.all)[2]} </b>
                                    </Card.Text>
                                    <Card.Text style={{color:'red'}}> 
                                        <b> Deaths : {Object.values(this.state.all)[3]}  </b>
                                    </Card.Text>
                                    <Card.Text >
                                       <b>  Today Deaths : {Object.values(this.state.all)[4]}  </b> 
                                    </Card.Text>
                                    <Card.Text style={{color:'green'}}>
                                       <b> Recovered : {Object.values(this.state.all)[5]}    </b> 
                                    </Card.Text>
                                    <Card.Text>
                                       <b> Active : {Object.values(this.state.all)[6]} </b> 
                                    </Card.Text>
                                    <Card.Text>
                                       <b> Critical : {Object.values(this.state.all)[7]} </b> 
                                    </Card.Text>
                            </Card.Body>
                    
             
           
                    
                </div>
                <div style={{ display: 'flex', flexDirection:'row',borderRadius:'5px', padding:'30px', border:'1px solid black', margin:'2px'}} >
                    {india.filter(india => india.country === "India").map(filteredCountry => (
                        <Card.Body>
                                <Card.Img variant="top" style={{width: 250, height: 200}} src={'https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/in.png'} alt='flag' />
                                <Card.Title style={{ flexWrap: "wrap", width: 200, marginTop:'10px'}} > <b> {filteredCountry.country} </b> </Card.Title>
                                    <Card.Text style={{color:'blue'}}>
                                       <b> Cases :  {filteredCountry.cases} </b> 
                                    </Card.Text>
                                    <Card.Text>
                                       <b> Today Cases : {filteredCountry.todayCases} </b>
                                    </Card.Text>
                                    <Card.Text style={{color:'red'}}>
                                       <b> Deaths : {filteredCountry.deaths} </b> 
                                    </Card.Text>
                                    <Card.Text>
                                       <b>  Today Deaths : {filteredCountry.todayDeaths}  </b>
                                    </Card.Text>
                                    <Card.Text style={{color:'green'}}>
                                       <b> Recovered : {filteredCountry.recovered}    </b> 
                                    </Card.Text>
                                    <Card.Text>
                                      <b>  Active : {filteredCountry.active}  </b> 
                                    </Card.Text>
                                    <Card.Text>
                                       <b> Critical : {filteredCountry.critical} </b> 
                                    </Card.Text>
                            </Card.Body>
                    
                    ))}
                </div>
            
                <div style={{display: 'flex',justifyContent:'center',flexDirection:'row', flexWrap: "wrap"}}>
                    {this.allCovidData()}
                </div>
            </div>
        )
    }
}


export default CovidData;

