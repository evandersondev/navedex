import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import { Container } from './styles'

export default ({
  width,
  name,
  label,
  value,
  placeholder,
  className,
  onChange,
}) => {
  return (
    <Container width={width} className={className}>
      <label htmlFor={name}>{label}</label>
      <DatePicker
        placeholderText={placeholder}
        selected={value}
        onChange={onChange}
        showYearDropdown={true}
        showMonthDropdown={true}
        useWeekdaysShort={true}
        maxDate={new Date()}
        calendarClassName="calendar"
        dateFormat="dd/MM/yyyy"
        className="date-input"
      />
    </Container>
  )
}
