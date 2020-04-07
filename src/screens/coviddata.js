import React from 'react';
import axios from 'axios';


class CovidData extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            countries : [],
            info : []
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

    // allFlags() {
    //     this.state.
    // }

    allCovidData(){
        return this.state.countries.map((item, index) => (
            <div key={index}>
                 <div>
                        <img src={Object.values(item.countryInfo)[5]} alt='flag'>
                    </img>
                <h1>
                    {item.country}
                </h1>
                <h1>
                   cases :  {item.cases}
                </h1>
               <h2>
                todayCases : {item.todayCases}
                </h2>
                {/* <h4>
                   flag : 
                   {Object.keys(item.countryInfo).map((keyName, i) => (
                        <div key={i}>
                        
                            <img alt='flag' src={item.countryInfo[keyName]} >
                            
                            </img>
                        </div>
                ))}
                </h4> */}

                {/* countryInfo:
                        _id: 840
                        iso2: "US"
                        iso3: "USA"
                        lat: 38
                        long: -97
                        flag: " */}

                   

                   </div>
                        

            </div>
        ))
    }



    

    render(){
        console.log('flag info', this.state.info)
        return(
            <div>
                {this.allCovidData()}
            </div>
        )
    }
}


export default CovidData;

