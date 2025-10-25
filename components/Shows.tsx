'use client';

import styled from 'styled-components';

const Wrapper = styled.div`
    max-widht: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 4rem;

    .crossed {
        text-decoration: line-through;
    }

    p, span {
        font-size: 1rem;
        font-weight: bold;
        text-align: center;
        margin-bottom: .5rem;
    }

    p {
        color: white;
    }

    span {
        color: #2EFE51;
        cursor: pointer;
    }
`;

export const Shows: React.FC = () => {
    return (
        <Wrapper>
            <h1 className='section-title bg-blue'>VEN.</h1>
            <p className='crossed'>20 SEP / CGT AURORA, Rubí</p>
            <p className='crossed'>21 SEP / PARRILLA ROCK, Logroño</p>
            <p className='crossed'>25 SEP / BAR STEREO, Logroño</p>
            <p className='crossed'>03 OCT / ESTRAPERLO, Badalona</p>
            <p className='crossed'>11 OCT / BAR ITALIA, Vilanova</p>
            <p>30 OCT / WURLITZER, Madrid /
                <span>
                    <a href='https://entradium.com/events/driade-dork-artista-invitado' target='blank'> TICKETS</a>
                </span>
            </p>
        </Wrapper>
    );
}