import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


function Campuses (props) {

 const {campuses} = props;


  return (
    <div>
      <div>
      <Link to='/campus'>
        <button className="btn btn-primary"> Add Campus
        </button>
      </Link>

       {/*} {formVisibile ? <CampusForm /> : null} */}
      </div>
      {campuses.map(campus =>{
        return (
              <div key={campus.id} className="col-xs-6">
                <Link to={`/campus/${campus.id}`}>
                  <img src={campus.image}/>
                </Link>
                <h2>{campus.name}</h2>
              </div>
                )
      })}
    </div>
  )

}

const mapStateToProps = function(state) {
  return {
    campuses: state.campuses
  };
};

 export default connect(mapStateToProps)(Campuses);
