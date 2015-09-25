function op(val){
alert("!");
	var httpReq = new XMLHttpRequest();
	url = "./control.py?op=" +val+'&time=' +new Date();
	httpReq.open("GET",url,false);
	httpReq.send(null);
}


