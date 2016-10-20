	
        var url = "http://appmcf.ayudapyme.es/GETALLREC";
        var contenido = document.getElementById('datos');
        var ajaxrec = new XMLHttpRequest();

      
        function ReciboDatos (){
                if (ajaxrec.readyState == 4 && ajaxrec.status == 200){
                    var datos = ajaxrec.responseText;

                    var Json = JSON.parse(datos);               
                    var numRecursos = Json.Recursos.length;                                

                    var HTML;
                    
                    for (var i=0; i < Json.Recursos.length;i++){

                        //Creo la variable que contiene el HTML
                        HTML = "";                    
                        HTML += '<div class="col-md-2 col-sm-6 portfolio-item">';
                        HTML += '<a href="#Recurso'+ Json.Recursos[i].Id +'" class="portfolio-link" data-toggle="modal">';
                        HTML += '<div class="portfolio-hover">';
                        HTML += '<div class="portfolio-hover-content">';
                        HTML += '<i class="fa fa-plus fa-3x"></i>';
                        HTML += '</div>';
                        HTML += '</div>';
                        HTML += '<img src="img/recurso/'+ Json.Recursos[i].Id + '/main.jpg" class="img-responsive" alt="">';
                        HTML += '</a>';
                        HTML += '<div class="portfolio-caption">';
                        HTML += '<h4>' + Json.Recursos[i].Nombre  + '</h4>';
                        HTML += '<p class="text-muted">¿Ambito?</p>';
                        HTML += '</div>';
                        HTML += '</div>';
                         
                      //  console.log(HTML);

                        document.getElementById('album').innerHTML += HTML;
                        
                    }                                    
              
//                    Relleno para el resto de asociaciones
//                    for (var i = Json.Recursos.length+1; i < 54 ;i++){
//
//                        //Creo la variable que contiene el HTML
//                        HTML = "";                    
//                        HTML += '    <div class="col-md-2 col-sm-6 portfolio-item">';
//                        HTML += '        <a href="#Recurso'+ Json.Recursos[0].Id +'" class="portfolio-link" data-toggle="modal">';
//                        HTML += '            <div class="portfolio-hover">';
//                        HTML += '                <div class="portfolio-hover-content">';
//                        HTML += '                    <i class="fa fa-plus fa-3x"></i>';
//                        HTML += '                </div>';
//                        HTML += '            </div>';
//                        HTML += '            <img src="img/recurso/'+ Json.Recursos[0].Id + '/main.jpg" class="img-responsive" alt="">';
//                        HTML += '        </a>';
//                        HTML += '        <div class="portfolio-caption">';
//                        HTML += '           <h4>' + Json.Recursos[0].Nombre  + '</h4>';
//                        HTML += '           <p class="text-muted">¿Ambito?</p>';
//                        HTML += '       </div>';
//                        HTML += '    </div>';                        
//
//                      //  console.log(HTML);
//
//                        document.getElementById('album').innerHTML += HTML;
//                        
//                    }

                }
        }
        ajaxrec.onreadystatechange = ReciboDatos;
        ajaxrec.open("GET",url);
     //   ajaxrec.setRequestHeader('Content-type', 'text/json; charset=UTF-8')
        ajaxrec.send();

    
           

           
           
           
           
           
      
