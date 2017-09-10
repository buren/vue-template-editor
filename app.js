Vue.component('editable', {
  template: '<div contenteditable="true" @input="update"></div>',
  props: ['content'],
  mounted: function() {
    this.$el.innerText = this.content;
  },
  methods: {
    update: function(event) {
      this.$emit('update', event.target.innerText);
    }
  }
});

var templateApp = new Vue({
  el: '#template-app',
  data: {
    template: 'Enter template',
    compiled_template: '',
    input_data: '{ "username": "buren", "login_count": "3" }',
    compiled_data: {},
    total_length: 0,
    valid_data_keys: ''
  },
  methods: {
    input_data_update: function(input_data) {
      this.input_data = input_data;
      this.compiled_data = JSON.parse(input_data.trim());
      this.valid_data_keys = Object.keys(this.compiled_data).map(function(o) {
        return '{' + o + '}';
      }).join(', ');
      this.compile();
    },
    template_update: function(text) {
      this.template = text;
      this.compile();
    },
    compile: function() {
      var replaceNewlinesWithBr = function(text) {
        return text.replace(/(?:\r\n|\r|\n)/g, '<br />');
      };

      var compiled = format(this.template, this.compiled_data);
      compiled = replaceNewlinesWithBr(compiled);
      this.compiled_template = compiled;
      this.total_length = this.compiled_template.length;
    }
  }
});

templateApp.input_data_update(templateApp.input_data);
