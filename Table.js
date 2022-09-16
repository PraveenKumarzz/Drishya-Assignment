console.log("js imported");

var total = document.querySelectorAll('[data-total=price]');

// document.write(expenses.length);
let sum = 0;

for(let i=0 ; i<total.length ; i++) {
    sum = sum + parseInt(total[i].textContent);
}

// document.write(sum);

let tr = document.createElement('tr');
let td = document.createElement('td');
td.setAttribute('data-total', 'Total')
td.innerHTML = sum;
tr.appendChild(td);

let table = document.getElementsByTagName('table');

table[0].appendChild(tr);

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