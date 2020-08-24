import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: auto;
  height: 100vh;
  padding: 0 32px;
  z-index: 1;
`
export const Content = styled.div`
  height: calc(100% - 130px);
`
export const EmptyContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #9e9e9e;

  h1 {
    margin-top: 44px;

    font-weight: 500;
  }

  p {
    margin-top: 16px;
    font-weight: 18px;
  }

  strong {
    color: #212121aa;
  }
`

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 44px;

  h2 {
    font-weight: 600;
    font-size: 40px;
  }

  a {
    width: 176px;
    height: 40px;
    background: #212121;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #fff;
    transition: background 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: #434343;
    }
`
