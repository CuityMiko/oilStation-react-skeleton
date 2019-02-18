/**
 * 油站管理
 */
import Loadable from 'react-loadable';
import {Loading} from '@/common/components/widget';

/**
 *  加油员管理
 */
const OperatorManage = Loadable({
    loader: () => import('../containers/operator_manage/OperatorManage.jsx'),
    loading: Loading
});

export default {
    OperatorManage
}