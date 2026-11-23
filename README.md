# dayanaradiazvargas.com

Source for the academic job market website of Dayanara M. Diaz Vargas,
hosted on GitHub Pages with the custom domain in `CNAME`.

## Files

| File | What it is |
|---|---|
| `index.html` | Home page with photo, bio, job market status, job market paper and its abstract, and links to materials |
| `research.html` | Research statement, job market paper, working paper, and work in progress |
| `teaching.html` | Teaching statement, recitations, TA courses, and student feedback |
| `cv.html` | Embeds and links the CV PDF |
| `style.css` | All styling |
| `site.js` | Mobile menu and the show/hide abstract buttons |
| `photo.jpg` | Headshot on the home page, 600 by 750 pixels |
| `DiazVargas_CV.pdf` | CV |
| `DiazVargas_JMP.pdf` | Job market paper. The PDF's "Click here for the most recent version" link points to this exact name. |
| `DiazVargas_JMP_OnlineAppendix.pdf` | Online appendix to the job market paper |
| `DiazVargas_Section936.pdf` | IRS Section 936 working paper |
| `DiazVargas_ResearchStatement.pdf` | Research statement |
| `DiazVargas_TeachingStatement.pdf` | Teaching statement |
| `CNAME` | Custom domain. Do not delete or edit. |

The job market paper's abstract appears on both `index.html` and
`research.html`. When you edit it, edit both.

## What this package contains

This package contains `index.html`, `research.html`, `style.css`, `README.md`,
`photo.jpg`, `DiazVargas_CV.pdf`, and `DiazVargas_JMP_OnlineAppendix.pdf`.
Every other file in the table must already be in the repository.

After you upload, delete `photo.png`. No page uses it anymore. Open
`photo.png` on github.com, choose **Delete file** from the **...** menu at
the top right, and commit.

## Uploading an update

1. Open the repository on github.com.
2. Click **Add file**, then **Upload files**.
3. Drag in every file from this package. Files with the same name replace the
   old ones. Files you do not upload, such as `teaching.html`, stay as they are.
4. Write a short commit message, for example "Add JMP abstract, online appendix, and new photo".
5. Click **Commit changes**. The live site updates within a minute or two.

## Before and after you upload

- [ ] Search every file for `[TK` and resolve each one.
- [ ] Replace `DiazVargas_JMP.pdf` and `DiazVargas_Section936.pdf` with current
      versions whose titles and abstracts match the site.
- [ ] Confirm the Online Appendix title page shows a real date and the address
      https://dayanaradiazvargas.com/DiazVargas_JMP_OnlineAppendix.pdf.
- [ ] Open each page on a laptop and a phone.
- [ ] Click every PDF link and confirm it opens the right document.
- [ ] Open the menu on a phone and confirm all four pages load.
- [ ] Update the "Updated" date in the footer of each page you change.

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
