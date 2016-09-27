document.write("<p>Tabliczka mnożenia</p>");
document.write("<table>");
for (var i = 1; i < 11; i++) {
   document.write("<tr><td>" + i + "</td>");
   for (var j = 1; j < 11; j++) {
      document.write("<td>" + i*j + "</td>");
   }
   document.write("</tr>");
}
document.write("</table>");