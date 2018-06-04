$(document).ready(function(){
  var initialArraySize = 2;
  $("button#add-item").click(function(){
    initialArraySize += 1;
    $("#shopping-list").append('<li><input id="item' + initialArraySize + '" class="form-control" type="text"></li>');
  });

  $("#grocery-list").submit(function(event){
    event.preventDefault();

    var groceries = new Array(initialArraySize);
    
    for (count = 1; count <= initialArraySize; count +=1 ){
      groceries[count-1] = $("input#item" + count).val();
    };

    groceries.sort();

    var upperCaseGroceries = groceries.map(function(grocery) {
      return grocery.toUpperCase();
    });

    upperCaseGroceries.forEach(function(grocery){
    $("#sorted-list").append("<li>" + grocery + "</li>");
    });

    $("#grocery-list").hide();
  });

});
