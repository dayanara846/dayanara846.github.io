# Job Market Website — Setup Guide

## Your files

```
index.html          ← Home (bio, photo, JMP callout, references)
research.html       ← Both working papers with expandable abstracts
teaching.html       ← TA courses from your CV
cv.html             ← Embeds + downloads your CV PDF
style.css           ← Styling (no edits needed)
photo.png           ← Your headshot (included)
DiazVargas_CV.pdf   ← Your CV (included)
```

You still need to add one file: your JMP PDF, named `DiazVargas_JMP.pdf`.

---

## Step 1: What to customize

Every spot that still needs your input is marked with `★ CUSTOMIZE`
or is a `[placeholder]` in brackets. Here is the complete list:

### index.html
- [ ] References: fill in all four (name, title, affiliation, email)
- [ ] Optional: uncomment Google Scholar / Twitter / LinkedIn links
- [ ] Review the bio paragraphs and adjust wording to your voice

### research.html
- [ ] JMP abstract: a draft is pre-filled — polish it
- [ ] Section 936 paper abstract: a draft is pre-filled — polish it
- [ ] Section 936 paper: uncomment the PDF link when the draft is ready
- [ ] Optional: uncomment "Work in Progress" section if applicable

### teaching.html
- [ ] Optional: adjust semesters if specific courses were in specific terms
- [ ] Optional: add professor names under courses
- [ ] Optional: uncomment teaching evaluations link

### cv.html
- Nothing to edit. Already wired to `DiazVargas_CV.pdf`.

---

## Step 2: Deploy on GitHub Pages

### 2a. Create a GitHub account
Go to https://github.com and sign up. Choose your username
carefully — it becomes your URL (e.g., `dayanaradiazvargas.github.io`).

### 2b. Create the repository
1. Click "New" or go to https://github.com/new
2. Repository name: `[your-username].github.io` (must match exactly)
3. Set to **Public**
4. Do NOT check "Add a README file"
5. Click **Create repository**

### 2c. Upload your files
1. On the new repo page, click "uploading an existing file"
2. Drag in ALL files:
   - index.html, research.html, teaching.html, cv.html
   - style.css
   - photo.png
   - DiazVargas_CV.pdf
   - DiazVargas_JMP.pdf (when ready)
3. Commit message: "Initial site"
4. Click **Commit changes**

### 2d. Visit your site
Go to `https://[your-username].github.io` — live within 1–2 minutes.

---

## Step 3: Custom domain (optional, ~$12/year)

1. Buy a domain from Namecheap
2. In GitHub: Settings → Pages → Custom domain → type your domain → Save
3. At the registrar, add DNS records:
   - A records: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - CNAME: www → [your-username].github.io
4. Check "Enforce HTTPS" in GitHub Pages settings
5. Propagation takes 10–30 minutes

---

## Updating later

1. Go to your repository on github.com
2. Click the file to replace
3. Pencil icon (HTML/CSS) or "Add file → Upload files" (PDFs/images)
4. Commit. Updates within ~1 minute.

---

## Pre-launch checklist

- [ ] Photo loads correctly
- [ ] All [PLACEHOLDER] text replaced (especially references)
- [ ] JMP PDF link works
- [ ] CV PDF link works and embed displays
- [ ] Email address correct
- [ ] Site looks good on phone
- [ ] Sent the link to one person to proofread
