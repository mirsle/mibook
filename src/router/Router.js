import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from '../components/Header'
import Index from '../pages/Index'
import Detail from '../pages/Detail'
import MyBook from '../pages/MyBook'
import './index.css'

export default class Router extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Switch>
          <Redirect from="/" to="/book_list" exact></Redirect>
          <Route path="/book_list" component={Index}></Route>
          <Route path="/detail/:currentIndex/:id" component={Detail}></Route>
          <Route path="/my_book" component={MyBook}></Route>
        </Switch>
      </div>
    )
  }
}
