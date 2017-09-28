import React, { Component } from 'react';
import { connect } from 'react-redux'
import { writeStudentName, postStudent, changeNewCampus, writeStudentEmail } from '../store/store'

function CampusForm(props){

  const { newStudentName, campuses, newStudentEmail, handleSubmit, handleNameChange, handleCampusChange, handleEmailChange} = props;


  return (
    <div className="col-xs-4">
     <form onSubmit={handleSubmit}>

      <div className="form-group">
        <input
          value={newStudentName}
          onChange={handleNameChange}
          className="form-control"
          type="text"
          name="newStudentName"
          placeholder="Student Name"
        />
        <input
          value={newStudentEmail}
          onChange={handleEmailChange}
          className="form-control"
          type="text"
          name="newStudentEmail"
          placeholder="Student Email"
        />
      </div>
      <select
        className="form-control"
        name="campusId"
        onChange={handleCampusChange}>
        {
          campuses.map(campus => {
          return (
            <option key={campus.id} value={campus.id}> {campus.name} </option>
            )
        })}



      </select>
      <div className="form-group">
        <button type="submit" className="btn btn-primary"> Save New Student
        </button>
      </div>
     </form>
    </div>
  )
}

const mapStateToProps = function(state){
  return {
    newCampusName: state.newStudentName,
    newStudentEmail: state.newStudentEmail,
    campuses: state.campuses

  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
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
      const name = evt.target.newStudentName.value;
      const campusId = evt.target.campusId.value;
      const email = evt.target.newStudentEmail.value


      // const campus = evt.target.
      // this.state.dirtyName = false;
      // this.state.dirtyImage = false;
      dispatch(postStudent({name, email, campusId}, ownProps.history));
      dispatch(writeStudentName(''));

    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampusForm)
