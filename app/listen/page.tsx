'use client';

import styled from 'styled-components';

const Wrapper = styled.div`
    min-height: 407px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: 3rem;
        color: white;
        font-weight: bold;
        letter-spacing: -3.5px;
    }

    iframe {
        max-width: 650px;
        border-radius: 12px;
    }
`;

export default function Listen() {
    return (
        <Wrapper>
            <h1>ESCUCHA.</h1>
            <iframe src="https://open.spotify.com/embed/album/3qblZYHvG0NMgi3g8CXMXH?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </Wrapper>
    );
}
