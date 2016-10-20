for (var Id = 1; Id < 10 ; Id ++){

        console.log(Id);
        var url = " http://appmcf.ayudapyme.es/GETREC?Id="+ Id;
        
        var contenido = document.getElementById('datos');
        var ajax = new XMLHttpRequest();

        var urlActividad = "http://appmcf.ayudapyme.es/GETACT?Id="+ Id;
        var ajaxActividad = new XMLHttpRequest();
       
        function ReciboActividad (){

                if (ajaxActividad.readyState == 4 && ajaxActividad.status == 200){
                    
                    var datosActividad = ajaxActividad.responseText;
                    var JsonActividad = JSON.parse(datosActividad);  
                    
                    var numActividades = JsonActividad.Actividades.length;   
                    
                   
                    var HTML = "";
                    for (var i = 0; i < JsonActividad.Actividades.length ; i++){
                        
                        HTML += '<li>'+ JsonActividad.Actividades[i].Nombre +'</li>';
                         
                    }
                    var Act = "#Act"+ Id;
                    $('Act').html(HTML);
                }
        }
        

        function cargaActividades(Recurso){
            
            
            ajaxActividad.onreadystatechange = ReciboActividad;
            ajaxActividad.open("GET",urlActividad,false);
            ajaxActividad.send();
        }


        function ReciboDatos (){

                if (ajax.readyState == 4 && ajax.status == 200){
                    
                    var datos = ajax.responseText;
                    var Json = JSON.parse(datos);               
                  
                    
                    var urlMap = "http://maps.google.es/?q=";
                    urlMap += Json.Recurso.Lat +",";
                    urlMap += Json.Recurso.Lon;
                  
                  
                var HTML = ""; 
                    
                 
                HTML += '<div class="portfolio-modal modal fade" id="Recurso'+ Id + '" tabindex="-1" role="dialog" aria-hidden="true">';
                HTML += '<div class="modal-dialog">';
                HTML += '<div class="modal-content">';
                HTML += '<div class="close-modal" data-dismiss="modal">';
                HTML += '<div class="lr">';
                HTML += '<div class="rl">';
                HTML += '</div>';
                HTML += '</div>';
                HTML += '</div>';
                HTML += '<div class="container">';
                HTML += '<div class="row">';
                HTML += '<img id="Ant_'+ Id +'" src="img/flecha-izquierda.png" style="width:50px;float: left;padding-top: 250px;" />';
                HTML += '<img id="Sig_'+ Id +'" src="img/flecha-derecha.png" style="width:50px;float: right;padding-top: 250px;" />';
                HTML += '<div class="col-lg-8 col-lg-offset-2">';
                HTML += '<div class="modal-body">';
               
                HTML += '<h2>'+ Json.Recurso.Nombre + '</h2>';
                HTML += '<p class="item-intro text-muted">Blabla</p>';
                HTML += '<div id="DatosRecurso'+ Id +'"></div>';
                HTML += '<img class="img-responsive img-centered" src="img/recurso/'+ Id + '/main.jpg" alt="">';
                HTML += '<p id="Finalidad"></p>';
                HTML += '<ul id="Act"></ul>';
                HTML += '<button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i> Cerrar</button>';
                HTML += '</div>';
                HTML += '</div>';
                HTML += '</div>';
                HTML += '</div>';
                HTML += '</div>';
                HTML += '</div>';
                   
                HTML += '</div>';                    

                
                var  Info1 = '<div class="col-lg-6"><b>Email:</b> ' + Json.Recurso.Email + '<br><b>Horario:</b> ' + Json.Recurso.Horario + '</div>';    
                var  Info2 = '<div class="col-lg-6"><b>Web:</b> <a href="' + Json.Recurso.Web + '" target="_blank" >' + Json.Recurso.Web +'</a><br><b>Teléfono:</b> ' + Json.Recurso.Telefono + '</div>';  
                    
                    
                    $('#CargaPortfolio').append(HTML);
                    $('#DatosRecurso'+ Id).append(Info1);
                    $('#DatosRecurso'+ Id).append(Info2);
                    $('#DatosRecurso'+ Id).css('padding-bottom','50px');
                    $('#DatosRecurso'+ Id).append('<b><a href=' + urlMap + ' target ="_blank">Ver en google maps</a>');
                    console.log
                    //document.getElementById('DatosRecurso'+Id).innerHTML = "><b>Web:</b> " + Json.Recurso.Web +"<br><b>Telefono:</b> " + Json.Recurso.Telefono+"<br>
                    $('#Finalidad').html(Json.Recurso.Finalidad);
                    //cargaActividades(Id);
                    
                   /* var HTML = "", x = 0; 
                    
                    HTML += '<div class="col-lg-12 text-center">';
                    for (var i = 0; i<Json.Recurso.Imagenes ;i++){
                         x = i+1;
                        HTML += '<a data-fancybox-group="gallery" class="fancybox" rel="group" href="img/recurso/' + Id + '/galeria/' + x + '.jpg">';
                        HTML += '<img src="img/recurso/' + Id + '/thumb/' + x + '.jpg" alt="" /></a>';    
                    }
                    HTML += '</div>';*/

                   //document.getElementById('Galeria').innerHTML = HTML;

                    
                    //  Ejecutamos 
          
                  //  $('.fancybox').fancybox();
                    
        
                   
                
                }
             
        }

        ajax.onreadystatechange = ReciboDatos;
        ajax.open("GET",url,false);
        ajax.send();
}