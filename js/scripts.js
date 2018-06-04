$(document).ready(function(){
  $("#grocery-list").submit(function(event){
    event.preventDefault();

    var groceries = ["grocery1", "grocery2"];
    var count = 1;
    groceries.forEach(function(grocery){
      groceries[count-1] = $("input#item" + count).val();
      count += 1;
    });

    groceries.sort();

    groceries.map(function(grocery) {
      $("#sorted-list").append("<li>" + grocery.toUpperCase() + "</li>");
    });

    $("#grocery-list").hide();
  });

});
