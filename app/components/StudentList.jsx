import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {changeCurrentCampus, removeCampus} from '../store/store'


function StudentList (props){

  const {campusId, students, campus} = props;

  return (
   <div>
    <div className="col-xs-8">
      <h3> {campus.name} </h3>
      <button className="btn btn-warning" onClick={() => removeCampus(campus.id)}>
        Delete
      </button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th> # </th>
            <th> Name </th>
            <th> Email </th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => {
            return (
                <tr key={student.id}>
                      <td> {index + 1} </td>
                    <Link to={`/student/${student.id}`}>
                      <td> {student.name} </td>
                    </Link>
                      <td> {student.email} </td>
                </tr>

            )
          })}
        </tbody>
      </table>
    </div>
    <div className="col-xs-4">

    </div>

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
