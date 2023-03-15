
import { NavLink } from "react-router-dom";


import commands from '../../js/config/commands'

import CommandListItem from '../components/CommandListItem';

export default function CommandList() {

    const commandList = Object.values(commands);

    return (
        <>
            <h3>
                Available Commands
            </h3>
            <div className="container">
                <div className="row">
                    {commandList.map((command) => (
                        <div className="col-12 col-lg-6 p-2">
                            <NavLink to={`/command/${command.path}`} className="navLinkNoDecoration">
                                <CommandListItem command={command} />
                            </NavLink>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
}