import moment from 'moment'


const DateFormat = (date) => {
  return (
    moment(date).format('DD-MM-YYYY')
  )
}

export default DateFormat