/* ScoolManager — site vitrine : interactions légères, sans dépendance */
(function () {
  'use strict';

  // ── Année du footer ───────────────────────────────────────────
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // ── Nav : fond au scroll ──────────────────────────────────────
  var nav = document.getElementById('nav');
  function onScroll() {
    if (window.scrollY > 30) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ── Menu mobile ───────────────────────────────────────────────
  var burger = document.getElementById('burger');
  var links = document.getElementById('navLinks');
  if (burger && links) {
    burger.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // ── Animations au défilement ───────────────────────────────────
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  // ── Formulaire de contact → ouvre le client mail (statique) ────
  // NOTE : site statique. Le formulaire compose un e-mail via mailto.
  // Pour une réception automatique, brancher un service (Formspree, etc.)
  // en remplaçant le bloc ci-dessous.
  var CONTACT_EMAIL = 'contact@debacs.cm'; // ← à remplacer par votre e-mail
  var form = document.getElementById('contactForm');
  var note = document.getElementById('formNote');
  if (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var name = (document.getElementById('name').value || '').trim();
      var school = (document.getElementById('school').value || '').trim();
      var email = (document.getElementById('email').value || '').trim();
      var message = (document.getElementById('message').value || '').trim();
      if (!name || !email || !message) {
        note.textContent = 'Merci de remplir les champs obligatoires.';
        note.className = 'field__note err';
        return;
      }
      var subject = 'Demande d\'information — ScoolManager (' + name + ')';
      var body =
        'Nom : ' + name + '\n' +
        'Établissement : ' + school + '\n' +
        'E-mail : ' + email + '\n\n' +
        'Message :\n' + message + '\n';
      window.location.href = 'mailto:' + CONTACT_EMAIL +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);
      note.textContent = 'Votre logiciel de messagerie va s\'ouvrir pour envoyer le message…';
      note.className = 'field__note ok';
      form.reset();
    });
  }
})();
