// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function () {
      if (this.length === 1) {
        this.playFirst(); 
      }
    });

    this.on('ended', function () {
      this.removeEnded();
    });

    this.on('dequeue', function (model) {
      this.remove(model);
    });
  },

  playFirst: function () {
    this.first().play();
  },

  removeEnded: function () {
    this.remove(this.first());
    if (this.length > 0) {
      this.playFirst();
    }
  }, 

});