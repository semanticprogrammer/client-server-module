var clientModule = (function () {
   var self = {};
   self.description = function() {
      return "This is unified module that can be used for both client and server!";
   }
   if (typeof module !== "undefined") {
      module.exports = self; 
   }
   return self;
}());