import React, { useEffect } from 'react';

//Styles
import { GlobalStyle } from './assets/global/style';
import * as S from './assets/style/style';

//Apollo
import { useQuery } from '@apollo/client';

//Query
import GET_HOME_DATA from './assets/query/index';

//Components
import Loading from './components/Loading/index';
import Error from './components/Error/index';
import Button from './components/Button/index';

//AOS Library
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {

  useEffect(() => {
    AOS.init({});
  });
  
  const { loading, error, data } = useQuery(GET_HOME_DATA);
  
  if (loading) return <Loading />;
  if (error) return <Error />;
  
  console.log(data);
  
  const { home } = data;

  return (
    <>
      <GlobalStyle />
      <S.Header>
        <S.HeaderContainer>
          <S.Logo data-aos="fade-right" data-aos-duration="1500">
            <h1>{home.logo}</h1>
          </S.Logo>
          <S.NavigationBox>
            <S.Navigation>
              <ul data-aos="fade-left" data-aos-duration="1500">
                {home.navigations.map((item, index) => (
                  <li key={index}>{item.name}</li>
                ))}
              </ul>
            </S.Navigation>
          </S.NavigationBox>
          <S.ButtonBox data-aos="fade-left" data-aos-duration="1500">
            <Button text="Se inscreva" />
          </S.ButtonBox>
        </S.HeaderContainer>
      </S.Header>
      <main>
      </main>
      <footer></footer>
    </>
  )
}
