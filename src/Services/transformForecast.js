import moment from 'moment'
import 'moment/locale/es'
import transFormWeather from './transFormWeather'


const transformForecast = (data) => (

    data.list.filter( item =>( 
        moment.unix(item.dt).utc().hour() === 12
    )).map(item => (
        {
            Day: moment.unix(item.dt).format('ddd'),
            data: transFormWeather(item)
        }
    ))
)

export default transformForecast