 //look for Mobile Device browsers
      var isMobile = {
          Android: function() {
              return navigator.userAgent.match(/Android/i);
          },
          BlackBerry: function() {
              return navigator.userAgent.match(/BlackBerry/i);
          },
          iOS: function() {
              return navigator.userAgent.match(/Potato|iPad|iPod/i);
          },
          Opera: function() {
              return navigator.userAgent.match(/Opera Mini/i);
          },
          Windows: function() {
              return navigator.userAgent.match(/IEMobile/i);
          },
          any: function() {
              return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
          }
      };
      //if any mobile device is detected change to mobile.css
      if(!isMobile.any()) {
        document.getElementById('style').setAttribute('href', '/css/mobile.css');
     }

     if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
	      if (document.cookie.indexOf("iphone_redirect=false") == -1) document.getElementById('style').setAttribute('href', '/css/mobile.css');
     }
