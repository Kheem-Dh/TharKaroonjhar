# Thar Karoonjhar Travel & Tour Website

This repository contains the source code for the **Thar Karoonjhar Travel & Tour** website.  The site is a modern, responsive and SEO‑friendly one‑page travel agency website designed to showcase adventure packages in the Thar Desert and Karoonjhar Mountains.  It is built using plain HTML, CSS and JavaScript and is ready to be deployed as a static site on **GitHub Pages**.

## Features

* **Responsive design** – Optimised for mobile, tablet and desktop screens using flexbox and CSS grid.
* **Hero banner** – Full‑screen hero section with overlay text and call‑to‑action buttons.
* **About section** – Detailed description of the company with accompanying images highlighting the desert, local culture and an abstract Sindhi pattern.
* **Packages** – Four package cards (Desert Safari, Karoonjhar Trekking, Cultural Tour and Custom Packages) with images, descriptions and starting prices.  Each “Book Now” button links directly to WhatsApp.
* **Gallery** – A responsive gallery grid with a simple lightbox implemented in vanilla JavaScript.
* **Contact section** – Company address, WhatsApp number, email link, embedded Google map of Mithi and a contact form.  The form validates inputs and opens the default mail client.
* **Sticky navigation** – A top navigation bar that remains visible when scrolling, with a mobile hamburger menu for small screens.
* **Smooth scrolling & animations** – Smooth anchor scrolling and scroll‑triggered animations powered by the [AOS library](https://cdnjs.com/libraries/aos)【290915557281968†L26-L40】.
* **Preloader** – Simple loading animation displayed until the page fully loads.
* **SEO‑friendly** – Includes meta tags for title, description, keywords and author.

## Repository structure

```text
/ (root)
├── index.html           # Main HTML file with all sections
├── css/
│   └── style.css        # Stylesheet defining layout, colours and animations
├── js/
│   └── script.js        # JavaScript for interactivity, navigation, lightbox, form validation
├── images/
│   ├── hero-desert.jpg  # Hero/banner image of Thar Desert and mountains
│   ├── camel.jpg        # Image of camels in the desert
│   ├── culture-pattern.png # Abstract pattern inspired by Sindhi culture
│   ├── logo.png         # Company logo placeholder (blue plane icon)
│   └── favicon.png      # Favicon derived from the logo
└── README.md            # This file
```

## Running locally

No build step is required because the site is fully static.  To preview the site locally:

1. Clone or download this repository.
2. Open `index.html` in your browser.  All resources are relative, so the page will load correctly without a web server.

## Deployment on GitHub Pages

1. Create a new repository on GitHub (e.g. `thar-karoonjhar-site`).
2. Copy the contents of this folder into your new repository and commit the changes.
3. In your repository settings, scroll to **Pages**.
4. Under **Source**, select `main` (or the default branch) and root as the folder, then save.
5. GitHub will generate a public URL for your site (e.g. `https://username.github.io/thar-karoonjhar-site/`).  Within a few minutes your site will be live.

## Customisation

* **Images** – Replace the images in the `images/` folder with your own high‑resolution photos of the desert, mountains and local culture.  Maintain the file names or update the `src` attributes in `index.html` accordingly.
* **Packages & pricing** – Modify the package titles, descriptions and prices in the `Packages` section of `index.html`.
* **Contact details** – Update the address, phone number, WhatsApp link and email in the `Contact` section.
* **Brand colours** – Adjust the CSS variables defined at the top of `style.css` to match your branding.

## Credits

* Hero and gallery photos are sourced from [Unsplash](https://unsplash.com) and are free for commercial use under the Unsplash license.
* Scroll animations provided by the [AOS library](https://github.com/michalsnik/aos)【290915557281968†L26-L40】.

If you discover any issues or have suggestions for improvement, feel free to open an issue or submit a pull request.  Enjoy your journey through the Thar Desert and Karoonjhar Mountains!# TharKaroonjhar
