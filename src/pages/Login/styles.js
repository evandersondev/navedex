import styled from 'styled-components'

export const Container = styled.div`
  width: 90%;
  max-width: 1080px;
  height: 100vh;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Form = styled.form`
  width: 100%;
  max-width: 480px;
  height: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #212121;
  padding: 32px;

  img {
    height: 60px;
    margin-bottom: 62px;
  }
`
