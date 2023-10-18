import { Link, useLocation } from "react-router-dom";
import { BiUserCircle, BiMessageSquareDetail, BiHistory, BiHelpCircle, BiVideoRecording } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import "./index.css";
import logo from '././NU_logo.png'

function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Help"];

  const linkToIconMap = {
    Account: <BiUserCircle className="wd-icon" />,
    Dashboard: <RiDashboard3Fill className="wd-icon" />,
    Courses: <FaBook className="wd-icon" />,
    Calendar: <BsFillCalendar2WeekFill className="wd-icon" />,
    Inbox: <BiMessageSquareDetail className="wd-icon" />,
    History: <BiHistory className="wd-icon" />,
    Studio: <BiVideoRecording className="wd-icon" />,
    Help: <BiHelpCircle className="wd-icon" />
  };

  const { pathname } = useLocation();
  return (
    <div className="list-group wd-kanbas-navigation">
      <img src={logo} alt="Logo" className="logo-image" />
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {linkToIconMap[link]}
          <br/>
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;