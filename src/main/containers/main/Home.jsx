import React from 'react';
import {connect} from 'react-redux';
import {Divider} from 'antd';

import { receiveData } from '@/base/redux/actions';

import './main.less';

class Home extends React.Component {
    state = {
        title: '加油站行业后台管理首页'
    }

    componentWillMount() {
        const {receiveData} = this.props;
        receiveData(null, 'breadcrumb');
    }

    componentDidMount() {
    }

    render() {
        const {title} = this.state;
        const {responsive} = this.props;
        const {isMobile} = responsive.data;
        return (
            <div className="main-content-container main-content-container-mobile">
                <Divider>{`${title}，${isMobile ? '移动端站点' : 'PC端站点'}`}</Divider>
            </div>
        )
    }
}

export default connect(state => {
    const {responsive} = state.AppData;
    return {
        responsive,
    }
}, {receiveData})(Home);