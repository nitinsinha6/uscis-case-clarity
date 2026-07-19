# Case Clarity — GitHub Pages website

A static landing website for the USCIS Case Monitor Chrome extension.

## Included pages

- `index.html` — landing page, features, privacy summary, pricing, and FAQ
- `privacy.html` — starter privacy policy
- `terms.html` — starter terms of use
- `support.html` — support and contribution page
- `404.html` — GitHub Pages not-found page
- `styles.css` — responsive styles
- `config.js` — links and contact information to customize
- `script.js` — menu and link configuration

## Customize before publishing

Open `config.js` and replace:

```js
window.SITE_CONFIG = {
  extensionUrl: "YOUR_CHROME_WEB_STORE_URL",
  donationUrl: "YOUR_STRIPE_KOFI_OR_BUYMEACOFFEE_URL",
  contactEmail: "YOUR_SUPPORT_EMAIL",
  productName: "Case Clarity"
};
```

Also review and edit the privacy policy and terms. The included text is a starter,
not legal advice.

## Publish with GitHub Pages

### Option A: Create a new repository

1. Create a GitHub repository, for example `case-clarity-site`.
2. Upload all files from this folder to the repository root.
3. Commit and push the files.
4. Open **Settings → Pages** in the repository.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch and `/ (root)` folder.
7. Save.
8. GitHub will display the public `github.io` URL after deployment.

### Option B: Use the special profile repository

For a root site such as `https://yourname.github.io`, create a repository named:

```text
yourname.github.io
```

Upload the files to that repository and enable GitHub Pages.

## Local preview

From the website folder:

```bash
python -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## Payments and subscriptions

GitHub Pages is static hosting. It cannot safely:

- store Stripe secret keys
- validate subscription webhooks
- maintain secure user licenses
- protect paid-only extension features

For optional support, use an external hosted link such as:

- Stripe Payment Link
- Ko-fi
- Buy Me a Coffee
- GitHub Sponsors

For paid subscriptions, use a separate backend service such as Cloudflare Workers,
Firebase, Supabase, or another server platform.

## Recommended first release

Keep the extension free and use the **Support Development** button for optional
contributions. Add subscription licensing only after the extension has active users
and the backend is ready.

## Important

- Do not imply USCIS or DHS endorsement.
- Do not use official government seals or branding.
- Do not collect USCIS passwords.
- Do not ask users to email full case API responses.
- Review the privacy policy and terms with qualified counsel before a commercial launch.
