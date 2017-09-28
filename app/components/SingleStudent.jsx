import React, { Component } from 'react';
import { connect } from 'react-redux'
import {changeCurrentStudent} from '../store/store'
import { Link } from 'react-router-dom'

function SingleStudent(props){

  const student = props.students
  const campuses = props.campuses;

  const curCampus = campuses.filter(campus => {
                    return campus.id === student.campusId
                  })[0]


    return (
            <div>
              <h4> {student.name} </h4>
              <h1> {student.email} </h1>
              <Link to={`/campus/${student.campusId}`}>
                {curCampus.name}
              </Link>

            </div>

            )
}

class SingleStudentLoader extends Component{



  render(){
    return(
           <SingleStudent {...this.props}/>
           )
  }
}

const mapStateToProps = function(state, ownProps){


  const studentId = Number(ownProps.match.params.id);
  return{
    campuses: state.campuses,
    students: state.students.find(student => student.id === studentId) || {name:''}
  }
}

const mapDispatchToProps = function(dispatch){
  return{
    changeCurrentstudent(studentName){
      dispatch(changeCurrentStudent(studentName));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudentLoader)
