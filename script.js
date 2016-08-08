var arr = [];
function func()
{
	_.each(shop,function(val){
		var found = _.filter(pc,function(val1)
		{
			if(val.name==val1.name)
				arr.push({id:val1.id,name:val1.name,qty:val.qty});

				//document.write(val1.id + "<br>");
		})
	})

	console.log(arr[1].name);
}
