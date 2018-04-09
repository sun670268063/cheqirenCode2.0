function SelYear(obj,e,isfull){
	var ths=obj;
	if(($(ths).attr('name')).toLowerCase().indexOf('year')>=0){//年弹出框
		var dal='<div class="_dates"><div class="left w15 mt70 ml5"><a href="javascript:void(0);" class="icon_chevron_left left"></a></div><div class="year_list_panel left"><ul class="ele_list"></ul></div><div class="left w15 mt70"><a href="javascript:void(0);" class="icon_chevron_right left"></a></div></div>'
		Iput.show({ id: ths, event: e, content: dal,width:"470"});
		var yeararr=[1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 
		1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000];
		var fullarr=[2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017];
		if(isfull){
			Array.prototype.push.apply(yeararr, fullarr);
		}
		var newarr=[];  
		var arrcount= Math.ceil(yeararr.length/25);
		var ii=0;
		var kk=0;
		while(ii<arrcount){
			if(kk>yeararr.length){
				newarr.push(yeararr.slice(kk,yeararr.length));
			}else{
				newarr.push(yeararr.slice(kk,kk+25));
			}
			ii++;
			kk+=25;
		}
		var current=newarr.length-1;
		createLi(newarr[current]);
		showChevron(current);
		
		
		$('.icon_chevron_left').click(function () {
			current-=1;
			createLi(newarr[current]);
			showChevron(current);
		});
		$('.icon_chevron_right').click(function () {
			current+=1;
			createLi(newarr[current]);
			showChevron(current);
		});
		function showChevron(t){
			if(t==newarr.length-1){
				$('.icon_chevron_left').show();
				$('.icon_chevron_right').hide();
			}else if(t<newarr.length-1&& t>0){
				$('.icon_chevron_right').show();
				$('.icon_chevron_left').show();
			}else{
				$('.icon_chevron_left').hide();
				$('.icon_chevron_right').show();
			}
		}
	}
	if(($(ths).attr('name')).toLowerCase().indexOf('month')>=0){//月弹出框
		var dal='<div class="_dates_month"><div class="month_list_panel left"><ul class="ele_list"></ul></div></div>'
		Iput.show({ id: ths, event: e, content: dal,width:"470"});
		var montharr=[1,2,3,4,5,6,7,8,9,10,11,12];
		createLi(montharr);
	}
	if(($(ths).attr('name')).toLowerCase().indexOf('day')>=0){//日弹出框
		var dal='<div class="_dates_day"><div class="day_list_panel left"><ul class="ele_list"></ul></div></div>'
		Iput.show({ id: ths, event: e, content: dal,width:"470"});
		var dayArr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
		createLi(dayArr);
				
	}
	if(($(ths).attr('name')).toLowerCase().indexOf('country')>=0){//地区弹出框
		var dal='<div class="_dates_area"><div class="area_list_panel left"><ul class="ele_list"></ul></div></div>'
		Iput.show({ id: ths, event: e, content: dal,width:"470"});
		var areaCountryArr=['中国大陆','加拿大','欧洲','法国','中国香港','德国','英国','美国','中国澳门','新加坡','日本','韩国','中国台湾','东南亚','北美','南美','非洲','西亚','其他'];
		createLi(areaCountryArr);
				
	}
	/**填充选框中值*/
	function createLi(arr){
		var tb_year = [];
		for(var i in arr){
			if(i<arr.length)
				tb_year.push('<li>'+arr[i]+'</li>');
		}
		$('.ele_list').html(tb_year.join(""));
		
		/**选值填入*/
		$('.ele_list li').click(function(){
		console.log("111");
			var year=$(this).text();
			 ths.value=year;
			Iput.colse();
		});
	}
	
}
