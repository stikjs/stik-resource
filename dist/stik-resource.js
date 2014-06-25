// Stik-resource - Version: 0.1.0 | From: 25-6-2014
(function( stik, vej ){
  stik.boundary({
    as: "$resource",
    from: "controller",
    to: vej.resource
  });
})( window.stik, window.vej );
