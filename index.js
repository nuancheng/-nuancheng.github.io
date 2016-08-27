	var kong="";
	var nameval=$('.name').val();
	var cellval=$('.cell').val();
	var emailval=$('.email').val();
	var cellcodeval=$('.cellcode').val();
	var buer1=false,buer2=false,buer3=false,buer4=false,buer5=false,buer6=false;
//定义公共全局变量
	$('.name').click(function(){
		var wenzi=$(this).val();
		if(wenzi==nameval){
			$(this).val(kong);}
	});
	$('.name').blur(function(){
		wenzi=$(this).val();
		if(wenzi==kong){
			$(this).val(nameval);
			$(this).next().html("昵称字符不正确或已被他人使用").css('color','red');
		}else{
			var xxz=/^[0-9a-zA-Z_]{6,12}$/ig;
			buer1=xxz.test(wenzi);
			if(buer1==true){
				$(this).next().html("恭喜可用！").css('color','#66CD00');
			}else{$(this).next().html("昵称字符不正确或已被他人使用").css('color','red');}
		};
	});
//昵称确认
	$('.cell').click(function(){
		var shuzi=$(this).val();
		if(shuzi==cellval){
			$(this).val(kong);}
	});
	$('.cell').blur(function(){
		shuzi=$(this).val();
		if(shuzi==kong){
			$(this).val(cellval);
			$(this).next().html("号码不正确").css('color','red');
		}else{
			var xxz=/^1[0-9]{10}$/ig;
			buer2=xxz.test(shuzi);
			if(buer2==true){
				$(this).next().html("恭喜可用！").css('color','#66CD00');
			}else{$(this).next().html("号码不正确").css('color','red');}
		};
	});
//手机号确认
	$('.email').click(function(){
		var youxiang=$(this).val();
		if(youxiang==emailval){
			$(this).val(kong);}
	});
	$('.email').blur(function(){
		youxiang=$(this).val();
		if(youxiang==kong){
			$(this).val(emailval);
			$(this).next().html("邮箱号码不正确").css('color','red');
		}else{
			var xxz=/^[0-9]{4,11}@qq.com$|^[0-9a-zA-Z_]+@163.com$/ig;
			buer3=xxz.test(youxiang);
			if(buer3==true){
				$(this).next().html("恭喜可用！").css('color','#66CD00');
			}else{$(this).next().html("邮箱号码不正确").css('color','red');}
		};
	});
//邮箱确认
	$('.passone').click(function(){
		$(this).next().html("6~12位字母、数字、下划线组成，支持大小写").css('color','#66CD00');
	});
	$('.passone').blur(function(){
		mima=$(this).val();
		if(mima==kong){
			$(this).next().html("密码格式不正确").css('color','red');
		}else{
			var xxz=/^[0-9a-zA-Z_]{6,12}$/ig;
			buer4=xxz.test(mima);
			if(buer4==true){
				$(this).next().html("恭喜可用！").css('color','#66CD00');
			}else{$(this).next().html("密码格式不正确").css('color','red');}
		};
	});
//密码确认
	$('.passtwo').click(function(){
		$(this).next().html("再次确认密码").css('color','#66CD00');
	});
	$('.passtwo').blur(function(){
		var mimatow=$(this).val();
		if(mimatow==mima&&buer4==true){
			buer5=true;
			$(this).next().html("恭喜可用！").css('color','#66CD00');
		}else{
			$(this).next().html("密码不正确").css('color','red');
		};
	});
//密码确认确认
	$('.cellcode').click(function(){
		var yanm=$(this).val();
		if(yanm==cellcodeval){
			$(this).val(kong);}
	});
	$('.cellcode').blur(function(){
		var yanm=$(this).val();
		if(yanm==kong){
			$(this).val(cellcodeval);
			$(this).nextAll('i').html("验证码不正确").css('color','red');
		}else{
			var xxz=/^[0-9]{4}$/ig;
			buer6=xxz.test(yanm);
			if(buer6==true){
				$(this).nextAll('i').html("恭喜可用！").css('color','#66CD00');
			}else{$(this).nextAll('i').html("验证码不正确").css('color','red');}
		};
	});
//验证码确认
	var i=0;
	var s=0;
	var xinx=[];
	var mxinx=[];
	$('.register').click(function(){
		if(buer1==true&&buer2==true&&buer3==true&&buer4==true&&buer5==true&&buer6==true){
			
			// xinx=[(wenzi,shuzi,youxiang),(mima)];
			xinx[i]=(wenzi);
			i++;
			xinx[i]=(shuzi);
			i++;
			xinx[i]=(youxiang);
			i++;
			mxinx[s]=(mima);
			s++;
			console.log(xinx);
			console.log(mxinx);
			alert('注册成功！请登陆');
			$('.memu').addClass('memudn');
				$('.memu').bind('webkitAnimationEnd',function(){
					$('.memu').addClass('disn');
					$('.dmemu').removeClass('disn');
					$('.dmemu').addClass('dmemudn');
				});	
			// window.location.href="登陆.html"
		}else{
			alert('请认真填写注册信息');
		}
	});
//注册信息确认

	var dnameval=$('.dname').val();
	var xx1=-1,xx2=-1;

	$('.dname').click(function(){
		var dwenzi=$(this).val();
		if(dwenzi==dnameval){
			$(this).val(kong);}
	});
	$('.dname').blur(function(){
		dwenzi=$(this).val();
		if(dwenzi==kong){
			$(this).val(dnameval);
			$(this).next().html("账号不可用，请注册").css('color','red');
		}else{
			xx1=xinx.indexOf(dwenzi);
			if(xx1==-1){
				$(this).next().html("无此账号信息").css('color','red');
			}else{$(this).next().html("账号正确").css('color','#66CD00');}
		};
	});
//登陆昵称确认！
	$('.dpassone').click(function(){
		$(this).next().html("请填写密码").css('color','#66CD00');
	});
	$('.dpassone').blur(function(){
		dmima=$(this).val();
		if(dmima==kong){
			$(this).next().html("请填写密码").css('color','red');
		}else{$(this).next().html("");
			xx2=mxinx.indexOf(dmima);};
	});
//登录密码确认
	$('.dregister').click(function(){
		if(xx1==-1,xx2==-1){
			alert('账号或密码不正确！');
		}else{
			alert('登陆成功！');
			$('.box').removeClass('disn');
		}
	});
//登陆确认
	$('.box').bind('webkitAnimationEnd',function(){
		window.location.href="../8·4 练习小样/抽奖.html"			
		});






//
//
//
//
//
//
//
//
//
//
//
//
		//定义画布宽高和生成点的个数
		var WIDTH = window.innerWidth, HEIGHT = window.innerHeight, POINT = 35;
		
		var canvas = document.getElementById('canvas');
		canvas.width = WIDTH,
		canvas.height = HEIGHT;
		var context = canvas.getContext('2d');
		context.strokeStyle = 'rgba(0,0,0,0.02)',
		context.strokeWidth = 1,
		context.fillStyle = 'rgba(0,0,0,0.05)';
		var circleArr = [];

		//线条：开始xy坐标，结束xy坐标，线条透明度
		function Line (x, y, _x, _y, o) {
			this.beginX = x,
			this.beginY = y,
			this.closeX = _x,
			this.closeY = _y,
			this.o = o;
		}
		//点：圆心xy坐标，半径，每帧移动xy的距离
		function Circle (x, y, r, moveX, moveY) {
			this.x = x,
			this.y = y,
			this.r = r,
			this.moveX = moveX,
			this.moveY = moveY;
		}
		//生成max和min之间的随机数
		function num (max, _min) {
			var min = arguments[1] || 0;
			return Math.floor(Math.random()*(max-min+1)+min);
		}
		// 绘制原点
		function drawCricle (cxt, x, y, r, moveX, moveY) {
			var circle = new Circle(x, y, r, moveX, moveY)
			cxt.beginPath()
			cxt.arc(circle.x, circle.y, circle.r, 0, 2*Math.PI)
			cxt.closePath()
			cxt.fill();
			return circle;
		}
		//绘制线条
		function drawLine (cxt, x, y, _x, _y, o) {
			var line = new Line(x, y, _x, _y, o)
			cxt.beginPath()
			cxt.strokeStyle = 'rgba(0,0,0,'+ o +')'
			cxt.moveTo(line.beginX, line.beginY)
			cxt.lineTo(line.closeX, line.closeY)
			cxt.closePath()
			cxt.stroke();

		}
		//初始化生成原点
		function init () {
			circleArr = [];
			for (var i = 0; i < POINT; i++) {
				circleArr.push(drawCricle(context, num(WIDTH), num(HEIGHT), num(15, 2), num(10, -10)/40, num(10, -10)/40));
			}
			draw();
		}

		//每帧绘制
		function draw () {
			context.clearRect(0,0,canvas.width, canvas.height);
			for (var i = 0; i < POINT; i++) {
				drawCricle(context, circleArr[i].x, circleArr[i].y, circleArr[i].r);
			}
			for (var i = 0; i < POINT; i++) {
				for (var j = 0; j < POINT; j++) {
					if (i + j < POINT) {
						var A = Math.abs(circleArr[i+j].x - circleArr[i].x),
							B = Math.abs(circleArr[i+j].y - circleArr[i].y);
						var lineLength = Math.sqrt(A*A + B*B);
						var C = 1/lineLength*7-0.009;
						var lineOpacity = C > 0.03 ? 0.03 : C;
						if (lineOpacity > 0) {
							drawLine(context, circleArr[i].x, circleArr[i].y, circleArr[i+j].x, circleArr[i+j].y, lineOpacity);
						}
					}
				}
			}
		}

		//调用执行
		window.onload = function () {
			init();
			setInterval(function () {
				for (var i = 0; i < POINT; i++) {
					var cir = circleArr[i];
					cir.x += cir.moveX;
					cir.y += cir.moveY;
					if (cir.x > WIDTH) cir.x = 0;
					else if (cir.x < 0) cir.x = WIDTH;
					if (cir.y > HEIGHT) cir.y = 0;
					else if (cir.y < 0) cir.y = HEIGHT;
					
				}
				draw();
			}, 16);
		}
