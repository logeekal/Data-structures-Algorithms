/*
===============================================================================

Singleton Pattern

===============================================================================
*/
let singleton = (function(){
    function Logger(type){
      this.type = type;
      
      this.identify = function(){
        console.log(`I am ${this.type} logger`);
      }
    };
  
    let instance;
    
    return {
      getInstance: function(type){
      if(!instance){
        instance =  new Logger(type)
      }
      return instance;
    }  }
  })();
  
  let logger1 =  singleton.getInstance('first');
  let logger2 =  singleton.getInstance('second');


  logger1.identify() // 'I am first logger'

  logger2.identify() // 'I am first logger'
