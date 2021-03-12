Vue.component('plan-picker', {
  template: '#plan-picker-template',
  data() {
    return {
      plans: ['the curious', 'the single', 'the addict']
    };
  }
});

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
  el: '#app'
});
