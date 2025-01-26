import Link from 'next/link';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

const Logo = styled.img`
    width: auto;
    height: 120px;
    
    &:hover {
        cursor: pointer;
    }
`;

const NavButton = styled.button`
    background-color: transparent;
    border: none;
    font-size: 1.6rem;
    font-weight: bold;
    letter-spacing: -3.5px;
    color: #2EFE51;

    &:hover {
        cursor: pointer;
        color: white;
    }
`;

export const Navbar: React.FC = () => {
    return (
        <NavbarContainer>
            <Link href="/">
                <Logo src="/images/dork-logo.png" alt="Logo" />
            </Link>

            <Link href="/listen">
                <NavButton>LISTEN.</NavButton>
            </Link>

            <Link href="/watch">
                <NavButton>WATCH.</NavButton>
            </Link>

            <Link href="/contact">
                <NavButton>CONTACT.</NavButton>
            </Link>

            <Link href="/shows">
                <NavButton>SHOWS.</NavButton>
            </Link>
        </NavbarContainer>
    );
};
