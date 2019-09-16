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
		loadDatos()
	},
	error : function(errorMsg) {
		console.log("NOT LOADING")
	}
})

function loadDatos(){
	$.ajax({
		url : 'https://erickmedinafleming.github.io/lab3Ajax/grammys/data/grammys.json',
		type : 'GET',
		dataType : 'json',
		success : function(data) {
			$('#category_types').on('change',function(event){
				let id = $(this).val()
			
				$('#nominees_section').replaceWith(`<section id="nominees_section">
														<h2>${data.fields[id-1].field}</h2>
														<h4 class="description">${data.fields[id-1].description}</h4>
														<section id="categories">
														</section>
													</section>`)
				for(let i = 0; i < data.fields[id-1].categories.length; i++){
					$('#categories').append(`<h3>${data.fields[id-1].categories[i].category_name}</h3>
												<h4 class="description">${data.fields[id-1].categories[i].description}</h4>
												<ul>
													<label id="lista">
												</ul>
												<hr />`)				
					let lista = ''
					for(let j = 0; j < data.fields[id-1].categories[i].nominees.length; j++){
						if(j == data.fields[id-1].categories[i].winner_id-1){
							lista+= `<li><h4 class="winner">${data.fields[id-1].categories[i].nominees[j].nominee}</h4><span>WINNER!</span>
											<div class="artist">${data.fields[id-1].categories[i].nominees[j].artist}</div>
											<div class="info">${data.fields[id-1].categories[i].nominees[j].info}</div>
										</li>`
						}else{
							lista+= `<li><h4 class="nominee">${data.fields[id-1].categories[i].nominees[j].nominee}</h4>
											<div class="artist">${data.fields[id-1].categories[i].nominees[j].artist}</div>
											<div class="info">${data.fields[id-1].categories[i].nominees[j].info}</div>
										</li>`
						}
					}
					$('#lista').replaceWith(lista)
				}
			})
		},
		error : function(errorMsg) {
			console.log("NOT LOADING")
		}
	})
}