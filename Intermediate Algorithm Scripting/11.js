// Convert HTML Entities
function convertHTML(str) {
    let a = str.replace("&", "&amp;");
    let a2 = a.replace("<", "&lt;");
    let a3 = a2.replace(">", "&gt;");
    let a4 = a3.replace("\"", "&quot;");
    let a5 = a4.replace("\'", "&apos;");
    let a6 = a5.replace("<", "&lt;");
    let a7 = a6.replace("\"", "&quot;");
  
  
    return a7;
  }
  
  console.log(convertHTML("Dolce & Gabbana"));
  console.log(convertHTML("Hamburgers < Pizza < Tacos"));
  console.log(convertHTML("Sixty > twelve"));
  console.log(convertHTML('Stuff in "quotation marks"'));
  console.log(convertHTML("Schindler's List"));
  console.log(convertHTML("<>"));