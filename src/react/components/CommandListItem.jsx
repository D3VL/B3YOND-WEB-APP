export default function CommandListItem({ command }) {
    return (
        <>
            <div className="CommandListItem card rounded text-start">

                <div className="CommandListItem-contents p-3">
                    <h5>{command.title}</h5>
                    <p>{command.description}</p>

                    {command.isSponsored && (
                        <div className="CommandListItem-sponsor">
                            <small className="text-muted">{command.sponsorText}</small>
                        </div>
                    )}
                    {command.isExperimental && (
                        <div className="CommandListItem-experimental">
                            <small title="Experimental">🧪</small>
                        </div>
                    )}
                </div>

                <img src="/img/models/mavic-pro-platinum.png" className="img-fluid CommandListItem-model-image" />
                {command.background && (<img src={command.background} className="img-fluid CommandListItem-bg-image" />)}
            </div>
        </>
    );
}