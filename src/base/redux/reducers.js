/**
 * 处理状态
 */

import {combineReducers} from 'redux'

import * as type from './action-types';

import initState from './init_state';

/**
 * 引入各个模块的reducers
 */

// 登录
import LoginReducers from '@/login/login.reducer'

// 首页
import HomeReducers from '@/main/home.reducer'

// 油站管理
import OiltationManageReducers from '@/oiltation_manage/oiltation_manage.reducer'

/**
 * 公共reducer
 */

const handleData = (state = {isFetching: true, data: {}}, action) => {
    switch (action.type) {
        case type.REQUEST_DATA:
            return {...state, isFetching: true};
        case type.RECEIVE_DATA:
            return {...state, isFetching: false, data: action.data};
        default:
            return {...state};
    }
};

/**
 * APP全局状态
 * @param {*} state 
 * @param {*} action 
 */
const AppData = (state = initState.AppGlobalState, action) => {
    switch (action.type) {
        case type.RECEIVE_DATA:
        case type.REQUEST_DATA:
            return {
                ...state,
                [action.category]: handleData(state[action.category], action)
            };
        default:
            return {...state};
    }
};

/**
 * 请求loading状态
 * @param {*} state 
 * @param {*} action 
 */
const requestLoading = (state = {operate: 'close', title: '加载中...'}, action) => {
    switch (action.type) {
        case type.REQUEST_lOADING:
            return {
                ...state, ...action.data
            }
        default:
            return {...state};
    }
}

// 多函数组合
export default combineReducers({
  AppData,
  requestLoading,
  ...LoginReducers,
  ...HomeReducers,
  ...OiltationManageReducers
})

