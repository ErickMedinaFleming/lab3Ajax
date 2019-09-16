$.ajax({
	url : 'https://erickmedinafleming.github.io/lab3Ajax/grammys/data/grammys.json',
	type : 'GET',
	dataType : 'json',
	success : function(data) {

		let newHtml = ''

		for(let i = 0; i < data.fields.length ; i++) {
			newHtml += `<option value="${data.fields[i].field_id}">${data.fields[i].field}</option>`
		}
		$('#category_types').append(newHtml)
		//loadDatos()
	},
	error : function(errorMsg) {
		console.log("NOT LOADING")
	}
})
/*
function loadDatos(){
	url : 'https://erickmedinafleming.github.io/lab3Ajax/grammys/data/grammys.json',
	type : 'GET',
	dataType : 'json',
	success : function(data) {
		$('#category_types').on('change',function(event){
			let id = $(this).val()
			
			for(let i = 0; i < data.length; i++) {
				if ( id == data[i].id ) {
					$('#nominees_section').val(data[i].category_name)
				}
			}
		})
	},
	error : function(errorMsg) {
		console.log("NOT LOADING")
	}
}*/