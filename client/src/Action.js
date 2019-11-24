export const GETRECENTDATA = 'GETRECENTDATA'

export const getRecentData = (dat) => {
    console.log('called')
    return {
        type: 'GETRECENTDATA',
        payload: dat
    }
}