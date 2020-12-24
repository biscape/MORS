require('./bigint.min.js');
const Player = require('./api/player.js');
const WorldMapScaleHandler = require('./api/worldMapScaleHandler.js');
const Client = require('./api/client.js');

Java.perform(function() {
      var localPlayer = WorldMapScaleHandler.getLocalPlayer();
      var counter = 0;
      var idleCounter = 0;
      var idleThreshold = 1;
      function todo(args) {
          counter++;
          if (counter % 40 === 0) {
              if (localPlayer.getSequence() == 0){
                  idleCounter++;
              }else{
                  idleCounter = 0;
              }
              if (idleCounter > idleThreshold){
                  console.log('bubble(idle,$red)');
              }else{
                  console.log('bubble( ,$green)');
              }
          }
      }
      Client.onVmethod8288(todo);
});