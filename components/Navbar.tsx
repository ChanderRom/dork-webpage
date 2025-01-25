import styled from 'styled-components';

const NavbarContainer = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
    width: auto;
    height: 140px;
`;

const NavButton = styled.button`
    background-color: transparent;
    border: none;
    color: white;
    font-size: 18px;

    &:hover {
        cursor: pointer;
    }
`;

export const Navbar: React.FC = () => {
    return (
        <NavbarContainer>
            <Logo src="/images/dork-logo.png" alt="Logo" />
            <NavButton>Listen.</NavButton>
            <NavButton>Show.</NavButton>
            <NavButton>Conotact.</NavButton>
        </NavbarContainer>
    );
};
