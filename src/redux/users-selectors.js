import { createSelector } from 'reselect'

const getUsers = (state) => {
    return state.usersPage.users
}

export const getUsersSuperSelector = createSelector(getUsers, (users) => {
    return users.filter(i => true)
})

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}
export const getTotalUsers = (state) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}
export const getFollowingProgress = (state) => {
    return state.usersPage.followingProgress
}