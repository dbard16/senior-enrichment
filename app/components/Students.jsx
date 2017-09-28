import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import {removeStudent} from '../store/Students'

function Students (props) {
  const {students} = props;

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
                <td> {student.name} </td>
                <td> {student.email} </td>
                <td> {student.campusId} </td>
                <td>
                  <button className="btn btn-warning" onClick={removeStudent}>
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
    students: state.students
  };
};



export default connect(mapStateToProps)(Students)
