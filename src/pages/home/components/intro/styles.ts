import styled from 'styled-components'
import BackgroundIntro from '../../../../assets/BackgroundIntro.png'
import { TitleText } from '../../../../components/typography'
import { breakpoints } from '../../../../breakpoints/breakepoints'

export const IntroContainer = styled.section`
  width: 100%;
  height: 34rem;
  background-image: url(${BackgroundIntro});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${breakpoints.md} {
    flex-wrap: wrap;
    background-image: none;
  }
`
export const IntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  @media ${breakpoints.md} {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    padding: 1rem;

    > div > img {
      width: 70%;
      height: 70%;
    }
    > div {
      display: flex;
      justify-content: center;
    }
  }
`

export const IntroTite = styled(TitleText)`
  margin-bottom: 1rem;
`

export const HighlightsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1.25rem;
  width: 100%;
  margin-top: 4rem;

  @media ${breakpoints.md} {
    place-content: center;
  }

  @media ${breakpoints.sm} {
    grid-template-columns: 1fr;
  }
`
