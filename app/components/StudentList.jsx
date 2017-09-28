import React, { Component } from 'react';
import { connect } from 'react-redux';

import {changeCurrentCampus} from '../store/store'

function StudentList (props){

  const {campusId, students, campus} = props;

  return (
    <div>
      <h3> {campus.name} </h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th> # </th>
            <th> Name </th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => {
            return (
              <tr key={student.id}>
                <td> {index + 1} </td>
                <td> {student.name} </td>
              </tr>
            )
          })}
        </tbody>
      </table>

    </div>

  )

}

class StudentListLoader extends Component {

  componentDidMount(){
    this.props.changeCurrentCampus(this.props.campus.name)
  }

  render(){
    return(
           <StudentList {...this.props}/>
           )

  }

}

const mapStateToProps = function(state, ownProps){
  console.log(ownProps);
  const campusId = Number(ownProps.match.params.id);
  return {
    campus: state.campuses.find(campus => campus.id === campusId) || {name:''},
    students: state.students.filter(student => student.campusId === campusId),
    campusId}
  }

const mapDispatchToProps = function(dispatch){
  return {
    changeCurrentCampus(campusName){
      dispatch(changeCurrentCampus(campusName));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentListLoader)
