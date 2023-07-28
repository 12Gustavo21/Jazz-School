import React, { useEffect } from 'react';

//Styles
import * as S from './style';

//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

//Apollo
import { useQuery } from '@apollo/client';

//Query
import GET_HOME_DATA from '../../assets/query/index';

export default function Index() {

    useEffect(() => {
        AOS.init({});
    });

    const { loading, error, data } = useQuery(GET_HOME_DATA, {
        fetchPolicy: 'cache-first',
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const { home } = data;

    return (
        <>
            <S.CardsBox>
                <S.Cards>
                    {home.cards.map((item, index) => (
                        <S.Card key={index}
                            data-aos="fade-up"
                            data-aos-duration="2000"
                        >
                            <S.CardHeader>
                                <img
                                    src={item.instrument.url}
                                    alt={item.name}
                                    draggable="false"
                                    loading="lazy"
                                />
                            </S.CardHeader>
                            <S.CardBody>
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                            </S.CardBody>
                            <S.CardFooter>
                                <img
                                    src={item.arrow.url}
                                    alt="Arrow for right"
                                    draggable="false"
                                    loading="lazy"
                                />
                            </S.CardFooter>
                        </S.Card>
                    ))}
                </S.Cards>
            </S.CardsBox>
        </>
    )
}
