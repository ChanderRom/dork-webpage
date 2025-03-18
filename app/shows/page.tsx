'use client';

import styled from 'styled-components';
import '/styles/global.css';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 2rem;

    .crossed {
        text-decoration: line-through;
    }

    h1, p, span {
        font-weight: bold;
    }

    h1, p {
        color: white;
    }

    span {
        color: #2EFE51;
        cursor: pointer;
    }

    h1 {
        font-weight: bold;
        letter-spacing: -3.5px;
    }
`;

export default function Shows() {
    return (
        <Wrapper>
            <h1>CONCIERTOS.</h1>
            <p className='crossed'>03 ENE / Actual Fest, Logroño / <span>TICKETS</span></p>
            <p className='crossed'>16 Feb / Aurora Music, Rubí / <span>TICKETS</span></p>
            <p className='crossed'>03 Apr / Café Las Palmas, Madrid / <span>TICKETS</span></p>
            <p className='crossed'>11 MAR / Aurora Music, Rubí / <span>TICKETS</span></p>
            <p>12 ABR / Sala Slow, Barcelona / <span>TICKETS</span></p>
            <p>24 ABR / TBA</p>
            <p>14 JUN / TBA</p>
        </Wrapper>
    );
}