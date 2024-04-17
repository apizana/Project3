var xmlhttp = new XMLHttpRequest();
var url = "http://127.0.0.1:5500/Resources/AlzheimersDB.Questions_Data_1stHalf.json";
xmlhttp.open("GET",url,true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        console.log(data)



    }

}

//This is JsonData.json
//{"date_population": [
// 		{
// 		  "date": "1941",
// 		  "population": 406760
// 		},{
// 		  "date": "1951",
// 		  "population": 778977
// 		},{
// 		  "date": "1961",
// 		  "population": 1207000
// 		}
// 	]
// }