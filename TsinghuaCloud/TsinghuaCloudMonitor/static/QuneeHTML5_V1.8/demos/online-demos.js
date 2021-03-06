/**
* This file is part of Qunee for HTML5.
* Copyright (c) 2015 by qunee.com
**/
$(function () {
    var other_list = $("#other_list ul")[0];

    var demos = [
        {name: "拓扑图编辑器", url: "http://demo.qunee.com/editor/"},
        {name: "水文观测站", url: "http://demo.qunee.com/waterwsn/"},
        {name: "Google Map - Openlayers", url: "http://demo.qunee.com/map/map.html"},
        {name: "OpenStreetMap - Leaflet", url: "http://demo.qunee.com/map/mapByLeafLet.html"},
        {name: "Tree + Qunee - EasyUI", url: "http://demo.qunee.com/14-4-25/treeAndGraph.html"}
    ]

    demos.forEach(function (demo) {
        var li = document.createElement("li");
        li.innerHTML = '<a target="_blank" href="' + demo.url + '">' + demo.name + '</a>';
        other_list.appendChild(li);
    });
});