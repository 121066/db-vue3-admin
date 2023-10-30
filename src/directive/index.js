import color from './module/color'
import copy from './module/copy'
import drag from './module/drag'
import showTips from './module/showTips'
const directive = {
    copy,
    color,
    showTips,
    drag,
}
export default {
    install(app) {
        Object.keys(directive).forEach((item) => {
            app.directive(item, directive[item])
        })
    },
}
