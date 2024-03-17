window.onload = function(){
    var imgShow = document.getElementsByClassName('parent')[0],
	dotList = document.querySelectorAll('.dots >.clearfix > li');
	var btnLeft = document.getElementsByClassName('btnLeft')[0],
    btnRight = document.getElementsByClassName('btnRight')[0];
	var dotLen = dotList.length,
	index = 0; //轮播层的图片索引，0表示第一张

//圆点显示
function showRadius() {
	for(var i = 0; i < dotLen; i++) {
		if(dotList[i].className === "on"){
			dotList[i].className = "off";
		}
	}
	dotList[index].className = "on";
}

//向左移动
btnLeft.onclick = function() {
	index--;
    if(index < 0){  /*第1张向左时，变为第3张*/
        index = 2;
    }
    showRadius();
	var left;
	var imgLeft = imgShow.style.left;
	if(imgLeft === "0px") { /*当是第1张时，每张图片左移，移2张图，位置为-(2*1644)*/
		left = -3288;
	}
	else{
		left = parseInt(imgLeft) + 1644; /*由于left为负数，每左移一张加1644*/
	}
	imgShow.style.left = left + "px";
}

//向右移动
btnRight.onclick = function() {
	index++;
    if(index > 2){  /*第3张向右时，变为第1张*/
        index = 0;
    }
    showRadius();
	var right;
	var imgLeft = imgShow.style.left;
	if(imgLeft === "-3288px") { /*当是第3张时，第1张的位置为0*/
		right = 0;
	}
	else{
		right = parseInt(imgLeft) - 1644; /*由于left为负数，每右移一张减1644*/
	}
	imgShow.style.left = right + "px";
}


for(var i = 0; i < dotLen; i++) {
    /*利用闭包传递索引*/
    (function(i) {
        dotList[i].onclick = function() {
	        var dis = index - i; //当前位置和点击的距离
	        imgShow.style.left = (parseInt(imgShow.style.left) + dis * 1644) + "px";
	        index = i; //显示当前位置的圆点
	        showRadius();
    	}
    })(i);
}

};
