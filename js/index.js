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
		var box = G('box');
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
		var ssss = G('ssss');
		var STA = G('slider-main-ul').getElementsByTagName('a');
	//获取id
		var pw=document.body.clientWidth;
		box.style.width=pw+'px';

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
			
			var gcds="";
			for(var i = 0, l = gcccA.length; i < l; i++){
				gcsss='<p>'+gcccA[i][1]+"</p>";
				gcds=gcds+gcsss;
				if(gcds!=""){
					// gcds='<div id="dqgcc"></div>'+gcds;
					gctxt.innerHTML=gcds;
					if(mutime>gcccA[i][0]){
						// dqgcc=document.getElementById('dqgcc');
						// dqgcc.style.marginTop=34*i+"px";//.color="yellow"
						gccp=gctxt.getElementsByTagName('p');
						gccp[i].className="gcppass";
						if(i>5){
							gctxt.scrollTo(0,34*(i-5));
						};		
					};
				};
			};

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
		
		var jdq=false;
		jinduO.onmousedown=function(e){
			jdq=true;
		};
		jinduB.onmousemove=function(e){
			if(jdq==true){
				jdqwz=e.offsetX;
			};
		};
		jinduB.onmouseup=function(e){
			jdq=false;
			var wzbfb=jdqwz/400;
			MU.currentTime=wzbfb*mzt;
		};

		//进度球的点击拖动释放事件
		
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
		//原生判断动画是否完成的函数结束，哈哈哈

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
		        lyric = request.response;
		        // alert(lyric);		
		    };
		    //向服务器发送请求
		    request.send();
		};

		function ewew(){
			parseLyric(lyric);
		};
		getLyric('../music/bu_kg.lrc');//+munaz.replace('.mp3', '.lrc')
		setTimeout(ewew,1000);
		
		function parseLyric(text) {
		    //将文本分隔成一行一行，存入数组
		    var lines = text.split('\n'),
		        //用于匹配时间的正则表达式，匹配的结果类似[xx:xx.xx]
		        pattern = /\[\d{2}:\d{2}.\d{2}\]/g,
		        //保存最终结果的数组
		        result = [];
		    //去掉不含时间的行
		    while (!pattern.test(lines[0])) {
		        lines = lines.slice(1);
		    };
		    //上面用'\n'生成生成数组时，结果中最后一个为空元素，这里将去掉
		    lines[lines.length - 1].length === 0 && lines.pop();
		    lines.forEach(function(v /*数组元素值*/ , i /*元素索引*/ , a /*数组本身*/ ) {
		        //提取出时间[xx:xx.xx]
		        var time = v.match(pattern),
		            //提取歌词
		            value = v.replace(pattern, '');
		        //因为一行里面可能有多个时间，所以time有可能是[xx:xx.xx][xx:xx.xx][xx:xx.xx]的形式，需要进一步分隔
		        time.forEach(function(v1, i1, a1) {
		            //去掉时间里的中括号得到xx:xx.xx
		            var t = v1.slice(1, -1).split(':');
		            //将结果压入最终数组
		            result.push([parseInt(t[0], 10)*60+parseFloat(t[1]), value]);
		        });
		    });
		    //最后将结果数组中的元素按时间大小排序，以便保存之后正常显示歌词
		    result.sort(function(a, b) {
		        return a[0] - b[0];
		    });
		    gcccA=result;  
		    return result;
		};

	};