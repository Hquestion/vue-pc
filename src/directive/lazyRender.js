/**
 * 过长swiper列表按需渲染
 * swiper列表过长导致渲染耗时卡顿，滚动不流畅；
 * 本指令目标：只渲染当前激活下标周围SWIPER_SLIDE_SIZE个内容，设置为奇数个，个数越小渲染越快，滑动效果越流畅
 */
let ctx = '@@lazyRender';
const SWIPER_SLIDE_SIZE = 3;   //奇数个
const MIDDLE_INDEX = Math.floor(SWIPER_SLIDE_SIZE / 2);

export default {
    directives: {
        lazyRender: {
            bind: function(el, binding, vNode) {
                let vm = vNode.context;
                let expression = binding.value;
                if(expression && expression.length > 0) {
                    let renderData = el.getAttribute('renderData');
                    vm[renderData] = expression.slice(0, SWIPER_SLIDE_SIZE);
                }
            },
            update: function (el, binding, vNode) {
                if (!el[ctx] || !el[ctx].isBound) {
                    if (el.swiper) {
                        el[ctx] = {};
                        let vm = vNode.context;
                        let expression = binding.value;
                        let renderData = el.getAttribute('renderData');
                        let startIndex = 0;
                        let total = expression.length;
                        //初始化赋值
                        if(expression && expression.length > 0) {
                            el[ctx].isBound = true;
                            vm[renderData] = expression.slice(0, SWIPER_SLIDE_SIZE);
                        }else {
                            return;
                        }
                        el.swiper.on('slideChangeEnd', function (swiper) {
                            swiper.lockSwipes();
                            let activeIndex = swiper.activeIndex;
                            startIndex += activeIndex;
                            let shouldActiveIndex;
                            if(startIndex < MIDDLE_INDEX) {
                                vm[renderData] = expression.slice(0, SWIPER_SLIDE_SIZE);
                                shouldActiveIndex = activeIndex;
                                startIndex = 0;
                            }else if(startIndex > total -  MIDDLE_INDEX){
                                vm[renderData] = expression.slice(total + 1 - SWIPER_SLIDE_SIZE, total + 1);
                                shouldActiveIndex = activeIndex;
                                startIndex = total - SWIPER_SLIDE_SIZE;
                            }else {
                                startIndex = startIndex - MIDDLE_INDEX;
                                vm[renderData] = expression.slice(startIndex, startIndex + SWIPER_SLIDE_SIZE);
                                shouldActiveIndex = MIDDLE_INDEX;
                            }
                            swiper.unlockSwipes();
                            swiper.activeIndex = shouldActiveIndex;
                            swiper.updateSlidesSize();
                        });
                    }
                }
            }
        }
    }
}
