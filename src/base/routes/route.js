/**
 * 路由及菜单配置文件
 */

// 首页
import Home from '@/main/routes/route'
// 油站管理
import OiltationManage from '@/oiltation_manage/routes/route'

export default {
    menus: [ // 菜单相关路由
        ...Home.menus,
        ...OiltationManage.menus
    ],
    others: [ // 非菜单相关路由
        ...Home.others,
        ...OiltationManage.others
    ]
}