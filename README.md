# Sign-up page

## 📦 View Instructions

### 🔗 Live Demo

View the project live on GitHub Pages:  [https://haohan11.github.io/sign-up-page/](https://haohan11.github.io/sign-up-page/)

### 🖥️ Local Demo

1. Download or clone this repository.
2. Open `index.html` in any modern web browser (Chrome, Firefox, Edge, etc).

No installation or server is required.

---

## 🧱 Layout Approach

- **Custom CSS variables**: Colors, layout units are controlled via `:root` variables for maintainability and theming.
- **Flexbox alignment throughout**: Use Flexbox for consistent alignment and spacing.
- **Responsive container**: Uses `min/max-width` and media queries to adapt across devices, with padding using `clamp()` for fluid spacing.
- **Modular and semantic structure**: Sections like third-party login, email sign-up, and validation are grouped semantically and styled using utility-like classes.
- **Interactive form fields**: Input labels float above when focused or filled, creating a clean user experience without extra JS.
- **Error handling**: Invalid fields show red outlines and reveal an error message section using the `.submitted` class toggle.

## 📁 File Structure

The project files are organized as follows:

```
sign-up-page/
├── icon/
├── index.html
├── style.css
├── script.js
└── README.md
```

- Place all files in the same directory for easy local development.
- No build tools or dependencies are required.
- All assets are loaded directly from these files.

- `index.html`: the main HTML file containing the structure of the page.
- `style.css`: contains all the styling rules, using basic CSS and Flexbox for layout.
- `script.js`: handles basic interactivity such as form validations.


---

## 🤖 Assistance Using Copilot

GitHub Copilot was used to assist with:

- Suggesting variable names and consistent naming conventions
- Autocompleting repetitive CSS and JavaScript code patterns
- Generating drafts of the README content for documentation

All Copilot-generated suggestions were reviewed and refined to match the project's style and requirements.