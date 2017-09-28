import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import {removeStudent} from '../store/Students'

function Students (props) {
  const {students, removeStudent, campuses} = props;
  console.log(campuses);

  return (
    <div>
    <Link to= '/studentForm'>
        <button className="btn btn-primary"> Add Student
        </button>
    </Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th> # </th>
            <th> Name </th>
            <th> Email </th>
            <th> Campus </th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => {
            return (
              <tr key={student.id}>
                <td> {student.id} </td>
                <Link to={`/student/${student.id}`}>
                  <td> {student.name} </td>
                </Link>
                <td> {student.email} </td>
                <Link to={`/campus/${student.campusId}`}>
                 <td>
                  {
                    campuses.filter(campus => {
                      return campus.id === student.campusId
                    })[0].name

                  }
                 </td>
                </Link>
                <td>
                  <button className="btn btn-warning" onClick={() => removeStudent(student.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>

      </table>
    </div>
  )


}

const mapStateToProps = function(state) {
  return {
    students: state.students,
    campuses: state.campuses
  };
};

const mapDispatchToProps = {removeStudent}




export default connect(mapStateToProps, mapDispatchToProps)(Students)
