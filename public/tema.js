// Aplica el tema guardado (claro/oscuro) antes de pintar la página para evitar parpadeos.
// Se guarda en localStorage (almacenamiento técnico del navegador, no es una cookie).
(function () {
  try {
    var t = localStorage.getItem('tema');
    if (t === 'claro' || t === 'oscuro') {
      document.documentElement.dataset.theme = t === 'oscuro' ? 'dark' : 'light';
    }
  } catch (e) {}
})();
