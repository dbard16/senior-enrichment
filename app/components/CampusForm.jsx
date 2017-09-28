import React, { Component } from 'react';
import { connect } from 'react-redux'
import { writeCampusName, writeCampusImage, postCampus } from '../store/store'

function CampusForm(props){

  const { newCampusName, newCampusImage, handleSubmit, handleNameChange, handleImageChange, dirtyName, dirtyImage} = props;

  let warningName = '';
  if(!newCampusName && dirtyName) warningName= 'Ridkuloso! Enter a name!';
  return (
    <div className="col-xs-4">
     <form onSubmit={handleSubmit}>
     {warningName && <div className="alert alert-warning"> {warningName} </div>}
      <div className="form-group">
        <input
          value={newCampusName}
          onChange={handleNameChange}
          className="form-control"
          type="text"
          name="newCampusName"
          placeholder="Campus Name"
        />
        <input
          value={newCampusImage}
          onChange={handleImageChange}
          className="form-control"
          type="text"
          name="newCampusImage"
          placeholder="Campus Image URL"
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary"> Save New Campus
        </button>
      </div>
     </form>
    </div>
  )
}

const mapStateToProps = function(state){
  return {
    newCampusName: state.newCampusName,
    newCampusImage: state.newCampusImage,
    dirtyName: false,
    dirtyImage: false
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    handleNameChange (evt){
      // this.state.dirtyName = true
      dispatch(writeCampusName(evt.target.value))
    },
    handleImageChange (evt){
      // this.state.dirtyImage = true
      dispatch(writeCampusImage(evt.target.value))
    },
    handleSubmit(evt){
      evt.preventDefault();
      const name = evt.target.newCampusName.value;
      const image = evt.target.newCampusImage.value
      // this.state.dirtyName = false;
      // this.state.dirtyImage = false;
      dispatch(postCampus({name, image}, ownProps.history));
      dispatch(writeCampusName(''));
      dispatch(writeCampusImage(''));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampusForm)
