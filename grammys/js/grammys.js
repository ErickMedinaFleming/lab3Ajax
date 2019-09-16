$.ajax({
	url : 'https://erickmedinafleming.github.io/lab3Ajax/grammys/data/grammys.json',
	type : 'GET',
	dataType : 'json',
	success : function(data) {

		let newHtml = ''

		$(data).find('fields').each(function() {
			newHtml += `
				<option value= "${$(this).attr('id')}">
					${$(this).attr('field')}
				</option>
				`
		})
		$('#category_types').append(newHtml)
	},
	error : function(errorMsg) {
		console.log(errorMsg)
	}
})