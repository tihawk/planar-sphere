

module.exports.getInfo = function(){
  
  var OSName="Unknown OS";
  if (this.navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
  if (this.navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
  if (this.navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
  if (this.navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";
  
  var 
  
  return {
    "Operating System": OSName
  };
  
}