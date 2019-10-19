function ajax_get(url, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        console.log('responseText:' + xmlhttp.responseText);
        try {
          var data = JSON.parse(xmlhttp.responseText);
        } catch (err) {
          console.log(err.message + " in " + xmlhttp.responseText);
          return;
        }
        callback(data);
      }
    };
  
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  }


 
    ajax_get('https://api.thecatapi.com/v1/images/search?size=full&limit=30', function(data) {
      
        data.forEach(element => {
            
          var html = `<div class="gallery">
      
          <img src="${element.url}" alt="Cat image"  >
     
      <div class="desc">${element.id}</div>
  </div>`;


        document.getElementById("main").innerHTML += html;
        });
      
    });



 var form = document.getElementById('myform');
 form.submit(false);