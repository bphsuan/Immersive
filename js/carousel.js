
var $a=$(".buttons a");
var $s=$(".buttons span");
var cArr=["p5","p4","p3","p2","p1"];
var index=0;
//上一张
function previmg(){
    cArr.unshift(cArr[4]);
    cArr.pop();
    //i是元素的索引，从0开始
    //e为当前处理的元素
    //each循环，当前处理的元素移除所有的class，然后添加数组索引i的class
    $(".list li").each(function(i,e){
        $(e).removeClass().addClass(cArr[i]);
    })
    index--;
    if (index<0) {
        index=4;
    }
    // show();
}

//下一张
function nextimg(){
    cArr.push(cArr[0]);
    cArr.shift();
    $(".list li").each(function(i,e){
        $(e).removeClass().addClass(cArr[i]);
    })
    index++;
    if (index>4) {
        index=0;
    }
    // show();
}

//点击class为p2的元素触发上一张照片的函数
$(document).on("click",".p2",function(){
    previmg();
    return false;//返回一个false值，让a标签不跳转
});

//点击class为p4的元素触发下一张照片的函数
$(document).on("click",".p4",function(){
    nextimg();
    return false;
});

//			进入页面自动开始定时器
timer=setInterval(nextimg,3000);
