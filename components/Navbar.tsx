import Link from 'next/link';
import styled from 'styled-components';
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import { EmailOutline } from "@styled-icons/evaicons-outline/EmailOutline";
import { Tiktok } from '@styled-icons/boxicons-logos/Tiktok';


const IconStyle = styled.div`
  width: 30px;
  height: 30px;
  color: #2EFE51;
`;

const icons = [
    { href: "https://www.instagram.com/dorksound/", Component: Instagram },
    { href: "https://www.tiktok.com/@dorksound?_t=ZN-8tTr49wOK2A&_r=1", Component: Tiktok },
    { href: "mailto:dorksound@gmail.com", Component: EmailOutline }
];

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
    letter-spacing: -3px;
    color: #2EFE51;
    padding: 0;

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
                <NavButton>ESCUCHA.</NavButton>
            </Link>

            <Link href="/watch">
                <NavButton>MIRA.</NavButton>
            </Link>

            <Link href="/shows">
                <NavButton>CONCIERTOS.</NavButton>
            </Link>

            {icons.map(({ href, Component }, index) => (
                <Link key={index} href={href} target="_blank" rel="noopener noreferrer">
                    <IconStyle as={Component} />
                </Link>
            ))}
        </NavbarContainer>
    );
};
