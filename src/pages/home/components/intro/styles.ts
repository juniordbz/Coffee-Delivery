import styled from 'styled-components'
import BackgroundIntro from '../../../../assets/BackgroundIntro.png'
import { TitleText } from '../../../../components/typography'

export const IntroContainer = styled.section`
  width: 100%;
  height: 34rem;
  background-image: url(${BackgroundIntro});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 991px) {
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
`
export const IntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  @media screen and (max-width: 991px) {
    flex-direction: column;
    justify-content: center;
    > div > img {
      width: 70%;
      height: 70%;
      min-width: 50%;
      min-height: 50%;
    }
  }
`

export const IntroTite = styled(TitleText)`
  margin-bottom: 1rem;

  @media screen and (max-width: 991px) {
    font-size: ${({ theme }) => theme.textSizes['title-m']};
  }
`

export const HighlightsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1.25rem;
  width: 100%;
  margin-top: 4rem;

  @media screen and (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`
