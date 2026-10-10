// script.js
// Universal JavaScript file for all pages of the website.
// Useage:  <script src="script.js" defer></script>  inside the  <head>  tag of the HTML file to connect this JavaScript to that individual page.


// Submits the contact form without navigating away from club site and clears form after successful submission
const form = document.getElementById('contact-form');
if (form instanceof HTMLFormElement) {
  const status = document.getElementById("contact-form-status");
  const submitBtn = form.querySelector('button[type="submit"]');

  if (status && submitBtn instanceof HTMLButtonElement) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

    // Unique Form ID is placed here. Necessary to forward submissions to the email recipient
      if (form.action.includes("REPLACE_WITH_YOUR_FORM_ID")) {
        status.textContent = "The contact form is not configured yet. Please contact us on Facebook.";
        return;
      }

      status.textContent = "";
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending…";

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: new FormData(form),
          headers: { Accept: "application/json" }
        });

        if (!response.ok) {
          status.textContent = "Your message could not be sent. Please try again or contact us on Facebook.";
          return;
        }

        form.reset();
        status.textContent = "Thanks for your message!";
      } catch {
        status.textContent = "We could not reach the form service. Check your connection and try again.";
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Message";
      }
    });
  } else {
    console.error("The contact form status message or submit button is missing.");
  }
}
