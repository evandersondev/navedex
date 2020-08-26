import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
`

export const Spinner = styled.div`
  width: 45px;
  height: 45px;
  border: 8px solid #9e9e9e22;
  border-radius: 50%;
  border-top-color: #212121aa;
  animation: loading 0.6s linear infinite;

  @keyframes loading {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
