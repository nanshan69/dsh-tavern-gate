// dsh-tavern-gate — 浏览器半边：左下角一个开关按钮（最小版，不加载酒馆本体）
window.__ModuleLoader__.load({
  id: 'dsh-tavern-gate',
  factory: function (require) {
    var module = { exports: {} }
    var exports = module.exports
    var KEY = 'dshm-tavern-enabled'

    function isOn() {
      try { return localStorage.getItem(KEY) === '1' } catch (e) { return false }
    }

    function render() {
      var old = document.getElementById('dsh-tavern-gate')
      if (old) old.remove()
      var b = document.createElement('button')
      b.id = 'dsh-tavern-gate'
      b.type = 'button'
      b.textContent = isOn() ? '酒馆：开' : '酒馆：关'
      b.title = '点击切换酒馆开关（酒馆本体尚未安装）'
      b.style.cssText = 'position:fixed;left:14px;bottom:14px;z-index:2147483647;padding:8px 12px;'
        + 'border-radius:999px;border:1px solid rgba(255,255,255,.22);background:rgba(18,20,26,.86);'
        + 'color:#fff;font:12px/1.2 system-ui,sans-serif;cursor:pointer;opacity:.85'
      b.addEventListener('click', function (ev) {
        ev.preventDefault()
        ev.stopPropagation()
        try { localStorage.setItem(KEY, isOn() ? '0' : '1') } catch (e) {}
        render()
      })
      document.body.appendChild(b)
    }

    function apply() {
      if (document.body) render()
      else document.addEventListener('DOMContentLoaded', render, { once: true })
    }

    exports.apply = apply
    exports.inject = []
    return module.exports
  }
});
