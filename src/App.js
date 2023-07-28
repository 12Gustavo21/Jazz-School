import React, { useEffect, useState, lazy, Suspense } from 'react';

//Styles
import { GlobalStyle } from './assets/global/style';
import * as S from './assets/style/style';

//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

//Apollo
import { useQuery } from '@apollo/client';

//Query
import GET_HOME_DATA from './assets/query/index';

//Components
const Button = lazy(() => import('./components/Button'));
const Loading = lazy(() => import('./components/Loading'));
const Error = lazy(() => import('./components/Error'));
const Cards = lazy(() => import('./components/Cards'));

export default function App() {
  const [scroll, setScroll] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const currentPosition = window.scrollY;

    setScrollPosition(currentPosition);

    if (currentPosition > 0) {
      if (scrollPosition > currentPosition) {
        setScroll('up');
      } else {
        setScroll('down');
      }
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    AOS.init({});
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const { loading, error, data } = useQuery(GET_HOME_DATA, {
    fetchPolicy: 'cache-first',
  });

  if (loading) return <Loading />;
  if (error) return <Error />;

  console.log(data);

  const { home } = data;

  function toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <GlobalStyle />
      <S.Header>
        <S.HeaderContainer
          showMenu={scroll === 'up'}
          hiddenMenu={scroll === 'down'}>
          <S.Logo
            onClick={toTop}
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <h1>{home.logo}</h1>
            <p>{home.typeOfSchool}</p>
          </S.Logo>
          <S.NavigationBox>
            <S.Navigation>
              <ul
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                {home.navigations.map((item, index) => (
                  <li
                    key={index}
                    title={item.name}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </S.Navigation>
          </S.NavigationBox>
          <S.HeaderButtonBox
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <Suspense fallback={<p>Loading.....</p>} >
              <Button
                text="Se inscreva"
                width="12rem"
              />
            </Suspense>
          </S.HeaderButtonBox>
        </S.HeaderContainer>
      </S.Header>
      <S.Main>
        <S.MainContainer
          showMenu={scroll === 'up'}
          hiddenMenu={scroll === 'down'}
        >
          <S.MainAnnouncement>
            <aside>
              <S.TitleBox
                data-aos="fade-right"
                data-aos-duration="2100"
              >
                <h2 dangerouslySetInnerHTML={{ __html: home.title.text.replace(/\\n/g, '') }}></h2>
              </S.TitleBox>
              <S.Description
                data-aos="fade-right"
                data-aos-duration="2200"
              >
                <p>{home.description}</p>
              </S.Description>
              <S.AnnouncementButtonBox
                data-aos="fade-right"
                data-aos-duration="2300"
                data-aos-anchor-placement="top-bottom"
              >
                <Suspense fallback={<p>Loading.....</p>} >
                  <Button
                    text="Comece agora"
                    width="14rem"
                  />
                </Suspense>
              </S.AnnouncementButtonBox>
            </aside>
            <S.MainFigure
              data-aos="fade-left"
              data-aos-duration="2500"
            >
              <img src={home.orchestra.url} alt="Orquestra" />
            </S.MainFigure>
          </S.MainAnnouncement>
          <Suspense fallback={<p>Loading.....</p>} >
            <Cards />
          </Suspense>
          <S.CursersBox>
            <S.CursersAnouncement>
              <h2
                data-aos="fade-up"
                data-aos-duration="2000"
              >E <span>vários</span> outros!</h2>
              <Suspense fallback={<p>Loading.....</p>} >
                <Button
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-anchor-placement="top-bottom"
                  text="Conhecer cursos"
                  width="14rem"
                />
              </Suspense>
            </S.CursersAnouncement>
          </S.CursersBox>
        </S.MainContainer>
      </S.Main>
      <S.Footer>
        <S.FooterContainer>
          <S.FooterAbout>
            <S.FooterAboutLogo
              onClick={toTop}
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <h2>{home.logo}</h2>
              <p>{home.typeOfSchool}</p>
            </S.FooterAboutLogo>
            <S.FooterAboutDescription
              data-aos="fade-right"
              data-aos-duration="2100"
              data-aos-anchor-placement="top-bottom"
            >
              <p>{home.description}</p>
            </S.FooterAboutDescription>
          </S.FooterAbout>
          <S.FooterNavigation>
            <S.FooterNavigationList>
              <ul
                data-aos="fade-right"
                data-aos-duration="2200"
              >
                {home.navigations.map((item, index) => (
                  <li
                    key={index}
                    title={item.name}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </S.FooterNavigationList>
          </S.FooterNavigation>
          <S.FooterContact
            data-aos="fade-left"
            data-aos-duration="2300"
          >
            <label htmlFor="email">Receba materiais gratuitos no seu email</label>
            <S.FooterContactForm>
              <input type="email" id="email" />
              <Suspense fallback={<p>Loading.....</p>} >
                <Button
                  text="Quero receber"
                  width="14rem"
                />
              </Suspense>
            </S.FooterContactForm>
          </S.FooterContact>
        </S.FooterContainer>
      </S.Footer>
    </>
  );
}