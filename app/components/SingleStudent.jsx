import React, { Component } from 'react';
import { connect } from 'react-redux'
import {changeCurrentStudent} from '../store/store'
import { Link } from 'react-router-dom'
import { writeStudentName, modifyStudent, changeNewCampus, writeStudentEmail } from '../store/store'

function SingleStudent(props){

  const student = props.students
  const campuses = props.campuses;
  const {handleNameChange, handleCampusChange, handleEmailChange, handleSubmit} = props;
  const curCampus = campuses.filter(campus => {
                    return campus.id === student.campusId
                  })[0]


    return (
            <div>
              <div className="col-xs-8">
                <h4> {student.name} </h4>
                <h1> {student.email} </h1>
                <Link to={`/campus/${student.campusId}`}>
                  {curCampus.name}
                </Link>
              </div>
              <div className="col-xs-4">
                <h4> Edit Student </h4>
                <form onSubmit={handleSubmit}>

                  <div className="form-group">
                    <input
                      value={student.name}
                      onChange={handleNameChange}
                      className="form-control"
                      type="text"
                      name="curStudentName"
                      placeholder={student.name}
                    />
                    <input
                      value={student.email}
                      onChange={handleEmailChange}
                      className="form-control"
                      type="text"
                      name="curStudentEmail"
                      placeholder={student.email}
                    />
                  </div>
                  <select
                    className="form-control"
                    name="curCampusId"
                    onChange={handleCampusChange}>
                    {
                      campuses.map(campus => {
                      return (
                        <option key={campus.id} value={campus.id}> {campus.name} </option>
                        )
                    })}



                  </select>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary"> Update Student
                    </button>
                  </div>
                 </form>
              </div>
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
    },
    handleNameChange (evt){
      // this.state.dirtyName = true
      dispatch(writeStudentName(evt.target.value))
    },
    handleCampusChange (evt){
      dispatch(changeNewCampus(evt.target.value))
    },
    handleEmailChange(evt) {
      dispatch(writeStudentEmail(evt.target.value))
    },
    handleSubmit(evt){
      evt.preventDefault();
      const name = evt.target.curStudentName.value
      const campusId = evt.curCampusId.value
      const email = evt.target.curStudentEmail.value
      dispatch(modifyStudent({name, email, campusId}))

    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudentLoader)
