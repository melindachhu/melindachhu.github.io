
var lastName = ["Boelke", "Chen", "Chhu", "Espinoza", "Garcia",'Gilliams','Hamric', 'Hansen','Harrison', 'Lacambra', 'Le','Liang','Lichtenstein','Lopez', 'Massais', 'McKee', 'Monte', 'Osher', 'Perez', 'Gonzalez', 'Pinto',  'Restrepo', 'Sanchez', 'Soronellas', 'Thomson', 'Wenglarski', 'Wexelman', 'Zientek'];
var firstName= ['John', 'Mandi', 'Caroline', 'Alexa', 'Nathan', 'Emerick', 'Caroline', 'Kristen', 'Danielle', 'Aaron', 'Nathaniel', 'Dang', 'Chengbo', 'Tipton', 'Mary', 'Alyssa', 'Brendan', 'Erika', 'Levana', 'Luis', 'Joshua', 'Paula', 'Celine', 'Steven', 'Sarah', 'Ariana', 'Zoe', 'Caterina'];

function memberList(){
    var table = document.getElementById("membersTable");
    console.log(table);
    
    console.log(table.childNodes);
    console.log(table.rows[0]);
    for(var i = 0; i < 9; i++)
    {
        row = table.rows[i];
        for(var j =0; j<3; j++)
        {
            cell = row.cells[j];
            console.log(cell);
            cell = "<td>"+ firstName[i*3+j] + " " + lastName[i*3+j] + "</td>";
            console.log(cell);
        }
}
return table;
    /*
    for (var i = 0, cell; cell = table.cells[i]; i++) {
        //iterate through cells
        //cells would be accessed using the "cell" variable assigned in the for loop
        console.log(i);
        cell = firstName[i];
   }
    /*
    for (var i = 0, row; row = table.rows[i]; i++) {
   //iterate through rows
   //rows would be accessed using the "row" variable assigned in the for loop
   for (var j = 0, col; col = row.cells[j]; j++) {
       col[j].innerHTML = (firstName[i*3 + j] + " " + lastName[i*3 + j]);
     //iterate through columns
     //columns would be accessed using the "col" variable assigned in the for loop
   }  
}*/
}