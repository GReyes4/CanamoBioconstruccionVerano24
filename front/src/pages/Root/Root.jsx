import { Outlet } from "react-router-dom";

function Root() {
    return (
        <div className="root-main-container">
            <Outlet />
        </div>
    );
}

export default Root;
