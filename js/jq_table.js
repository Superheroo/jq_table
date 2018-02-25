var info = [{
			name: "胡杭",
			age: 16
		},
		{
			name: "胜明",
			age: 22
		},
		{
			name: "军毅",
			age: 21
		},
		{
			name: "晓华",
			age: 13
		},
		{
			name: "盛聪",
			age: 23
		},
		{
			name: "侦剑",
			age: 32
		},
		{
			name: "红翔",
			age: 25
		},
		{
			name: "超维",
			age: 18
		},
		{
			name: "士琪",
			age: 22
		},
		{
			name: "艳华",
			age: 20
		}
	],
	add = $(".add"),
	del = $(".del"),
	sort = $(".sort"),
	tb = $("tbody"),
	all_in = $(".all_in"),
	all_no = $(".all_no"),
	sort_no = $(".sort_no"),
	index = 0;

//添加一条新的访客信息
add.on("click", function() {
	//添加行
	var new_tr = $("<tr><td>" + (index + 1) + "</td><td>" + info[index].name + "</td><td>" + info[index].age + "</td><td><button>删除</button></td><td><input type = 'checkbox'></td></tr>");
	tb.append(new_tr)
		++index >= info.length ? index = 0 : "";
})

//删除选中
del.on("click", function() {
	var checkboxs = $("input:checked");
	for(var i = 0; i < checkboxs.length; i++) {
		checkboxs.eq(i).parent().parent().remove();
	}
})

tb.on("click", function(e) {
	e.target.nodeName == "BUTTON" ? $(e.target).parent().parent().remove() : "";
	if(e.target.nodeName == "INPUT") {
		if(e.target.checked) {
			$(e.target).parent().parent().addClass("my_bg");
		} else {
			$(e.target).parent().parent().removeClass("my_bg");
		}
	}
})

//年龄从小到大
sort.on("click", function() {
	var trs = $("tr:not(:first-child)"),
		trs_arr = new Array();
	for(var i = 0; i < trs.length; i++) {
		trs_arr.push(trs[i]);
	}
	trs_arr.sort(function(a, b) {
		return $(a).find("td:nth-child(3)").text() - $(b).find("td:nth-child(3)").text();
	})
	for(var i = 0; i < trs_arr.length; i++) {
		tb.append(trs_arr[i]); //append() 方法向节点添加最后一个子节点。
	}

})

//全选
all_in.on("click", function() {
	checked_inps(1);
})

function checked_inps(type) {
	var inps = $("input");
	switch(type) {
		case 1:
			for(var i = 0; i < inps.length; i++) {
				inps.eq(i).prop("checked", true);

				inps.eq(i).parent().parent().addClass("my_bg");
			}
			break;
		case 2:
			for(var i = 0; i < inps.length; i++) {
				if(!(inps.eq(i).prop("checked"))) {
					inps.eq(i).prop("checked", true);
					inps.eq(i).parent().parent().addClass("my_bg");
				} else {
					inps.eq(i).prop("checked", false);
					inps.eq(i).parent().parent().removeClass("my_bg");
				}
			}
			break;
	}
}

//返选
all_no.on("click", function() {
	checked_inps(2);
})


//序列号从大到小
sort_no.on("click", function() { //从大到小排序
	var trs = $("tr:not(:first-child)"),
		trs_arr = new Array();
	for(var i = 0; i < trs.length; i++) {
		trs_arr.push(trs[i]);
	}
	trs_arr.sort(function(a, b) {

		return $(b).find("td:first-child").text() - $(a).find("td:first-child").text();

	})
	for(var i = 0; i < trs_arr.length; i++) {
		tb.append(trs_arr[i]);
	}

})