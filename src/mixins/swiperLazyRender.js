let startIndex = 0;
const SWIPER_SLIDE_SIZE = 5;
const MIDDLE_INDEX = SWIPER_SLIDE_SIZE / 2;
export default {
    methods: {
        swiperLazyRender: function(swiper, originData, renderData){
            let total = this[originData].length;
            swiper.lockSwipes();
            let activeIndex = swiper.activeIndex;
            startIndex += activeIndex;
            let shouldActiveIndex;
            if(startIndex < MIDDLE_INDEX) {
                this[renderData] = this[originData].slice(0, SWIPER_SLIDE_SIZE);
                shouldActiveIndex = activeIndex;
                startIndex = 0;
            }else if(startIndex > total -  MIDDLE_INDEX){
                this[renderData] = this[originData].slice(total + 1 - SWIPER_SLIDE_SIZE, total + 1);
                shouldActiveIndex = activeIndex;
                startIndex = total - SWIPER_SLIDE_SIZE;
            }else {
                startIndex = startIndex - MIDDLE_INDEX;
                this[renderData] = this[originData].slice(startIndex, startIndex + SWIPER_SLIDE_SIZE);
                shouldActiveIndex = MIDDLE_INDEX;
            }
            swiper.unlockSwipes();
            swiper.activeIndex = shouldActiveIndex;
            swiper.updateSlidesSize();
        }
    }
}
