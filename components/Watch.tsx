'use client';

import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    iframe {
        width: 100%;
        max-width: 560px;
        height: 315px;
        border-radius: 12px;
        margin-bottom: 2rem;
    }
`;

export const Watch: React.FC = () => {
    return (
        <Wrapper>
            <h1 className='section-title bg-red'>MIRA.</h1>
            <iframe width="951" height="535" src="https://www.youtube.com/embed/Eeae4FrSRAY" title="Dork - El Ruedas Y El Piernas (Official Video)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

            <iframe width="951" height="535" src="https://www.youtube.com/embed/1qlUnwIeA_A?list=RD1qlUnwIeA_A" title="Dork - La Nala (Official Video)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

            <iframe src="https://www.youtube.com/embed/Xilc6It3wiw?si=M7LtkXAiMJCjeXtw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

            <iframe src="https://www.youtube.com/embed/elXA9nLR2IM?si=Td9tir4cQZvvitIz" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

            <iframe src="https://www.youtube.com/embed/4RVnYkoHBG0?si=IAxHsVhk4MflDIiT" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Wrapper>
    );
}
