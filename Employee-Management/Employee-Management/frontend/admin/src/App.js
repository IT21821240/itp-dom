import './App.css';
import Login from './Components/Employee/Login'
import SignUp from "./Components/Employee/SignUp";
import AdminHome from "./Components/Employee/AdminHome";
import AllSalesExecutive  from "./Components/Employee/AllSalesExecutives";
import AddSalesExecutive from "./Components/Employee/AddSalesExecutives";
import AddDeliveryDriver from "./Components/Employee/AddDeliveryDriver";
import UpdateSalesExecutive from "./Components/Employee/UpdateSalesExecutive";
import AllDeliveryDriver from "./Components/Employee/AllDeliveryDrivers";
import UpdateDeliveryDriver from "./Components/Employee/UpdateDeliveryDriver";
import SalesExecutiveReport from "./Components/Employee/SalesExecutiveReport";
import DeliveryDriverReport from "./Components/Employee/DeliveryDriverReport";
import SalesExecutiveHome from "./Components/SalesExecutive/SalesExecutiveHome";
import DeliveryDriverHome from "./Components/DeliveryDriver/DeliveryDriverHome";
import ViewProfileDD from "./Components/DeliveryDriver/DeliveryDriverViewProfile";
import ViewProfileSE from "./Components/SalesExecutive/SalesExecutiveViewProfile";
import ApplyForLeaveSE from "./Components/SalesExecutive/ApplyForLeaveSE";
import ApplyForLeaveDD from "./Components/DeliveryDriver/ApplyForLeaveDD";
import ViewLeaveSE from "./Components/SalesExecutive/SalesExecutiveViewLeave";
import ViewLeaveDD from "./Components/DeliveryDriver/DeliveryDriverViewLeave";
import AllLeave from "./Components/Employee/AllLeaves";

import ListSupplier from './Components/Supplier/ListSupplier'
import AddSupplier from './Components/Supplier/AddSupplier'
import Editstud from './Components/Supplier/Editstud'
import ViewSupplier from './Components/Supplier/ViewSupplier'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
    <Router>
        <Routes>
        <Route exact path="/" element={<SignUp />} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/adhome" element={<AdminHome />} />
        <Route exact path="/addse" element={<AddSalesExecutive />} />
        <Route exact path="/adddd" element={<AddDeliveryDriver />} />
        <Route exact path="/allse" element={<AllSalesExecutive />}/>
        <Route
            exact
            path="/updatese/:id"
            element={<UpdateSalesExecutive />}
          />
          <Route exact path="/alldd" element={<AllDeliveryDriver />} />
          <Route
            exact
            path="/updatedd/:id"
            element={<UpdateDeliveryDriver />}
          />
        <Route exact path="/reportse" element={<SalesExecutiveReport />}/>
        <Route exact path="/reportdd" element={<DeliveryDriverReport />} />
        <Route exact path="/sehome" element={<SalesExecutiveHome />} />
        <Route exact path="/ddhome" element={<DeliveryDriverHome />} />
        <Route exact path="/viewse" element={<ViewProfileSE />} />
        <Route exact path="/viewdd" element={<ViewProfileDD />} />
        <Route exact path="/applyse" element={<ApplyForLeaveSE />} />
        <Route exact path="/applydd" element={<ApplyForLeaveDD />} />
        <Route exact path="/allleave" element={<AllLeave />} />
        <Route exact path="/leavese" element={<ViewLeaveSE />} />
        <Route exact path="/leavedd" element={<ViewLeaveDD />} />

        <Route path="/list" element={<ListSupplier/>}/>

                <Route path="/add" element={<AddSupplier/>}/>

                <Route path="/edit/:id" element={<Editstud/>}/>

                <Route path="/view/:id" element={<ViewSupplier/>}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
