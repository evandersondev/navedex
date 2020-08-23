import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: auto;
  height: 100vh;
  padding: 0 32px;
`

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 582px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 40px;
`

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  button {
    border: 0;
    background: transparent;
    padding: 0 5px;
    display: flex;
    align-items: center;
    margin-right: 16px;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }

  h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
  }
`

export const Form = styled.form`
  width: 100%;
  margin: 54px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 0 32px;
  grid-template-areas:
    'name office'
    'age time-job'
    'projects avatar'
    'free button';

  @media (max-width: 530px) {
    display: flex;
    flex-direction: column;
  }

  .name {
    grid-area: name;
  }

  .age {
    grid-area: age;
  }

  .projects {
    grid-area: projects;
  }

  .office {
    grid-area: office;
  }

  .time-job {
    grid-area: time-job;
  }

  .button {
    grid-area: button;
  }

  button {
    margin-left: -24px;
  }
`
