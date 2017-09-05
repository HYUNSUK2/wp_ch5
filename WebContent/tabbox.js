var tabBox = {
	__elLiSelected: null,	
	init: function(){
		for(var i = 1; i <= 5; i++) {
			var elLi = document.getElementById("tab-" + i);
			elLi.onclick = this.__onTabClicked;
		}
	},
	__onTabClicked: function(){
		var elLi = this; //이벤트 핸들러 함수의 this는 엘러멘트
		var _this = tabBox;
		
		//unselect
		if( _this.__elLiSelected != null ){
			_this.__elLiSelected.className = "";
		}
		
		//select
		elLi.className = "selected";
		_this.__elLiSelected = elLi;
	}
}