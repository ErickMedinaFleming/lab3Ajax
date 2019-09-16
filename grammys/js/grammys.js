$.ajax({
	url : 'https://erickmedinafleming.github.io/lab3Ajax/grammys/data/grammys.json',
	type : 'GET',
	dataType : 'json',
	success : function(data) {

		let newHtml = ''

		for(let i = 0; i < data.length; i++) {
			newHtml += `
				<option value="${data[i].field_id}">
					${data[i].field}
				</option>
				`
		}
		$('#category_types').append(newHtml)
		loadDatos()
	},
	error : function(errorMsg) {
		console.log("NOTLOAD")
	}
})

function loadDatos(){
	url : 'https://erickmedinafleming.github.io/lab3Ajax/grammys/data/grammys.json',
	type : 'GET',
	dataType : 'json',
	success : function(data) {
		
	}
}