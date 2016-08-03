const mediator = (function mediatorHandler() {
  const subscribe = function subscribeHandler(channel, fn) {
    if (!mediator.channels[channel]) mediator.channels[channel] = [];
    mediator.channels[channel].push({
      context: this,
      callback: fn,
    });
    return this;
  };

  const publish = function publishHandler(channel) {
    if (!mediator.channels[channel]) return false;

    const args = Array.prototype.slice.call(arguments, 1);

    for (let i = 0, l = mediator.channels[channel].length; i < l; i++) {
      const subscription = mediator.channels[channel][i];
      subscription.callback.apply(subscription.context.args);
    }
    return this;
  };

  return {
    channels: {},
    publish,
    subscribe,
    installTo(obj) {
      obj.subscribe = subscribe;
      obj.publish = publish;
    },
  };
}());


$('#album').on('click', function clickHandler(e) {
  e.preventDefault();

  const albumId = $(this).id();
  mediator.publish('playAlbum', albumId);
});


const playAlbum = (id) => {
  mediator.publish('albumStartedPlaying', {
    songList: [],
    currentSong: 'Without You',
  });
};

const logAlbumPlayed = (id) => {
  // Log the album in the backend
};

const updateUserInterface = (album) => {
  // Update UI to reflect what's being played
};

// Mediator subscriptions
mediator.subscribe('playAlbum', playAlbum);
mediator.subscribe('playAlbum', logAlbumPlayed);
mediator.subscribe('albumStartedPlaying', updateUserInterface);
