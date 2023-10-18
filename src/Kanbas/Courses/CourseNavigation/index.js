import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";

function CourseNavigation() {
  // Updated links to reflect the links from the image
  const links = ["Home", "Assignments", "Zoom Meetings", "Staff Details", "Grades", "Quizzes", "Modules", "People", "Pages", "Files", "Discussions", "Collaborations", "New Analytics", "Leganto Course Materials", "Progress Reports (EAB Navigate)"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div className="wd-course-navigation list-group">
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}

export default CourseNavigation;
