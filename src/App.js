import logo from "./logo.svg";
import "./App.css";
import Payadmin from "./component/systemadmin";
import Homepage from "./component/homepage";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useHistory,
  Routes,
} from "react-router-dom";
import Createcompanyform from "./component/createcompanyform";
import Companyadmin from "./component/Company/company";
import CompanyHomepage from "./component/Company/companyhomepage";
import Createuser from "./component/Company/createuser";
import Userlist from "./component/Company/userlist";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}

        <Routes>
          {/* <Routes> */}
          <Route exact path="/systemadmin" element={<Payadmin />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/createcompanyform" element={<Createcompanyform />} />
          <Route path="/companyadmin" element={<Companyadmin />} />
          <Route path="/companyHomepage" element={<CompanyHomepage />} />
          <Route path="/createuser" element={<Createuser/>}/>
          <Route path= "/userlist" element = {<Userlist/>}/>


          {/* </Routes> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
