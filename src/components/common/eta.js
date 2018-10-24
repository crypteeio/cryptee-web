import moment from 'moment'

export default (left: moment.Duration) => `${left.hours()} hours ${left.minutes()} minutes ${left.seconds()} seconds`