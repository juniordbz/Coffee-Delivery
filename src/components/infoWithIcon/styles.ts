import styled from 'styled-components'

export const InfoWithIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface IconCotainerProps {
  iconBg: string
}

export const IconContainer = styled.div<IconCotainerProps>`
  padding: 0.5rem;
  border-radius: 999px;
  background: ${({ iconBg }) => iconBg};

  color: ${({ theme }) => theme.colors['base-white']};
  display: flex;
  align-items: center;
  justify-content: center;
`
