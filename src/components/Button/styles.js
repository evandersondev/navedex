import styled from 'styled-components'

export const Container = styled.div`
  width: ${props => props.width};

  &:last-child {
    margin-left: 24px;
  }

  button {
    width: 100%;
    height: 40px;
    background: ${props =>
      props.color === 'dark' ? '#212121' : 'transparent'};
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: ${props => (props.color === 'dark' ? '#fff' : '#212121')};
    border: ${props => (props.color === 'dark' ? 0 : '1px solid #212121')};
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: ${props => (props.color === 'dark' ? '#434343' : '#dfdfdf')};
    }
  }
`
