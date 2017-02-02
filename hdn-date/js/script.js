function main(obj){
  var fecha = validafecha(obj);

  if(fecha) {
    backtothefuture(fecha);
  } else {
    alert("Error");
  }
}

function validafecha(objform){
  var month = objform.selectmonth.value;
  var year = parseInt(objform.year.value);
  var errorfecha = false;

  if (year>=1900 && year<=2100) {
    var strdate = ""+year+"-"+month+"-01";
    var d = new Date(strdate);
    return d;
  } else {
    return errorfecha;
  }
}

function backtothefuture(dat){
  var diasemana= new Array(7);
  diasemana[0] = "Domingo";
  diasemana[1] = "Lunes";
  diasemana[2] = "Martes";
  diasemana[3] = "Miercoles";
  diasemana[4] = "Jueves";
  diasemana[5] = "Viernes";
  diasemana[6] = "Sábado";

  var nombremes= new Array(12);
  nombremes[0] = "Enero";
  nombremes[1] = "Febrero";
  nombremes[2] = "Marzo";
  nombremes[3] = "Abril";
  nombremes[4] = "Mayo";
  nombremes[5] = "Junio";
  nombremes[6] = "Julio";
  nombremes[7] = "Agosto";
  nombremes[8] = "Septiembre";
  nombremes[9] = "Octubre";
  nombremes[10] = "Noviembre";
  nombremes[11] = "Diciembre";

  var diasmes = [];
  var mesactual = dat.getMonth();
  while (dat.getMonth() === mesactual) {
    diasmes.push(new Date(dat));
    dat.setDate(dat.getDate() + 1);
  }
  dat.setDate(1);
  dat.setMonth(mesactual);
  var numdiasmes = diasmes.length;
  var ini = 0;

  var titulo = ""+nombremes[mesactual]+" de "+dat.getFullYear();

  var cuerpotabla = "<tr>";
  
  switch(dat.getDay()){
    case 0: // Domingo
      cuerpotabla+="<td></td><td></td><td></td><td></td><td></td><td></td><td>1</td></tr><tr>";
      ini = 2;
      break;
    case 1: // Lunes
      cuerpotabla+="<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr><tr>";
      ini = 8;
      break;
    case 2:
      cuerpotabla+="<td></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr><tr>";
      ini = 7;
      break;
    case 3:
      cuerpotabla+="<td></td><td></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr><tr>";
      ini = 6;
      break;
    case 4:
      cuerpotabla+="<td></td><td></td><td></td><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr>";
      ini = 5;
      break;
    case 5:
      cuerpotabla+="<td></td><td></td><td></td><td></td><td>1</td><td>2</td><td>3</td></tr><tr>";
      ini = 4;
      break;
    case 6:
      cuerpotabla+="<td></td><td></td><td></td><td></td><td></td><td>1</td><td>2</td></tr><tr>";
      ini = 3;
      break;
  };

  diacounter=0;
  for (var i = ini; i <= numdiasmes; i++) {
    if(diacounter<=6){
      cuerpotabla += "<td>"+i+"</td>";
    } else {
      diacounter=0;
      cuerpotabla += "</tr><tr><td>"+i+"</td>";
    }
    diacounter++;
  };
  cuerpotabla += "</tr>";



  document.getElementById("titulo").innerHTML = titulo;
  document.getElementById("cuerpotabla").innerHTML = cuerpotabla;
  document.getElementById("tabla").style.display = "table";
}
