# Vesela Sekuloska — Portfolio Website

Minimal, responsive portfolio website built with plain HTML, CSS, and JavaScript. No build process needed.

## Open in Visual Studio Code
1. Extract the ZIP.
2. Open the `vesela-portfolio` folder in VS Code (`File → Open Folder`).
3. Open `index.html` with the **Live Server** VS Code extension, or open it in a browser.
4. Edit the files and save to see changes.

## Customize
- **Name, headings, About Me, project and contact text:** `index.html`
- **2026 Project 1:** replace the placeholder description in the Projects card and Project Spotlight section of `index.html`.
- **Old PDF portfolio:** replace `https://drive.google.com/` in the `id="archive-link"` anchor with your actual Google Drive *share link* for the PDF. Set the Google Drive file sharing permission to **Anyone with the link → Viewer** if you want visitors to be able to access it.
- **Colors / spacing / fonts:** `styles.css` (colors at the top in `:root`).
- **Mobile navigation:** `script.js`.

## Contact form — important
The form is configured with the third-party FormSubmit service (`https://formsubmit.co/veselasekuloska@gmail.com`). Once your website is published, the first submission should trigger a verification email to **veselasekuloska@gmail.com**. You must confirm it to activate delivery. Check your spam folder if necessary. The form requires an internet connection and an externally hosted site for normal public use.

The address is **not printed visibly on the webpage**, but it **is accessible in the HTML source / network requests**, because a static site cannot securely hide a form recipient. If you need the recipient truly secret, replace FormSubmit with a serverless contact API (e.g. Netlify Forms, a configured Formspree endpoint, or a custom serverless function) and keep the email in the server's environment variables.

Consider publishing a privacy notice if you collect visitor names/emails, and review the third-party form provider's privacy policy.

## Publish
You can host this static site on GitHub Pages, Netlify, Cloudflare Pages, or any static web host.
