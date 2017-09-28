import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import store, {fetchCampuses, fetchStudents} from '../store/store';
import Home from './Home';
import Students from './Students';
import StudentList from './StudentList'
import CampusForm from './CampusForm'
import StudentForm from './StudentForm'

import Nav from './Nav';

export default class Main extends Component {

  componentDidMount(){
    const campusesThunk = fetchCampuses();
    const studentsThunk = fetchStudents();
    store.dispatch(campusesThunk);
    store.dispatch(studentsThunk);
  }

  render(){
    return(
      <div>

        <Nav />
        <main>
          <Switch>
            <Route path="/students" component={Students} />
            <Route path="/campus/:id" component={StudentList}/>
            <Route path="/campus/" component={CampusForm}/>
            <Route path="/studentForm" component={StudentForm}/>
            <Route path="/" component={Home} />
            <Redirect to="/"/>
          </Switch>
        </main>

     </div>
    )
  }



}
