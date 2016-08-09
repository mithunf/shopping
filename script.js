var arr = [];
var id_arr = [];

function func(){

			_.each(shop,function(val){
				var found = _.filter(pc, { name: val.name });
				arr = [].concat(arr, found);
			})

			var grouped = _.groupBy(arr,"name");
			console.log(grouped);

			var $results = $('#results');

			var key, i, j;
			for (key in grouped) {
						if ( ! grouped.hasOwnProperty(key) ) {
							continue;
						}

						$results.append('<h3>' + key + '</h3>');

						for(i = 0, j = grouped[key].length; i< j; i++) {
							$results.append(
								[
									'<div>',
										'<input type="checkbox" id=' + grouped[key][i].id + '>',
										'<label for=' + grouped[key][i].id + '>' + grouped[key][i].color + ' ' + grouped[key][i].name + '</label>',
									'</div>'
								].join('')
							);}
				}	

	$('body').append('<input type=button value="checkout" onclick="checkout()">');
}




function checkout(){
		var output1 ="";
		var Total = 0;

		$('input[type="checkbox"]:checked').each(function() {
   			console.log(this.id);
		   id_arr.push(this.id);
		   console.log(id_arr);
		});

	_.each(id_arr,function(id_val){
		_.each(pc,function(pc_val){
			_.each(shop,function(sl_val){
				if(id_val==pc_val.id && pc_val.name==sl_val.name)
				{
					output1+='<div><br>name: '+ pc_val.name + '<br>price: ' + pc_val.price + '<br>size: ' + pc_val.size + '<br>color: '+ pc_val.color +
					'<br>quantity: ' + sl_val.qty + '<br>Total: ' + (sl_val.qty*pc_val.price) + '</div>';
					Total+=sl_val.qty*pc_val.price;
				}
			})
				
		})
	})
$('body').append(output1);	
$('body').append('<br>Your total amount: '+ Total);
}