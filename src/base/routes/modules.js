/**
 * 路由组件出口文件
 */

// 首页
import Home from '@/main/routes/index'
// 油站管理
import OiltationManage from '@/oiltation_manage/routes/index'
// 交接班
import ShiftsCenter from '@/shifts_center/routes/index'

export default { 
    ...Home,
    ...OiltationManage,
    ...ShiftsCenter
}