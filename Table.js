var sum=0;

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";

}


function add_row()
{
 var new_row1=document.getElementById("new_row1").value;
 var new_row2=document.getElementById("new_row2").value;
 var new_row3=document.getElementById("new_row3").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_row1+"</td><td id='country_row"+table_len+"'>"+new_row2+"</td><td id='age_row"+table_len+"'>"+new_row3+"</td><td> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+");once()'></td></tr>";

 document.getElementById("new_row1").value="";
 document.getElementById("new_row2").value="";
 document.getElementById("new_row3").value="";
 
}

const once=()=>{
    // sum=0;
    var table = document.getElementById("data_table") ;sumval=0;
            
            for(var i = 1; i < table.rows.length-1; i++)
            {
                sumval = sumval + parseInt(table.rows[i].cells[2].innerHTML);
            }
            
            document.getElementById("val").innerHTML = "Sum Value = " + sumval;
            console.log(sumval);
}