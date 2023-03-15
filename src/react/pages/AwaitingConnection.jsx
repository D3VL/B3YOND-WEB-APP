import { NavLink } from "react-router-dom";



export default function AwaitingConnection() {
    return (
        <>
            <h3>
                Connecting To Client
            </h3>

            <div>
                <div class="spinner-grow text-dark mt-3" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <br />
                <small>Please Wait</small>
            </div>
            <div>
                <img src="https://i.imgur.com/1ZQ3Z0M.png" />
            </div>
        </>
    );
}