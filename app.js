Vue.component('plan', {
  template: '#plan-template',
  props: {
    name: {
      type: String,
      required: true
    }
  }
});

Vue.component('click-counter', {
  template: '#click-counter-template',
  data() {
    return {
      count: 0
    };
  }
});

new Vue({
  el: '#app',
  data: {
    plans: ['the curious', 'the single', 'the addict']
  }
});
