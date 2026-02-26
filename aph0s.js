(async () => {
  try {
    // Fetch random quote from API
    const res = await fetch('api.quotable.io/random');

    if (!res.ok) {
      throw new Error('Failed to fetch quote');
    }

    const data = await res.json();

    // Find the container element
    const el = document.getElementById('aphorify-quote');

    if (!el) {
      console.error('Aphorify Widget Error: Element with id "aphorify-quote" not found');
      return;
    }

    // Inject HTML with quote, author, and backlink
    el.innerHTML = `
      <blockquote style="
        font-family: Georgia, 'Times New Roman', serif;
        font-style: italic;
        font-size: 18px;
        line-height: 1.6;
        color: #333;
        border-left: 4px solid #4F46E5;
        padding: 16px 20px;
        margin: 20px 0;
        background: #f9fafb;
        border-radius: 4px;
      ">
        <p style="margin: 0 0 12px 0; font-size: 18px;">
          "${data.quote}"
        </p>
        <footer style="
          font-style: normal;
          font-size: 14px;
          color: #6b7280;
          margin-top: 12px;
        ">
          — <strong style="color: #374151;">
            <a href="${data.authorUrl}"
               target="_blank"
               rel="noopener"
               style="color: #4F46E5; text-decoration: none;">
              ${data.author}
            </a>
          </strong>
          <br>
       
        </footer>
      </blockquote>
    `;

  } catch (error) {
    console.error('Aphorify Widget Error:', error);
    const el = document.getElementById('aphorify-quote');
    if (el) {
      el.innerHTML = `
        <p style="color: #ef4444; font-size: 14px;">
          Failed to load quote. Please try again later.
        </p>
      `;
    }
  }
})();
