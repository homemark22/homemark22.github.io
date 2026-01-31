document.addEventListener("DOMContentLoaded", () => {
  const iframe = document.getElementById("adIframe");

  // put your REAL iframe URL here (Base64 encoded)
  const encodedSrc = "aHR0cHM6Ly9leGFtcGxlLmNvbQ==";

  iframe.src = atob(encodedSrc);
});
