document.addEventListener("DOMContentLoaded",function(){
	var nut = document.querySelector('.nut');
	var nenden = document.querySelector('.nenden');
	var menutrai = document.querySelector('.menutrai');
	var nentrang = document.querySelector('.nentrang');
	var nut1 = document.querySelector('.nut1');
	var khung = document.querySelector('.pusheffect');

	// console.log(nut1);
	//hiệu ứng khi click vào nút PUSH
	nut.onclick = function(){
		nenden.classList.add("ra");
		menutrai.classList.add("tutraisang");
		nentrang.classList.add("sangphai");
	}
	//trả về như cũ khi nhấn vào nền đen
	nenden.onclick = function(){
		nenden.classList.remove("ra");
		menutrai.classList.remove("tutraisang");
		nentrang.classList.remove("sangphai");
				nentrang.classList.remove("opendoor");
		khung.classList.remove("xamlai");
	}
	nut1.onclick = function(){
		menutrai.classList.add("tutraisang");
		nenden.classList.add("ra");
		nentrang.classList.add("opendoor");
		khung.classList.add("xamlai");
	}
	// nenden.onclick = function(){
	// 	menutrai.classList.remove("tutraisang");
	// 	nenden.classList.remove("ra");
	// 	nentrang.classList.remove("opendoor");
	// 	khung.classList.remove("xamlai");
	// }

},false)