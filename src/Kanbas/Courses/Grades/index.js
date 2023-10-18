import db from "../../Database";
import { useParams } from "react-router-dom";
import './grades.css';

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);

  return (
    <div className="grades-container">
      <h1>Grades</h1>
      
      <div className="header-container">
        <div className="header-options">
          <button className="btn-import btn-kanbas"><i className="fa fa-upload"></i>Import</button>
          <button className="btn-export btn-kanbas"><i className="fa fa-download"></i>Export</button>
          <button className="btn-options btn-kanbas">⚙️</button>
        </div>
        <div className="search-container">
          <div className="search-box">
            <h2>Student Names</h2>
            <input type="text" placeholder="Search Students" className="search-input" />
          </div>
          <div className="search-box" >
            <h2>Assignment Names</h2>
            <input type="text" placeholder="Search Assignments" className="search-input" />
          </div>
        </div>
        <button className="btn-filter btn-kanbas"><i className="fa fa-filter"></i>Apply Filters</button>
      </div>

      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Student Name</th>
              {assignments.map((assignment) => (<th>{assignment.title}</th>))}
            </tr>
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                  <td>{user.firstName} {user.lastName}</td>
                  {assignments.map((assignment) => {
                    const grade = db.grades.find(
                      (grade) => grade.student === enrollment.user && grade.assignment === assignment._id
                    );
                    return (<td>{grade?.grade || ""}</td>);
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Grades;
