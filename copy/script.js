var arr = [];
var id_arr = [];
function func()
{
	_.each(shop,function(val){
		var found = _.filter(pc,function(val1)
		{
			if(val.name==val1.name)
				arr.push({id:val1.id,name:val1.name,qty:val.qty});
		})
	})
	var output ="";
	
	_.each(arr,function(item){
		output+='<div><input type="checkbox" name = "checked1" id = "'+ item.id +'">id:'+ item.id + ' '+ '<br>' + 'name:'+item.name+'</div>';
	})

$('body').empty();
$('body').append(output);
$('body').append('<input type=button value="checkout" onclick="checkout()">');
var result = _.groupBy(arr,"name");
	console.log(result);
}


function checkout(){
	var output1 ="";
	var Total = 0;
	$('input[name="checked1"]:checked').each(function() {
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
$('body').append('<br>Total amount: '+ Total);
}