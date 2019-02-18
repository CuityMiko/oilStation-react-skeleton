/**
 * 油站管理
 */

export default {
    menus: [ // 菜单相关路由
        {
            key: '/main/oiltation_manage', title: '加油站管理', icon: 'icon-jiayouzhanguanli', power_code: 'GAS_007',
            subs: [
                {key: '/main/oiltation_manage/operator_manage', title: '加油员管理', component: 'OperatorManage', power_code: 'GAS_007_0002'}
            ]
        },
    ],
    others: [ // 非菜单相关路由
    ]
}