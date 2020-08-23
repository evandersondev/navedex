import styled from 'styled-components'

export const Container = styled.div`
  width: ${props => (props.width ? `${props.width}px` : '100%')};
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    margin-bottom: 4px;
  }

  .date-input {
    width: 100%;
    height: 40px;
    border: 1px solid #424242;
    padding: 8px;
    font-size: 16px;
    color: #9e9e9e;
    margin-bottom: 32px;
    position: relative;
  }

  .calendar {
    margin-top: -30px;

    > button {
      margin-left: 0;
    }
  }
`
