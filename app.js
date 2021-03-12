const planComponent = {
  template: '#plan-template',
  props: {
    name: {
      type: String,
      required: true
    }
  }
};

const planPickerComponent = {
  template: '#plan-picker-template',
  components: {
    plan: planComponent
  },
  data() {
    return {
      plans: ['the curious', 'the single', 'the addict']
    };
  }
};

const clickCounterComponent = {
  template: '#click-counter-template',
  data() {
    return {
      count: 0
    };
  }
};

new Vue({
  el: '#app',
  components: {
    'plan-picker': planPickerComponent,
    'click-counter': clickCounterComponent
  }
});
