app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95,
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95,
    },
    {
      name:'Bruschetta',
      description:'Grilled bread garlic, tomatoes, olive oil.',
      price:4.95,
    },
  ];

  $scope.mains = [
    {
      name:'SEAFOOD PLATE',
      desciption:'of grilled salmon, garlic prawns, salt and pepper squid, chilli mussels, beer battered soft shell crab and mesclun salad.',
      price:28.95
    },
    {
      name:'CHILLI PRAWNS AND BASIL LINGUINI',
      description:'with garlic and lime juice, tossed with olive oil, roasted tomato concasse and fresh basil leaves.',
      price:25.95
    },
    {
      name:'LOIN OF LAMB',
      description:'with wilted baby spinach, maple glazed pommes boulangere and thyme jus.',
      price:27.95
    }
  ] ;
  
  $scope.extras = [
    {
      name:'BELGIAN CHOCOLATE GATEAU',
      description:'with pineapple and coconut candy.',
      price:7.45
    },
    {
      name:'WARM STICKY DATE PUDDING',
      description:'with butterscotch and French vanilla ice cream.',
      price:7.45
    },
    {
      name:'FOURME DAMBERT',
      description:'mild blue cheese, creamy texture and delicate bouquet.',
      price:8.45
    }
  ];
  
}]);