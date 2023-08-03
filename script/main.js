let input = document.getElementById('input');
let result = document.getElementById('result');
let inputType = document.getElementById('inputType');
let resultType = document.getElementById('resultType');


input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);


let optionFrom = inputType.value;
let optionTo = resultType.value;


function myResult(){


	let optionFrom = inputType.value;
	let optionTo = resultType.value;


	if(optionFrom === "meter" && optionTo==="kilometer"){
		
		result.value = Number(input.value) * 0.001;
	}else if(optionFrom === "meter" && optionTo==="Centimeter"){

		
		result.value = Number(input.value) * 100;

	}else if(optionFrom === "meter" && optionTo==="millimetre"){

		
		result.value = Number(input.value) * 1000;

	}
    else if (optionFrom === "meter" && optionTo==="meter") {
		
		alert("Enter another Value")
	}
   



	if(optionFrom === "kilometer" && optionTo==="meter"){
		
		result.value = Number(input.value) * 1000;
	}else if(optionFrom === "kilometer" && optionTo==="Centimeter"){
		
		result.value = Number(input.value) * 100000;
	}else if(optionFrom === "kilometer" && optionTo==="millimetre"){

		
		result.value = Number(input.value) * 1000000;
    }   
    else if(optionFrom === "kilometer" && optionTo==="kilometer"){
		
        alert("Enter another Value")
	}



	if(optionFrom === "Centimeter" && optionTo==="kilometer"){
		
		result.value = Number(input.value) / 1000000;
	}else if(optionFrom === "Centimeter" && optionTo==="meter"){
		
		result.value = Number(input.value) / 100;
	}
    else if(optionFrom === "Centimeter" && optionTo==="millimetre"){

		
		result.value = Number(input.value) * 10;

    }else if(optionFrom === "Centimeter" && optionTo==="Centimeter"){
		
		alert("Enter another Value")
	}
	

	if(optionFrom === "millimetre" && optionTo==="kilometer"){
		
		result.value = Number(input.value) / 1000000;
	}else if(optionFrom === "millimetre" && optionTo==="meter"){
		
		result.value = Number(input.value) / 1000;
	}
    else if(optionFrom === "millimetre" && optionTo==="Centimeter"){

		
		result.value = Number(input.value) / 10;

    }else if(optionFrom === "millimetre" && optionTo==="millimetre"){
		
		alert("Enter another Value")
	}
	




}