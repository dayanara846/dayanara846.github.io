# dayanaradiazvargas.com

Source for the academic job market website of Dayanara M. Diaz Vargas,
hosted on GitHub Pages with the custom domain in `CNAME`.

## Files

| File | What it is |
|---|---|
| `index.html` | Home page with bio, job market status, job market paper, and links to materials |
| `research.html` | Research statement, job market paper, working paper, and work in progress |
| `teaching.html` | Teaching statement, recitations, TA courses, and student feedback |
| `cv.html` | Embeds and links the CV PDF |
| `style.css` | All styling |
| `site.js` | Mobile menu and the show/hide abstract buttons |
| `DiazVargas_ResearchStatement.pdf` | Research statement |
| `DiazVargas_TeachingStatement.pdf` | Teaching statement |
| `CNAME` | Custom domain. Do not delete or edit. |

These files must already be in the repository, because the pages link to them
and this package does not include them:

- `photo.png`
- `DiazVargas_CV.pdf`
- `DiazVargas_JMP.pdf` (the PDF's "Click here for recent version" link points to this exact name)
- `DiazVargas_Section936.pdf`

## Uploading an update

1. Open the repository on github.com.
2. Click **Add file**, then **Upload files**.
3. Drag in every file from this package. Files with the same name replace the
   old ones. Files you do not upload, such as `photo.png`, stay as they are.
4. Write a short commit message, for example "Update bio, research, and teaching".
5. Click **Commit changes**. The live site updates within a minute or two.

## Before and after you upload

- [ ] Search every file for `[TK` and resolve each one.
- [ ] Replace `DiazVargas_JMP.pdf`, `DiazVargas_Section936.pdf`, and
      `DiazVargas_CV.pdf` with current versions whose titles match the site.
- [ ] Open each page on a laptop and a phone.
- [ ] Click every PDF link and confirm it opens the right document.
- [ ] Open the menu on a phone and confirm all four pages load.
- [ ] Update "Updated October 2026" in each page's footer when you change content.

## Adding an anonymous feedback form

1. Create a Google Form or Microsoft Form with the questions you want.
2. In the form settings, turn off email and name collection so responses are
   anonymous.
3. Say on the form that comments may appear, without names, on this website.
4. Copy the form's share link.
5. In `teaching.html`, find the commented-out "Open the anonymous form" button,
   paste the link in place of the `[TK: ...]` placeholder, and delete the
   comment markers around it.

## Editing later

To change text, open the file on github.com, click the pencil icon, edit, and
commit. To replace a PDF, use **Add file**, then **Upload files**, with the same
file name.
