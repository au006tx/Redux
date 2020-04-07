import React from 'react';
import axios from 'axios';


class UserList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            users : []
        }
        this.allUsers = this.allUsers.bind(this);
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/albums') 
        .then(res => res.data )
        .then(data => {
            this.setState({
                users : data
            })
            
        })
    }
 

    allUsers(){
        return this.state.users.map((item, index) => (
            <div key={index}>
                <h1>
                    {item.title}
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

