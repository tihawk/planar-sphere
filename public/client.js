// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  console.log('hello world :o');
  
  function whoAmI(){
    var OSName="Unknown OS";
    if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
    if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
    if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
  
    if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";
    
    return {
      "Language": navigator.language,
      "Operating System": OSName
    };
  };

  $('form').submit(function(event) {
    event.preventDefault();
    var info = whoAmI();
    $('#dreams').html('');
    $.get(('/whoami'), function(res) {   
      $('#dreams').append("<li>" + "IP Address" + ": " + res + "</li>");
      for(let key in info)
        {
          $('#dreams').append("<li>" + key + ": " + info[key] + "</li>");
        }
    });
  });

});
