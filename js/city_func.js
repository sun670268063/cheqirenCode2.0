var currentTag;
var fulladdress="";
var citySelect = {
	//城市选择显示
	Show : function(){
		fulladdress="";
		var k=0;
		var Div=new Array('maincity','allProv');
		while(k<=1){
			var output='<h4>热门</h4>';
			var arr=maincity;
			if(k==1){
				output='<h4>所有省份</h4>';
				arr=allProvDuchy;
			}
			output+='<dl><dd>';
			for (var i=0;i<arr.length;i++){
				id=arr[i];
				if(k==0||arr[i]=='1000000031'||arr[i]=='1000000032'){
					output+='<li onclick="citySelect.Chk(\''+id+'\')">'+ja[id]+'</li>';
				}else{
					output+='<li onclick="citySelect.SubLayer(\''+id+'\')">'+ja[id]+'</li>';
				}
			}
			output+='</dd></dl>';
			$('#'+Div[k]).html(output);
			k++;
		}
		$('#drag').width('550px');
		// 鼠标悬停变色
		$('#cityAlpha li').hover(function(){$(this).addClass('over')},function(){$(this).removeClass()});
		// 点击弹出子菜单
		$('#allProv li').click(function(e){$("#sublist").css({top:e.pageY-4,left:e.pageX-4}).hover(function(){$(this).show()},function(){$(this).hide()})})
	},
	// 所有省份 下拉 城市菜单
	SubLayer : function(id){
		fulladdress="";
		fulladdress+=ja[id]+'省';
		var output='<div id="sub_city">',width,ischecked,key;
		var arr=getAreaIDs(id);
			width=Math.ceil(Math.sqrt(arr.length-1))*60;
		if(arr.length==1){
			output+='<ul style="width:'+width+'px"><h4 onclick="citySelect.Chk(\''+id+'\')"></h4>';
		}else{
			output+='<ul style="width:'+width+'px"><h4><a href="javascript:">'+ja[id]+'</a></h4>';
		}
		for (var i=0;i<arr.length;i++){
			key=arr[i];
			output+='<li><a href="javascript:" onclick="citySelect.Chk(\''+key+'\')">'+ja[key]+'</a></li>';
		}
		output=output+'</ul></div>';
		$("#sublist").html(output).show();
	},
	Chk : function(id){
		fulladdress+=ja[id];
		$(currentTag).val(fulladdress);
		//$('#btn_jobArea').val(ja[id]);
		//$('#jobAreaID').val(id);
		$("#sublist").hide().empty();
		boxAlpha();
	}
}
function csSelect(e){
	currentTag='#'+e.id;
	var dragHtml ='<div id="cityAlpha">';		//城市
		dragHtml+='		<div id="maincity"></div>';	//主要城市
		dragHtml+='		<div id="allProv"></div>';	//所有省市
		dragHtml+='</div>';
	$('#drag_h').html('<b>请选择城市</b><span onclick="boxAlpha()">X</span>');
	$('#drag_con').html(dragHtml);
	var a=citySelect.Show();
	boxAlpha();
	draglayer();
}

/**选择职能*/
function funSelect(e){
	currentTag='#'+e.id;
	var Div=[],Title=[];
	var dragHtml ='<div id="funAlpha">';
		for (var i in arrayfun) {
			  if(i==arrayfun.length-1){
			  	dragHtml+='	<div id="allProv'+i+'"class="allProvEnd"></div>';
			  }else{
			  	dragHtml+='	<div id="allProv'+i+'"class="allProv"></div>';
			  }
			    
				Div.push('allProv'+i);
				Title.push('<h4>'+funarr[arrayfun[i][0]]+'</h4>');
		}
		dragHtml+='</div>';
	$('#drag_h').html('<b>请选择职能</b><span onclick="boxAlpha()">X</span>');
	$('#drag_con').html(dragHtml);
	funtypeSelect.Show(Div,Title);
	boxAlpha();
	draglayer();
}

var funtypeSelect={
	//职能选择显示
	Show:function(Div,Title){
		for(var i in Div){
			var output=Title[i];
			var arr=arrayfun[i][1];
			output+='<dl><dd>';
			for (var j in arr){
				id=arr[j][0];
				output+='<li onclick="funtypeSelect.SubLayer(\''+id+'\',\''+arr[j][1]+'\')">'+funarr[id]+'</li>';
			}
			output+='</dd></dl>';
			$('#'+Div[i]).html(output);
		}
		//$('#drag').width('550px');
		// 鼠标悬停变色
		$('#funAlpha li').hover(function(){$(this).addClass('over')},function(){$(this).removeClass()});
		// 点击弹出子菜单
		$('.allProv li').click(function(e){$("#sublist").css({top:e.pageY-4,left:e.pageX-4}).hover(function(){$(this).show()},function(){$(this).hide()})})
	},
	// 所有二级职能 下拉 职能菜单
	SubLayer:function(id,arr3){
		var output='<div id="sub_fun">',width,ischecked,key;
		var arr=arr3.split(","); 
		width=Math.ceil(Math.sqrt(arr.length))*110;
		output+='<ul style="width:'+width+'px">';
		for(var i in arr){
			output+='<li><a href="javascript:" onclick="funtypeSelect.Chk(\''+arr[i]+'\')">'+funarr[arr[i]]+'</a></li>';
		}
		output=output+'</ul></div>';
		$("#sublist").html(output).show();
	},
	Chk : function(id){
		$(currentTag).val(funarr[id]);
		//$('#btn_function').val(funarr[id]);
		//$('#btn_functionId').val(id);
		$("#sublist").hide().empty();
		boxAlpha();
	}
}