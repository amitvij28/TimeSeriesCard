import axios from 'axios'
import { getRecentData } from './Action'


export const getData = () => {
    axios.get('http://localhost:8081/getData').then(res => {
        console.log('hey')
        getRecentData(res)
    })
}