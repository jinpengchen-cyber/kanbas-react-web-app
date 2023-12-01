import Signin from './users/signin';
import Account from './users/account';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './nav';
import UserTable from './users/table';
import Signup from './users/signup';

function Project() {
    return (
      <div className="row">
        <h1>Project</h1>
        <div className="col-2">
          <Nav />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/signin" element={<Signin />} />
            <Route path="/account" element={<Account />} />
            <Route path="/users" element={<UserTable />} />
            <Route path="/admin/users" element={<UserTable />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
  </div>
  ); }
  export default Project;