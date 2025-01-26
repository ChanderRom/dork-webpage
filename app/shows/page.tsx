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
            <h1>SHOWS.</h1>
            <p className='crossed'>03 JAN / Actual Fest, Logroño / <span>TICKETS</span></p>
            <p className='crossed'>16 JAN / Aurora Music, Rubí / <span>TICKETS</span></p>
            <p>16 Feb / Aurora Music, Rubí / <span>TICKETS</span></p>
            <p>03 Apr / Café Las Palmas, Madrid / <span>TICKETS</span></p>
            <p>03 JAN / Actual Fest, Logroño / <span>TICKETS</span></p>
        </Wrapper>
    );
}
