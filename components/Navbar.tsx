import Link from 'next/link';
import styled from 'styled-components';
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import { EmailOutline } from "@styled-icons/evaicons-outline/EmailOutline";
import { Tiktok } from '@styled-icons/boxicons-logos/Tiktok';

const NavbarContainer = styled.nav`
    width: 100%;
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.img`
    width: auto;
    height: 120px;
    
    &:hover {
        cursor: pointer;
    }
`;

const IconStyle = styled.div`
  width: 30px;
  height: 30px;
  color: #2EFE51;
`;

const SocialMediaContainer = styled.div`
    &:hover {
        cursor: pointer;
    }
`;

const icons = [
    { href: "https://www.instagram.com/dorksound/", Component: Instagram },
    { href: "https://www.tiktok.com/@dorksound?_t=ZN-8tTr49wOK2A&_r=1", Component: Tiktok },
    { href: "mailto:dorksound@gmail.com", Component: EmailOutline }
];

export const Navbar: React.FC = () => {
    return (
        <NavbarContainer>
            <Logo src="/images/dork-logo.png" alt="Logo" />

            <SocialMediaContainer>
                {icons.map(({ href, Component }, index) => (
                    <Link key={index} href={href} target="_blank" rel="noopener noreferrer">
                        <IconStyle as={Component} />
                    </Link>
                ))}
            </SocialMediaContainer>
        </NavbarContainer>
    );
};
