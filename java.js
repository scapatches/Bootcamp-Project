  //   "https://api.foursquare.com/v2/venues/search?query"
  // ?client_id=https://api.foursquare.com/v2/venues/search
  // ?client_id=MQJJDSUHY3ZEV2ITPA11W214AP2Y2IHDYTPDTVO5TT2IAGGM
  // &client_secret=QDN3W3DYJX2O1IIRZSVKGV3OA0MLHLL1BLEQU24Z2ML4CJCQ
  // &v=20130815
  // &ll=40.7,-74
  // &query=sushic
  
  var searches = [];
function saveSearch(){
  var search = $("#buttonStyle").val();
  searches.push(search);
  resetSearch();
}
function resetSearch(){
  $("#searchContainer").html("");
  $("#newSearchField").val("");
}
 
 $(document).ready(function(){
     
      $.getJSON( "https://api.foursquare.com/v2/venues/search?ll=40.7,-74&oauth_token=GCN1HJCZ3D4PM5TCHWC1PPTUQZ5IZGNB2HIHMZHE2CKP4EL0&v=20160708", function( data ) {
  var items = [];
  $.each( data.response.venues, function( index, val ) {
      
    items.push( "<li id='" + index + "'>" + data.response.venues[index].name + "</li>" );
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});

});

    

      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
// ", function( data ) {
  
//   var items = [];
//   $.each( data.response.venues, function( i, val ) {
//     items.push( "<li id='" + i + "'>" + data.response.venues[i].name + "</li>" );
//   });
//   $( "<ul/>", {
//     "class": "my-new-list",
//     html: items.join( "" )
//   }).appendTo( "body" );
//  });
//   });




