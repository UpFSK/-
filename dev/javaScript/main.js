ymaps.ready(init);
var myMap,
    myPlacemark;

function init(){
    myMap = new ymaps.Map("map", {
        center: [56.99189641, 40.97021473],
        zoom: 16,
        controls: ['smallMapDefaultSet'],
    });

    myMap.behaviors.disable([
        'drag',
        'scrollZoom'
    ])

    myPlacemark = new ymaps.Placemark([56.99321072, 40.97479289], {
        hintContent: 'Иваново'
    });

    myMap.geoObjects.add(myPlacemark);
}