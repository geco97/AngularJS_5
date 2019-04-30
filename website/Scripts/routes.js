app.config(function($routeProvider) {
    $routeProvider
    .when("/", { 
        templateUrl: "website/views/ColumnView.html",
        controller: "ColumnViewController" 
    })

    .when("/ColumnView", { 
        templateUrl: "website/views/ColumnView.html",
        controller: "ColumnViewController" 
    })

    .when("/ListView", { 
        templateUrl: "website/views/ListView.html",
        controller: "ListViewController" 
    })
})