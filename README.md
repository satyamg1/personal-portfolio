# Personal Portfolio

A static, recruiter-friendly portfolio website for Satyam Gawali. It has no build step, so it can be hosted directly with GitHub Pages.

## Edit your content

Most updates happen in `script.js`:

- change `email`, `github`, `linkedin`, and `resume`
- update the `projects` list with real repository and demo URLs
- replace the placeholder `experience` item with your work, internship, education, or project milestones
- revise `skills` as your toolkit changes

Update the main headline and summary in `index.html`.

## Preview locally

From this folder:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## Create the GitHub repository

1. Go to GitHub and create a new public repository named `personal-portfolio`.
2. Do not initialize it with a README, because this folder already has one.
3. Copy the repository URL.
4. Run these commands from this folder:

```bash
git remote add origin https://github.com/YOUR-USERNAME/personal-portfolio.git
git branch -M main
git push -u origin main
```

## Publish with GitHub Pages

1. Open the repository on GitHub.
2. Go to Settings, then Pages.
3. Under Build and deployment, choose `Deploy from a branch`.
4. Select branch `main` and folder `/root`.
5. Save. GitHub will publish the site at:

```text
https://YOUR-USERNAME.github.io/personal-portfolio/
```

## Keep it constantly updated

Use a simple monthly rhythm:

- add one measurable project update, shipped feature, or screenshot
- refresh project links and demo status
- keep the resume PDF in sync with the website
- check that every external link still works
- commit small updates with clear messages

Example:

```bash
git status
git add .
git commit -m "Refresh portfolio projects"
git push
```

For larger portfolio changes, create a branch first:

```bash
git checkout -b update-project-copy
git add .
git commit -m "Improve project descriptions"
git push -u origin update-project-copy
```
