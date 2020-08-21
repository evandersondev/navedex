import styled from 'styled-components'

export const Container = styled.div`
  width: ${props => props.width};

  button {
    width: 100%;
    height: 40px;
    background: #212121;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #ffffff;
    border: 0;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: #000;
    }
  }
`
