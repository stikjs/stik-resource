(function( stik, vej ){
  stik.boundary({
    as: "$resource",
    from: "controller",
    to: vej.resource
  });
})( window.stik, window.vej );
