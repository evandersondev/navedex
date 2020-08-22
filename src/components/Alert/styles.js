import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  display: ${props => (props.show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
`
export const ContentContainer = styled.div`
  width: 90%;
  max-width: 592px;
  height: ${props => (props.actions ? '233px' : '160px')};
  background: #fff;
  padding: 32px;
  position: relative;
  animation: alert ease-out 0.2s;

  @keyframes alert {
    from {
      transform: scale(1.1);
    }
    to {
      transform: scale(1);
    }
  }

  > button {
    border: 0;
    background: transparent;
    position: absolute;
    top: 29px;
    right: 29px;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`
export const Title = styled.p`
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 24px;
  line-height: 36px;
`
export const Message = styled.p`
  font-size: 16px;
  line-height: 36px;
`
export const ActionsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 33px;
`
