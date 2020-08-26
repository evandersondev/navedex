import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 5;
  padding: 0 32px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  display: ${props => (props.enable ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
`
export const ModalContainer = styled.div`
  width: 100%;
  max-width: 1007px;
  max-height: 503px;
  margin: auto;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: #fff;
  animation: modal ease-out 0.2s;

  @keyframes modal {
    from {
      transform: scale(1.1);
    }
    to {
      transform: scale(1);
    }
  }

  @media (max-width: 840px) {
    grid-template-columns: 180px 1fr;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`
export const AvatarContainer = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 500px) {
    display: none;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`
export const InfoContainer = styled.div`
  width: 100%;
  height: 503px;
  position: relative;
  padding: 30px 32px 30px 27px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 500px) {
    height: auto;
  }

  > button {
    border: 0;
    background: transparent;
    position: absolute;
    top: 21px;
    right: 21px;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`

export const Info = styled.div`
  h1 {
    font-weight: 600;
    font-size: 24px;
  }

  p {
    font-size: 16px;
    margin-top: 10px;
    margin-bottom: 24px;
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
