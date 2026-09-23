document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
      var expanded = nav.classList.contains("open");
      toggle.setAttribute("aria-expanded", expanded);
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
      });
    });
  }

  // Contact form -> mailto fallback (static site, no backend yet)
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var phone = form.phone.value.trim();
      var subject = form.subject.value.trim() || "Website Inquiry";
      var message = form.message.value.trim();

      var body = "Name: " + name + "%0D%0AEmail: " + email +
        (phone ? "%0D%0APhone: " + phone : "") +
        "%0D%0A%0D%0A" + encodeURIComponent(message);

      window.location.href = "mailto:hello@thecummingfaire.com?subject=" +
        encodeURIComponent(subject) + "&body=" + body;
    });
  }
});
