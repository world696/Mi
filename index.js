var leftBarList = document.getElementsByClassName("leftBar_list");
var leftBarCategory = document.getElementsByClassName("leftBar_categorylist_one");
// 获取元素
var img = document.getElementById("img");
var arrow = document.getElementsByClassName("arrows");
var dotItem = document.getElementsByClassName("dot-item");
// 定义计时器
var timer;
var count = 0;
// 定义图片数组
var arr = ['./img/imgOne.jpg', './img/imgTwo.webp', './img/imgThree.webp','./img/imgFour.webp','./img/imgFive.webp','./img/imgSix.webp']
// 图片定时轮播
showtime();

function checkActive() {
	for (let i = 0; i < dotItem.length; i++) {
		dotItem[i].classList.remove('active');
	}
	dotItem[count].classList.add('active');
}

function showtime() {
	img.setAttribute('src', arr[count]);
	timer = setInterval(function() {
		count++;
		if (count > arr.length - 1) count = 0;
		img.setAttribute('src', arr[count]);
		checkActive();
	}, 2000)
}
img.onmouseover = function() {
	clearInterval(timer);
}
img.onmouseleave = function() {
	showtime();
}
// 点击箭头切换
for (let i = 0; i < arrow.length; i++) {
	//鼠标移动到此，清除计时器
	arrow[i].onmouseover = function() {
		clearInterval(timer);
	}
	// 鼠标移走，计时器开始
	arrow[i].onmouseout = function() {
		showtime();
	}
}
// 左侧点击实现
function leftArrow() {
	count--;
	// console.log(count);
	if (count < 0) {
		count = 5;
	}
	img.setAttribute('src', arr[count]);
	checkActive();
}
// 右侧点击实现
function rightArrow() {
	count++;
	// console.log(count);
	if (count > 5) {
		count = 0;
	}
	img.setAttribute('src', arr[count]);
	checkActive();
}
// 圆点点击
for (let i = 0; i < dotItem.length; i++) {
	dotItem[i].onclick = function() {
		for (let i = 0; i < dotItem.length; i++) {
			dotItem[i].classList.remove('active');
		}
		count = i;
		dotItem[count].classList.add('active');
		img.src = arr[count];
	}
}
for (let i = 0; i < leftBarList.length; i++) {
	leftBarCategory[i].style.display = "none";
	leftBarList[i].onmouseover = function() {
		for (var j = 0; j < leftBarList.length; j++) {
			leftBarCategory[j].style.display = "none";
			leftBarList[j].style.backgroundColor = "transparent";
			console.log(j);
		}
		leftBarList[i].style.backgroundColor = "#ff6700";
		leftBarCategory[i].style.display = "block";
		leftBarCategory[i].style.display = "flex";
		leftBarCategory[i].style.flexDirection = "row";
		leftBarCategory[i].style.flexWrap = "wrap";
	};
	leftBarList[i].onmouseleave = function() {
		leftBarCategory[i].style.display = "none";
		leftBarList[i].style.backgroundColor = "transparent";
	};
	leftBarCategory[i].onmouseover = function() {
		leftBarList[i].style.backgroundColor = "#ff6700";
		leftBarCategory[i].style.display = "block";
		leftBarCategory[i].style.display = "flex";
		leftBarCategory[i].style.flexDirection = "row";
		leftBarCategory[i].style.flexWrap = "wrap";
	};
	leftBarCategory[i].onmouseleave = function() {
		leftBarList[i].style.backgroundColor = "transparent";
		leftBarCategory[i].style.display = "none";
	};
}
