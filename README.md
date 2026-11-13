# khanhtrinh2003.github.io

Personal CV page (French), served by GitHub Pages.

- `index.html` - the CV page (no build step, no framework).
- `assets/theme.js` - light/dark toggle.
- `assets/photo.jpg` - portrait; add it here. Until it exists, the page shows the initials "NT".
- `cv/CV_Nguyen_Trinh.tex` - LaTeX source of the one-page PDF CV.
- `cv/CV_Nguyen_Trinh.pdf` - file behind the "Télécharger le CV" button.

## Rebuild the PDF

```bash
cd cv
cp /path/to/IMG_8415.png .   # portrait used by the .tex
latexmk -pdf CV_Nguyen_Trinh.tex && latexmk -c
```

## Publish

1. Create a public repository named `khanhtrinh2003.github.io` on GitHub.
2. Push this folder to its `main` branch.
3. Settings > Pages > Source: "Deploy from a branch", branch `main`, folder `/`.

The site is then live at https://khanhtrinh2003.github.io/.
