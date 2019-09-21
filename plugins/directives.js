import Vue from 'vue'

Vue.directive('size', function(el, binding) {
  el.style.height = binding.value + 'px'
  el.style.width = binding.value + 'px'
})
