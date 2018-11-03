console.log('index');

AFRAME.registerComponent('make-request', {
  schema: {
    method: { type: 'string', default: 'GET' },
    url: { type: 'string' },
    throttle: { type: 'number', default: 10000 },
  },
  init: function () {
    this.clicked = false;

    this.el.addEventListener('click', () => {
      if (!this.clicked) {
        // Prevent further clicks for now
        this.clicked = true;

        // Do something
        console.log(this.data.method, this.data.url);

        // Allow clicks after a short timeout
        setTimeout(() => {
          console.log('resetting clicked status for', this.el.id);
          this.clicked = false;
        }, this.data.throttle);
      }
    });
  },
});
