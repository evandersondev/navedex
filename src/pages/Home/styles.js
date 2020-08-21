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
`

export const ListCard = styled.div`
  width: 100%;
  margin-top: 32px;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
