import styled from 'styled-components'
import BackgroundIntro from '../../../../assets/BackgroundIntro.png'

export const IntroContainer = styled.section`
  width: 100%;
  height: 34rem;
  background-image: url(${BackgroundIntro});
  background-size: cover;
`
export const IntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeadLine = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > h1 {
    color: ${({ theme }) => theme.colors['base-title']};
    font-size: ${({ theme }) => theme.textSizes['title-xl']};
    font-family: ${({ theme }) => theme.fonts.title};
    line-height: 1.3;
  }
  > p {
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font-size: ${({ theme }) => theme.textSizes['text-regular-l']};
    line-height: 1.3;
  }
`

export const DestaquesIntro = styled.div`
  display: flex;
  gap: 2.5rem;

  > :nth-child(1),
  > :nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
`

interface PropsBackground {
  variant: 'yellow' | 'purple'
}

export const BackgroundDestasquesIntro = styled.div<PropsBackground>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 999px;
  background: ${({ theme, variant }) => theme.colors[`brand-${variant}-dark`]};
  color: ${({ theme }) => theme.colors['base-button']};
`
export const IconsAndTexts = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`
