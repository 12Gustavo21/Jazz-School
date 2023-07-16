import React, { useEffect, useState } from 'react';

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
import Reveal from './components/Reveal/index';
import RevealLeft from './components/RevealLeft/index';
import RevealRight from './components/RevealRight/index';
import Cursor from './components/Cursor/index';

export default function App() {
  const [scroll, setScroll] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [size, setSize] = useState(false)

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
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const { loading, error, data } = useQuery(GET_HOME_DATA);

  if (loading) return <Loading />;
  if (error) return <Error />;

  console.log(data);

  const { home } = data;

  function toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const shouldRenderCursor = window.innerWidth > 1024;

  const handleIncrease = () => {
    setSize(true)
  }
  const handleDecrease = () => {
    setSize(false)
  }

  return (
    <>
      <GlobalStyle />
      <Reveal />
      <RevealLeft />
      <RevealRight />
      {shouldRenderCursor && <Cursor size={size} />}
      <S.Header>
        <S.HeaderContainer
          showMenu={scroll === 'up'}
          hiddenMenu={scroll === 'down'}
        >
          <S.Logo onClick={toTop} onMouseEnter={handleIncrease}
            onMouseLeave={handleDecrease}>
            <h1>{home.logo}</h1>
            <p>{home.typeOfSchool}</p>
          </S.Logo>
          <S.NavigationBox>
            <S.Navigation>
              <ul>
                {home.navigations.map((item, index) => (
                  <li key={index} title={item.name} onMouseEnter={handleIncrease}
                    onMouseLeave={handleDecrease}>{item.name}</li>
                ))}
              </ul>
            </S.Navigation>
          </S.NavigationBox>
          <S.HeaderButtonBox>
            <Button text="Se inscreva" width="12rem" onMouseEnter={handleIncrease}
              onMouseLeave={handleDecrease} />
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
              <S.TitleBox>
                <h2 dangerouslySetInnerHTML={{ __html: home.title.text.replace(/\\n/g, '') }}></h2>
              </S.TitleBox>
              <S.Description>
                <p>{home.description}</p>
              </S.Description>
              <S.AnnouncementButtonBox>
                <Button text="Comece agora" width='14rem' onMouseEnter={handleIncrease}
                  onMouseLeave={handleDecrease} />
              </S.AnnouncementButtonBox>
            </aside>
            <S.MainFigure>
              <img src={home.orchestra.url} alt="Orquestra" />
            </S.MainFigure>
          </S.MainAnnouncement>
          <S.CardsBox>
            <S.Cards>
              {home.cards.map((item, index) => (
                <S.Card key={index} className="reveal">
                  <S.CardHeader>
                    <img src={item.instrument.url} alt={item.instrument.alt} draggable='false' loading='lazy' />
                  </S.CardHeader>
                  <S.CardBody>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </S.CardBody>
                  <S.CardFooter>
                    <img src={item.arrow.url} alt={item.arrow.alt} draggable='false' loading='lazy' onMouseEnter={handleIncrease}
                      onMouseLeave={handleDecrease} />
                  </S.CardFooter>
                </S.Card>
              ))}
            </S.Cards>
          </S.CardsBox>
          <S.CursersBox>
            <S.CursersAnouncement>
              <h2 className="reveal">E <span>vários</span> outros!</h2>
              <Button text="Conhecer cursos" width='14rem' className="reveal" onMouseEnter={handleIncrease}
                onMouseLeave={handleDecrease} />
            </S.CursersAnouncement>
          </S.CursersBox>
        </S.MainContainer>
      </S.Main>
      <S.Footer>
        <S.FooterContainer>
          <S.FooterAbout className='reveal-left'>
            <S.FooterAboutLogo onClick={toTop} onMouseEnter={handleIncrease}
              onMouseLeave={handleDecrease}>
              <h1>{home.logo}</h1>
              <p>{home.typeOfSchool}</p>
            </S.FooterAboutLogo>
            <S.FooterAboutDescription>
              <p>{home.description}</p>
            </S.FooterAboutDescription>
          </S.FooterAbout>
          <S.FooterNavigation>
            <S.FooterNavigationList className='reveal-left'>
              <ul>
                {home.navigations.map((item, index) => (
                  <li key={index} title={item.name} onMouseEnter={handleIncrease}
                    onMouseLeave={handleDecrease}>{item.name}</li>
                ))}
              </ul>
            </S.FooterNavigationList>
          </S.FooterNavigation>
          <S.FooterContact className='reveal-right'>
            <h3>Receba materiais gratuitos no seu email</h3>
            <S.FooterContactForm>
              <input type="email" />
              <Button text="Quero receber" width='14rem' onMouseEnter={handleIncrease}
                onMouseLeave={handleDecrease} />
            </S.FooterContactForm>
          </S.FooterContact>
        </S.FooterContainer>
      </S.Footer>
    </>
  );
}