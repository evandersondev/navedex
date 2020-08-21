import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-height: 376px;
  display: flex;
  flex-basis: 280px;
  flex-direction: column;

  strong {
    font-weight: 600;
    font-size: 16px;
    margin-top: 16px;
  }

  p {
    font-size: 16px;
    margin-top: 4px;
  }
`
export const AvatarContainer = styled.div`
  width: 100%;
  height: 280px;
  display: flex;
  overflow: hidden;
  cursor: pointer;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: transform ease-out 0.2s;

    &:hover {
      transform: scale(1.03);
    }
  }
`

export const ActionsContainer = styled.div`
  width: 100%;
  text-align: start;
  margin-top: 13px;

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }

    & + button {
      margin-left: 16px;
    }
  }
`
