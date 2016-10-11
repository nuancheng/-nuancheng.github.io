	window.addEvent("load", function(){});
	var dtSlideshow = new dtSliderGallery({
		container: $("gallery-slider"),
		arrowControls: 1,
		description: 1,
		transitionDuration: 1000,
		transitionInterval: 5000
	});
	//引入文件的执行动作
	function G(collId){
		return document.getElementById(collId);
	}
	window.onload=function(){
		var MU = G('musicone');
		var btnplay = G('btnplay');
		var btnshang = G('btnshang');
		var btnxia = G('btnxia');
		var btnpause = G('btnpause');
		var btnstop = G('btnstop');
		var ptext = G('ptext');
		var ptextB = G('ptextb');
		var mupic = G('mupic');	
		var jinduA = G('jindu1');
		var jinduB = G('jindu-0');
		var jinduO = G('jindu2');
		var hName = G('hname');
		var btnmosi = G('btnmosi');
		var btnxiaz = G('btnxiaz');
		var dabox = G('slideshow-wrapper');
		var gccc = G('gccc');
		var gbgc = G('gbgc');
		var gctxt = G('gctxt');
		var STA = G('slider-main-ul').getElementsByTagName('a');
	//获取id
	
		function hqsc(){
			mzt=MU.duration;
			muname=MU.getAttribute('src');
			var ccct=muname.split('/');
			munaz=ccct[1];
			hName.innerHTML=munaz;
			mutimeAA=Math.floor(mzt/60);
			mutimeAB=Math.floor(mzt%60);
			if(mutimeAB<10){
				ptextB.innerHTML=mutimeAA+":0"+mutimeAB;
				return;}{
				ptextB.innerHTML=mutimeAA+":"+mutimeAB;
				return;}
		}
		hqsc();
		//获取总时长，当前歌曲名称
		
		function gbjdt(){
			mutime=MU.currentTime;
			var mujidu=mutime/mzt;
			jinduO.style.left=mujidu*400+"px";
			jinduA.style.left=-(400-mujidu*400)+"px";
			mutimeA=Math.floor(mutime/60);
			mutimeB=Math.floor(mutime%60);
			if(mutimeB<10){
				ptext.innerHTML=mutimeA+":0"+mutimeB;
				return;}{
				ptext.innerHTML=mutimeA+":"+mutimeB;
				return;}
		};
		//获取当前时间，改变进度条位置
		
		function cxjz(){
			MU.load();
			MU.play();
			if(ptextB.innerHTML=='NaN:NaN'){
				ptextB.innerHTML='0:00';};
		};
		//重新加载文件，改变未开始时显示的时间
		
		function gbsrc(xxx){
			xiname=xxx.getAttribute('href');
			STnaimg1=xxx.getElementsByTagName('img');
			STnaimg=STnaimg1[0].getAttribute('src');
			MU.setAttribute('src',xiname);
			console.log(STnaimg);
			mupic.style.backgroundImage='url('+STnaimg+')';
		};
		//改变音乐文件路径，改变当前歌曲img
		
		function hqdq(){
			STzmsz=STzm.split('#');
			STzmimgsz=STzmimg.split('#');
			MU.index=STzmsz.indexOf(muname);
		};
		//在新建的数组中找到当前文件的位置
		
		STzm="";
		STzmimg="";
		for(var q=0; q<STA.length; q++){
			STA[q].index=q;
			STna=STA[q].getAttribute('href');
			STnaimg1=STA[q].getElementsByTagName('img');
			STnaimg=STnaimg1[0].getAttribute('src');
			STzm=STzm+"#"+STna;
			STzmimg=STzmimg+'#'+STnaimg;
		//for循环获取所有的歌曲文件名称
			STA[q].onclick=function(event){
				gbsrc(this);
				hqsc();
				cxjz();     // setTimeout(wwq,80);
				btnplay.innerHTML='&#xe603;';
				ifzt=true;
				event.preventDefault();
			};
		};
		//点击歌曲封面，获取名称
		
		MU.addEventListener('timeupdate',function(e){
			hqsc();
			gbjdt();
			hqdq();
			// console.log(MU.index);
			if(mzt==mutime&&MU.loop==false&&ifms==1){
				gbsrc(STA[MU.index]);
				cxjz();
				MU.index++;
			}else if(mzt==mutime&&MU.loop==false&&ifms==2){
				var p=Math.floor(Math.random()*27);
				gbsrc(STA[p]);
				cxjz();
			}else if(mzt==mutime&&MU.loop==false&&ifms==0){
				MU.loop=true;
				MU.play();
			};
		});
		//最重要的，当前歌曲播放时不间断运行的函数
		
		var ifzt=false;
		btnplay.onclick=function(){
			if(ifzt==false){
				MU.play();
				btnplay.innerHTML='&#xe603;';
				// var aaad=setInterval(gbjdt,500);clearInterval(aaad);
				ifzt=true;
				return;
			}{
				MU.pause();
				btnplay.innerHTML='&#xe602;';
				ifzt=false;
				return;
			}			
		};
		//播放暂停按钮的点击事件
		
		btnshang.onclick=function(){
			hqdq();
			if(MU.loop==false&&ifms==2){
				var p=Math.floor(Math.random()*27);
				gbsrc(STA[p]);
				cxjz();
				return;
			};
			if(MU.index>STA.length){MU.index=1};
			gbsrc(STA[MU.index]);
			cxjz();
			MU.index++;
			console.log(MU.index);
		};
		//上一曲点击事件
		
		btnxia.onclick=function(){
			hqdq();
			if(MU.loop==false&&ifms==2){
				var p=Math.floor(Math.random()*27);
				gbsrc(STA[p]);
				cxjz();
				return;
			};
			if(MU.index<2){MU.index=STA.length};
			gbsrc(STA[MU.index]);
			cxjz();
			MU.index--;
			console.log(MU.index);
		};
		//下一曲点击事件

		var ifms=0;
		MU.loop=true;
		btnmosi.onclick=function(){
			if(ifms==0){
				btnmosi.innerHTML='&#xe605;';
				MU.loop=false;
				ifms=1;
				return;
			}else if(ifms==1){
				btnmosi.innerHTML='&#xe606;';
				ifms=2;
				return;
			}else if(ifms==2){
				btnmosi.innerHTML='&#xe607;';
				ifms=0;
				return;}			
		};
		//播放模式的点击事件

		btnstop.onclick=function(){
			MU.currentTime=0;
			MU.pause();
			btnplay.innerHTML='&#xe602;';
			ifzt=false;
		};
		//停止按钮的点击事件

		jinduB.onclick=function(e){
			var djwz=e.offsetX;
			var wzbfb=djwz/400;
			MU.currentTime=wzbfb*mzt;
		};
		//进度条的点击事件

		btnxiaz.onclick=function(){
			open(muname);
		};
		//下载按钮的点击事件

		mupic.onmouseover=function(){
			this.style.opacity=0.6;
			this.innerHTML='查看</br>歌词';
		};
		mupic.onmouseout=function(){
			this.style.opacity=1;
			this.innerHTML='';
		};
		//当前歌曲的img，鼠标滑过滑离时间

		function whichTransitionEvent(){
			var t;
			var el = document.createElement('fakeelement');
			var transitions = {
				'animation':'animationend',
				'OAnimation':'oAnimationEnd',
				'MozAnimation':'animationend',
				'WebkitAnimation':'webkitAnimationEnd'
			}
			for(t in transitions){
				if( el.style[t] !== undefined ){
					return transitions[t];
				}
			}
		}
		var transitionEvent = whichTransitionEvent();
		//原生判断动画是否完成的函数结束，简直太叼了！哈哈哈
		
		var cc;
		mupic.onclick=function(){
			dabox.className='slideshow';
			cc=1;
			transitionEvent && dabox.addEventListener(transitionEvent, function(){
				if(cc==1){
					dabox.className='slideshownone';
					gccc.style.display='block';
				};
			});
		};
		//当前歌曲的img，显示歌词点击事件，判断动画是否完成

		gbgc.onclick=function(){
			cc=2;
			gccc.style.display='none';
			dabox.className='slidenone';
		};
		//关闭歌词显示的点击事件

		function getLyric(url) {
		    //建立一个XMLHttpRequest请求
		    var request = new XMLHttpRequest();
		    //配置, url为歌词地址，比如：'./content/songs/foo.lrc'
		    request.open('GET', url, true);
		    //因为我们需要的歌词是纯文本形式的，所以设置返回类型为文本
		    request.responseType = 'text';
		    //一旦请求成功，但得到了想要的歌词了
		    request.onload = function() {
		        //这里获得歌词文件
		        var lyric = request.response;
		    };
		    //向服务器发送请求
		    request.send();
		};
		 getLyric();
	};





		// jinduO.onmousedown  onmouseup  =function(e){
		// 	var djwz=e.offsetX;
		// 	console.log(djwz);
		// 	jinduO.style.left=djwz+"px";
		// 	jinduA.style.left=-(400-djwz)+"px";
		// };
	

		// var playList = [
		// 	{
		// 		'artist' : '陈绮贞',
		// 		'musicAlbum' : '<旅行的意义> 2004',
		// 		'musicURL' : 'http://file.dengo.org/music/cqz_hldmx.mp3',
		// 	}
		// ];