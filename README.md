# The Oz Soundz Group — Website

Dark grunge indie website for **ozsoundzgroup.com.au**
Built with pure HTML/CSS/JS — no frameworks, no dependencies.

---

## Site Structure

```
ozsoundzgroup-site/
├── index.html                          ← Homepage
├── contact.html                        ← Contact page
├── shared.css                          ← Shared stylesheet (all pages)
├── shared.js                           ← Shared JavaScript (all pages)
├── about-us/
│   ├── index.html                      ← About Us
│   ├── our-purpose.html                ← Our Purpose
│   └── our-team.html                   ← Our Team
├── our-businesses/
│   ├── index.html                      ← Businesses overview
│   ├── music-audio.html                ← Oz Soundz Music & Audio
│   ├── studios.html                    ← Oz Soundz Studios
│   └── records.html                    ← Oz Soundz Records
├── our-community/
│   ├── index.html                      ← Community overview
│   ├── sponsorship.html                ← Artist Sponsorship Program
│   ├── featured-artists.html           ← Featured Indie Artists
│   ├── gig-calendar.html               ← Gig Calendar
│   └── gig-photos.html                 ← Gig Photos & Videos
└── our-media/
    ├── index.html                      ← Media overview
    ├── blogs.html                      ← Blogs & Articles
    ├── podcasts.html                   ← Oz Soundz Unleashed Podcast
    └── social.html                     ← Social Media
```

---

## Deploying to GitHub Pages (Free Hosting)

This is a **completely free** way to host the site publicly with a URL like:
`https://yourusername.github.io/ozsoundzgroup-site/`

You can also connect your own domain (ozsoundzgroup.com.au) — instructions at the bottom.

---

### STEP 1 — Create a GitHub Account

1. Go to **https://github.com**
2. Click **Sign up** (top right)
3. Enter your email, create a password, choose a username
   - Suggested username: `ozsoundzgroup` or `jasonplumridge`
4. Verify your email address
5. You're in — GitHub is free for public sites

---

### STEP 2 — Create a New Repository

A "repository" (repo) is just a folder on GitHub that holds your website files.

1. Once logged in, click the **green "New"** button (top left, next to "Repositories")
   — OR go to: **https://github.com/new**
2. Fill in the form:
   - **Repository name:** `ozsoundzgroup-site`
     *(if you want the URL to be yourusername.github.io — use your exact username as the repo name, e.g. `ozsoundzgroup.github.io`)*
   - **Description:** The Oz Soundz Group website
   - **Visibility:** ✅ **Public** (required for free GitHub Pages)
   - Leave everything else as default
3. Click **"Create repository"** (green button)

---

### STEP 3 — Upload Your Files

You do NOT need to know how to code or use the command line. Use the web uploader:

1. After creating the repo, you'll see a page with "Quick setup"
2. Click **"uploading an existing file"** (it's a link in the middle of the page)
3. You'll see a large drag-and-drop zone
4. **Open the `ozsoundzgroup-site` folder on your computer**
5. Select **ALL files and folders** inside it (Ctrl+A on Windows, Cmd+A on Mac)
6. Drag them all into the GitHub upload zone
   ⚠️ **Important:** Upload the *contents* of the folder, not the folder itself
7. Wait for all files to upload (progress bars will appear)
8. Scroll down to "Commit changes"
   - Leave the default message ("Add files via upload") or type something like "Initial site upload"
9. Click **"Commit changes"** (green button)

---

### STEP 4 — Enable GitHub Pages

This tells GitHub to turn your uploaded files into a live website.

1. In your repository, click **"Settings"** (top menu bar, gear icon)
2. In the left sidebar, scroll down and click **"Pages"**
3. Under **"Source"**, click the dropdown that says "None" and select **"Deploy from a branch"**
4. Under **"Branch"**, select **"main"** from the dropdown
5. Leave the folder as **"/ (root)"**
6. Click **"Save"**
7. Wait 1–3 minutes
8. Refresh the page — you'll see a green banner:
   **"Your site is live at https://yourusername.github.io/ozsoundzgroup-site/"**
9. Click the link — your site is live! 🎉

---

### STEP 5 — Share Your Site

Your live URL will be:
```
https://yourusername.github.io/ozsoundzgroup-site/
```

Share this link on your socials, business cards, and anywhere you'd put the website URL.

---

### STEP 6 (Optional) — Connect Your Custom Domain

If you want the site to appear at **ozsoundzgroup.com.au** instead of the GitHub URL:

#### In GitHub:
1. Go to your repo → **Settings** → **Pages**
2. Under "Custom domain", type: `ozsoundzgroup.com.au`
3. Click **Save**
4. GitHub will create a file called `CNAME` in your repo automatically

#### In your domain registrar (where you bought ozsoundzgroup.com.au):
You need to add DNS records. Log into your domain provider (e.g. Crazy Domains, Netfleet, GoDaddy, Cloudflare) and add:

**Option A — Using an apex domain (ozsoundzgroup.com.au):**
Add these 4 x **A records** pointing to GitHub's servers:

| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

**Option B — Also add www subdomain:**

| Type | Name | Value |
|------|------|-------|
| CNAME | www | yourusername.github.io |

DNS changes take 10 minutes to 48 hours to go live globally.

---

### STEP 7 (Optional) — Enable HTTPS

Once your domain is connected:
1. Go to **Settings → Pages**
2. Tick **"Enforce HTTPS"** ✅
3. Your site will now load securely at `https://ozsoundzgroup.com.au`

---

## Updating The Site

When you need to update page content:

1. Go to your GitHub repository
2. Click on the file you want to edit (e.g. `contact.html`)
3. Click the **pencil icon** (Edit) top right of the file view
4. Make your changes directly in the browser
5. Scroll down → click **"Commit changes"**
6. The site automatically updates within 1–2 minutes

For larger updates (uploading new images, adding new pages):
1. Go to your repo
2. Click **"Add file"** → **"Upload files"**
3. Drag in your new/updated files
4. Commit changes

---

## Adding Images

To add your own photos (band shots, gear photos, gig photos):

1. Create an `images/` folder in your repo (Add file → Create new file → name it `images/.gitkeep`)
2. Upload your images to the `images/` folder
3. Reference them in HTML like:
   ```html
   <img src="../images/your-photo.jpg" alt="Description">
   ```
   (use `../` if you're inside a subfolder like `about-us/`)

---

## Need Help?

Email: info@ozsoundz.com.au

GitHub Pages docs: https://docs.github.com/en/pages
