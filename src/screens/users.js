import React from 'react';
import axios from 'axios';


class UserList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            users : []
        }
        // this.allUsers = this.allUsers.bind(this);
    }

    componentDidMount(){
        axios.get('https://corona.lmao.ninja/countries') 
        .then(res => res.data )
        .then(data => {
            this.setState({
                users : data
            })
            console.log(data)
            
        })
    }

//     componentDidMount() {
//         fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
// 		"x-rapidapi-key": "7c1656b1f9msh5aaf7881d194ff1p13086ajsn466cdf60f86e"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.log(err);
// });
//     }
 

    allUsers(){
        return this.state.users.map((item, index) => (
            <div key={index}>
                <h1>
                    {item.country}
                </h1>
            </div>
        ))
    }

    

    render(){
        return(
            <div>
                {this.allUsers()}
            </div>
        )
    }
}


export default UserList;

