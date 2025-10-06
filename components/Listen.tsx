'use client';

import styled from 'styled-components';

const Wrapper = styled.div`
    min-height: 407px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;

    h1 {
        font-size: 3rem;
        color: white;
        font-weight: bold;
        letter-spacing: -3.5px;
    }

    iframe {
        max-width: 650px;
        height: 600px;
        border-radius: 12px;
    }
`;

export const Listen: React.FC = () => {
    return (
        <Wrapper>
            <h1 className='section-title bg-green'>ESCUCHA.</h1>
            <iframe data-testid="embed-iframe" src="https://open.spotify.com/embed/album/7tycMgZK7sA7u5DnGU46bQ?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
            </iframe>
        </Wrapper>
    );
}
