/**
 * 路由及菜单配置文件
 */

// 首页
import Home from '@/main/routes/route'
// 交接班
import ShiftsCenter from '@/shifts_center/routes/route'
// 油站管理
import OiltationManage from '@/oiltation_manage/routes/route'

export default {
    menus: [ // 菜单相关路由
        ...Home.menus,
        ...ShiftsCenter.menus,
        ...OiltationManage.menus
    ],
    others: [ // 非菜单相关路由
        ...Home.others,
        ...ShiftsCenter.others,
        ...OiltationManage.others
    ]
}