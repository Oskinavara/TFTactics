import Vue from 'vue'

Vue.directive('big', function(el) {
  el.style.height = '55px'
  el.style.width = '55px'
})
