import home from '../pages/home'
import services from '../pages/services'
import login from '../pages/login'
import signup from '../pages/Signup'
import contact from '../pages/contact'
import doctors from '../pages/Doctors/doctors'
import doctorsdetails from '../pages/Doctors/doctorsdetails'

import { Routes, Route} from 'react-router-dom'

const Routers = () => {
  return <Routes>
    <Route path="/" exact Component={home}/>
    <Route path="/home" exact Component={home}/>
    <Route path="/doctors" exact Component={doctors}/>
    <Route path="/doctors/:id" exact Component={doctorsdetails}/>
    <Route path="/login" exact Component={login}/>
    <Route path="/register" exact Component={signup}/>
    <Route path="/contact" exact Component={contact}/>
    <Route path="/services" exact Component={services}/>



  </Routes>
};

export default Routers