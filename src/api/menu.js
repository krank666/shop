import service from './request'

export const getMenu = () => {
    return service({
        url: '/menus',
        method: 'GET'
    })
}