

        function initialize() {
          var marcadores = [
            ['Hostipal', 40.287333, -3.815184],
            ['Parque Norte', 40.3028331,-3.8074487],
            ['Centro comercial', 40.302822, -3.833978]
          ];
          var map = new google.maps.Map(document.getElementById('gmap'), {
            zoom: 14,
            center: new google.maps.LatLng(40.2937601,-3.8129147),
            mapTypeId: google.maps.MapTypeId.ROADMAP
          });
             map.setOptions({ minZoom: 14, maxZoom: 18 });
          var infowindow = new google.maps.InfoWindow();
          var marker, i;
          for (i = 0; i < marcadores.length; i++) {  
            marker = new google.maps.Marker({
              position: new google.maps.LatLng(marcadores[i][1], marcadores[i][2]),
              map: map
            });
            google.maps.event.addListener(marker, 'click', (function(marker, i) {
              return function() {
                infowindow.setContent(marcadores[i][0]);
                infowindow.open(map, marker);
              }
            })(marker, i));
          }
        }


    

    google.maps.event.addDomListener(window, 'load', initialize);



