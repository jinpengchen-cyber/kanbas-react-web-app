import './Dashboard.css';
import db from "../Database";
import { Link } from "react-router-dom";

function Dashboard() {
    const courses = db.courses;
    return (
        <div>
            <h1>Dashboard</h1>
            <hr />
            <h2>Published Courses ({courses.length})</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {courses.map((course, index) => (
                    <div className="col" key={course._id}>
                        <div className="card h-100">
                            <img src="/images/mo-_RZurvkRYM8-unsplash.png" className="card-img-top" alt="Course Card" />
                            <div className="card-body">
                                <h5 className="card-title">{course.name}</h5>
                                <p className="card-text">
                                    {course.number}<br />
                                    {course.startDate} - {course.endDate}
                                </p>
                                <Link
                                    to={`/Kanbas/Courses/${course._id}`}
                                    className="btn btn-primary"
                                >
                                    View Course
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;
