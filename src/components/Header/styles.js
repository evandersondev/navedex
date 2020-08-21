import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 37px;
  }

  button {
    border: 0;
    background: transparent;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    position: relative;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
`
