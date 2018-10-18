window.onload = function () {
    //瀑布流
    $('#list').masonry({
        // options
        itemSelector: 'li',
        isAnimated: true, //使用jquery的布局变化，是否启用动画效果
        animationOptions: {
            //jquery animate属性 ，动画效果选项。比如渐变效果 Object { queue: false, duration: 500 }
        },
        gutterWidth: 30, //列的间隙
        isFitWidth: true, //自适应宽度
        isResizableL: true, // 是否可调整大小
        isRTL: false, //使用从右到左的布局

    });
}