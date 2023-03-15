import Logo from './Logo'
import ConnectionStatus from './ConnectionStatus';

export default function Header() {
    return (
        <>
            <ConnectionStatus />
            <Logo />
        </>
    );
}