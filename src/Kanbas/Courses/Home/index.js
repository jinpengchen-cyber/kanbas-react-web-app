import ModuleList from "../Modules/ModuleList";
import StatusList from "../Status/StatusList";


function Home() {
  return (
    <div className="row">
        <div className="col-8">
            <h2>Home</h2>
            <ModuleList />
        </div>
        <div className="col-4">
            <h2>Status</h2>
            <StatusList/>
        </div>
    </div>
  );
}
export default Home;