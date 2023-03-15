import { NavLink } from "react-router-dom";


export default function Index() {
    return (
        <>
            <h3 className="display-5">The DJI Multitool</h3>
            <NavLink className="btn btn-primary btn-sm w-50 mt-3" to="/awaiting-connection">Connect</NavLink>
        </>
    );
}