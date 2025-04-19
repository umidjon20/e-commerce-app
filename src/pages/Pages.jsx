
import {Route, Router,Switch } from "react-router-dom"

import { Header } from '../components/Header/Header'
import { Search } from "../components/Search/Search"
export const Pages = () => {
  return (
    <>
    <Router>
        <Header />
         <Switch>
         <Route  path='/home' element={<Search/>} />
         </Switch> 
    </Router>
    </>
  )
}
