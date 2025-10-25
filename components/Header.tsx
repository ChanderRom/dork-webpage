'use client';

import styled from 'styled-components';

const Wrapper = styled.main`
    img {
        max-width: 100%;
    }
    
    div {
        padding: 1rem 2.5rem;

        p {
            font-size: 1rem;
            margin-bottom: .5rem;
            text-align: center;
            color: white;
        }
    }
    
`;

export const Header: React.FC = () => {
    return (
        <Wrapper>
            <img src="images/doner.png" alt="banner-photo-of-dork" />

            <div>
                <p>Banda de rock alternativo con influencias grunge, asentada en Barcelona, Aaron (cantante, guitarra), Miguel (bajo), Francesc (batería), Chander (guitarra).</p>

                <p>Con un EP <em>(La Casa Patas Arriba)</em> y un LP <em>(DABUTEN)</em> a las espaldas, cuentan con un enérgico directo que te hará viajar a lo más profundo de su subconsciente. Sus canciones son un paseo por recuerdos de la adolescencia, bochornosas vivencias del pasado y una amalgama de personajes pintorescos que, aderezado con mucho humor, sátira y vergüenza ajena, te generarán más preguntas que respuestas.</p>

                <p>Un canto jovial y potente que abraza la locura. Al igual que tener arena en la ropa interior: te hará moverte, te incomodará y apuesto lo que quieras a que eres incapaz de ignorarlo. DORK!</p>
            </div>
        </Wrapper>
    )
}