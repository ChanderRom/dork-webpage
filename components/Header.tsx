'use client';

import styled from 'styled-components';

const Wrapper = styled.main`
    img {
        max-width: 100%;
    }
`;

export const Header: React.FC = () => {
    return (
        <Wrapper>
            <img src="images/doner.png" alt="banner-photo-of-dork" />
        </Wrapper>
    )
}