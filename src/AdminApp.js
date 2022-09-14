import React from "react";
import { Route, Routes } from "react-router-dom";


import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";

import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ServicesList from "./pages/servicesList/ServiceList";
import Service from "./pages/Service/Service";
import NewService from "./pages/newService/NewService";
import States from './pages/statesList/StateList'
import NewState from './pages/newState/NewState'
import City from "./pages/cityList/CityList"

export default function AdminApp(){
    return(
        <>
            <Topbar/>
            <Sidebar/>
            <Routes>
                <Route path="/admin/home" element={<Home />}/>
                <Route path="/admin/users" element={<UserList />} />
                <Route path="/admin/user/create" element={<NewUser />}/>
                <Route path="/admin/user/:userId" element={<User />}/>
                <Route path="/admin/services" element={ <ServicesList />}/>
                <Route path="/admin/service/create" element={<NewService />}/>
                <Route path="/admin/service/update/:serviceId" element={<Service />}/>
                <Route path="/admin/state" element={<States />}/>
                <Route path="/admin/states/create" element={<NewState />} />
                <Route path="/admin/city" element={<City />}/>
            </Routes>
        </>
    )
}