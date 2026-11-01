# Abdur Rahman Remon — Academic & Research Portfolio

A responsive React + TypeScript + Vite portfolio starter with an editorial botanical/scientific visual identity.

## 1. Run the website on your computer

Install **Node.js LTS** from https://nodejs.org/ if it is not already installed.

1. Extract this ZIP file.
2. Open the extracted `remon-research-portfolio` folder.
3. Open a terminal in that folder.
4. Run:

```bash
npm install
npm run dev
```

5. Open the local address printed in the terminal (usually `http://localhost:5173`).

To create the production build:

```bash
npm run build
```

The built website will be in the `dist` folder.

## 2. Publish free with Netlify

1. Create a GitHub repository named `remon-research-portfolio` (public is fine).
2. Upload the contents of this extracted folder to the repository. Upload the files and folders inside the project folder, not the ZIP itself.
3. Create a free account at https://www.netlify.com/.
4. In Netlify, choose **Add new site → Import an existing project**.
5. Connect GitHub and select `remon-research-portfolio`.
6. Netlify should detect Vite. Set:
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Deploy. Netlify will provide a free `*.netlify.app` address.

When you push later changes to GitHub, Netlify will automatically rebuild the site.

## 3. Personalize before public launch

Search in `src/App.tsx` and replace:
- `YOUR.EMAIL@example.com` with your professional email.
- `https://www.linkedin.com/` with your actual LinkedIn profile URL.
- Any project description that needs more precise wording based on your records.

Add your CV:
- Put your PDF in `public/`
- Name it `Remon_Academic_CV.pdf` or change the link in `src/App.tsx`.

Add photographs:
- Put optimized JPG/WebP images in `public/images/`.
- Then replace the visual placeholders in `src/App.tsx` with image elements pointing to those files.

Do not publish private contact information, passport details, or certificates containing sensitive personal data. Only publish certificates and research images you have permission to share.

## 4. Accuracy checklist

Before publishing:
- Verify exact project dates, supervisor names, methods and your role.
- Distinguish techniques you performed from those you assisted with or observed.
- Do not describe a manuscript as published unless it has actually been published.
- Add actual findings only when you can substantiate them.
- Check image permissions and remove identifiable people unless they have consented.

## 5. Useful links

- Node.js: https://nodejs.org/
- GitHub: https://github.com/
- Netlify: https://www.netlify.com/
- Netlify docs: https://docs.netlify.com/
