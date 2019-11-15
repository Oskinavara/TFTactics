export default {
  bind: function(el, binding) {
    el.style.height = binding.value + 'px'
    el.style.width = binding.value + 'px'
  }
}