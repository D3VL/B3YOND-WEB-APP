import Global from '../../js/config/global';

export default function ConnectionStatus() {
    return (
        <>
            <span class={`connection-status ${Global.connectionStatus}`}>{Global.connectionStatus}</span>
        </>
    );
}