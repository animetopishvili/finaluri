document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contactForm");
  var modal = document.getElementById("successModal");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var formData = new FormData(form);
    var data = {
      name: formData.get("name"),
      email: formData.get("email"),
      website: formData.get("website"),
      message: formData.get("message"),
    };

    fetch("https://borjomi.loremipsum.ge/api/send-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        if (result.status === 1) {
          showModal();
          form.reset();
        }
      })
      .catch(function () {
        var altData = {
          title: data.name,
          body: data.message,
          userId: 1,
        };

        fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(altData),
        })
          .then(function (response) {
            return response.json();
          })
          .then(function () {
            showModal();
            form.reset();
          });
      });
  });

  function showModal() {
    modal.classList.add("active");
  }
});

function closeModal() {
  document.getElementById("successModal").classList.remove("active");
}
