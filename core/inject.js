
function handleInputs(my_inputs) {
	var ps;
	var qz;
	var qm;
	var sy;
	
	for(var i = 0; i < my_inputs.length; i++) {
		el = my_inputs[i];
		if( el.id.indexOf("ps") != -1 ) {
			ps = el;
		} else if( el.id.indexOf("qz") != -1 ) {
			qz = el;
		} else if( el.id.indexOf("qm") != -1 ) {
			qm = el;
		} else if( el.id.indexOf("sy") != -1 ) {
			sy = el;
		}
	}
	var ret = new Array(ps,qz,qm,sy);
	return ret;
}

var ps_array = new Array();
var qz_array = new Array();
var qm_array = new Array();
var sy_array = new Array();

var tab = document.getElementById("frame_content").contentWindow.document.getElementById('DataGrid1');

	var k = 0;
for (var i = 0; i < tab.rows.length; i++) {
	if(tab.rows[i].className == "datelisthead") {
		continue;
	}
	var inputs = tab.rows[i].getElementsByClassName("text_nor");
	var target_inputs = handleInputs(inputs);
	
	if (ps_array.length > 0) {
		target_inputs[0].value = ps_array[k];//平时
	}
	if (qz_array.length > 0) {
		target_inputs[1].value = qz_array[k];//期中
	}
	if (qm_array.length > 0) {
		target_inputs[2].value = qm_array[k];//期末
	}
	if (sy_array > 0) {
		target_inputs[3].value = sy_array[k];//实验
	}
	
	k++;
}






