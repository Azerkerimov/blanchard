
     $( function() {
      $( "#accordion" ).accordion({
        classes: {
          "ui-accordion-header-active": "my__accordion-header-active",
          "ui-accordion-header-collapsed": "my__accordion-header-collapsed",
          "ui-accordion-content": "my__accordion-content",
          "ui-accordion-header-icon": "my__accordion-icon",
          ".ui-accordion": "my__accordion-header"
        },
        collapsible: true,
        heightStyle: "content",
        icons: false,
      });
    } );

