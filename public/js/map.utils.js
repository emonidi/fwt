var MapUtils = function () {
    this.accessToken = "pk.eyJ1IjoiZW1vbmlkaSIsImEiOiJjajdqd3pvOHYwaThqMzJxbjYyam1lanI4In0.V_4P8bJqzHxM2W9APpkf1w";
    this.geocode = function (placeName) {
        return   $.getJSON('https://api.mapbox.com/geocoding/v5/mapbox.places/'+placeName+'.json?access_token='+this.accessToken)
    
    }

}
document.addEventListener('DOMContentLoaded',function(){
    let mapUtils = new MapUtils();


    $('input[data-city]').blur((ev)=>{
        mapUtils.geocode(ev.target.value).then(
            res=>{
                const place = res.features
                .filter(item=>item.id.indexOf('place') > -1)[0];
                console.log(place.geometry.coordinates[0])
                $('input[name="lng"]').attr('value',place.geometry.coordinates[0])
                $('input[name="lat"]').attr('value',place.geometry.coordinates[1])

                if($('#map')){
                    $('#map').css('height',$('#map').parent().height())
                    mapboxgl.accessToken = mapUtils.accessToken;
                    const map = new mapboxgl.Map({
                        container:'map',
                        style: 'mapbox://styles/mapbox/streets-v11',
                        center:[place.geometry.coordinates[0],place.geometry.coordinates[1]],
                        zoom:10
                    })
                }
            }
        )

        
    })
    if($("#map") && $('input[name="lng"]').val() !== '' && $('input[name="lat"]').val() !== '' ){
        $('#map').css('height',$('#map').parent().height())
        mapboxgl.accessToken = mapUtils.accessToken;
                    const map = new mapboxgl.Map({
                        container:'map',
                        style: 'mapbox://styles/mapbox/streets-v11',
                        center:[$('input[name="lng"]').val(),$('input[name="lat"]').val()],
                        zoom:10
                    })
    }
    
})