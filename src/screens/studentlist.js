import React from 'react';
import axios from 'axios';
import { getStudents } from '../actions';
import { connect } from 'react-redux';

class StudentList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            students : []
        }
        this.allStudents = this.allStudents.bind(this);
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/students/') 
        .then(res => res.data )
        .then(data => {
            this.props.getStudents(data)
        })
    }

    allStudents(){
        return this.props.students.map((item, index) => (
            <div key={index}>
                <h1>
                    {item.firstName}
                </h1>
            </div>
        ))
    }

    render(){
        return(
            <div>
                {this.allStudents()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        students : state.student.students
    }
}

export default connect(mapStateToProps, { getStudents })(StudentList);

