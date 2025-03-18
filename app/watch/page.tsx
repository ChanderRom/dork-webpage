'use client';

import styled from 'styled-components';

const Wrapper = styled.div`
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
        width: 100%;
        max-width: 560px;
        height: 315px;
        border-radius: 12px;
        margin-bottom: 2rem;
    }
`;

export default function Watch() {
    return (
        <Wrapper>
            <h1>MIRA.</h1>
            <iframe src="https://www.youtube.com/embed/Xilc6It3wiw?si=M7LtkXAiMJCjeXtw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

            <iframe src="https://www.youtube.com/embed/elXA9nLR2IM?si=Td9tir4cQZvvitIz" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

            <iframe src="https://www.youtube.com/embed/4RVnYkoHBG0?si=IAxHsVhk4MflDIiT" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Wrapper>
    );
}
