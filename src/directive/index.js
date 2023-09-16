import color from './module/color';
import copy from './module/copy';
import showTips from './module/showTips';
const directive = {
    copy,
    color,
    showTips,
};
export default {
    install(app) {
        Object.keys(directive).forEach((item) => {
            app.directive(item, directive[item]);
        });
    },
};
