# Donis.dev Homepage

A modern, static personal portfolio website built with Next.js 16, showcasing projects and skills as a full-stack developer. Hosted on GitHub Pages at [donis.dev](https://donis.dev).

## Features

- **Static Export**: Optimized for static hosting with Next.js static export
- **MDX Content**: Project pages written in MDX for rich content
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Dark/Light Theme**: Theme switching with next-themes
- **Image Optimization**: Automated image processing and thumbnail generation
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Social Images**: Open-graph and X images are generated for each project on build time.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Content**: MDX
- **Icons**: Lucide React and react-icons
- **Animations**: Motion
- **UI Components**: Shad/cn
- **Deployment**: GitHub Pages

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── (landing)/         # Landing page components
│   ├── (pages)/           # Additional pages (about, contact, projects)
│   └── layout.tsx         # Root layout
├── components/            # Reusable UI components
├── core/                  # Core utilities and configurations
├── lib/                   # Utility functions
├── projects/              # Project content (MDX files and images)
├── public/                # Static assets
└── .tools/                # Image processing scripts
```

## Development

### Prerequisites

- Node.js 24+
- pnpm

### Installation

```bash
pnpm install
```

### Scripts

- `dev`: Starts the development server. Automatically copies image files from `projects/{projectName}/` to `public/assets/projects/{projectName}/` on start, and cleans them on stop.
- `build`: Builds the application for production. Copies processed images to `out/assets/projects/{projectName}/` after build.
- `start`: Starts the production server (for testing builds locally).
- `lint`: Runs ESLint for code quality checks.
- `image-prep`: Processes all images in the projects folder - converts PNGs to JPEGs, renames files sequentially (e.g., `projectname-1.jpg`), and generates thumbnails from cover images.
- `thumb`: Generates thumbnails for project cover images (used internally by `image-prep`).

### Image Management

The project includes automated image processing tools:

1. **Image Preparation** (`pnpm run image-prep`):
   - Converts all PNG files to JPEG format
   - Renames images sequentially (skipping cover and thumbnail files)
   - Generates thumbnails from cover images

2. **Development Workflow**:
   - Images are automatically copied to `public/assets/projects/` during development
   - Built images are copied to `out/assets/projects/` for production

### Adding a New Project

1. Create a new folder in `projects/` (e.g., `projects/my-project/`)
2. Add a `content.mdx` file with frontmatter and content
3. Add images (cover.jpg recommended, additional images will be processed)
4. Run `pnpm run image-prep` to process images
5. The project will automatically appear in the portfolio

### Frontmatter Schema

```yaml
---
title: Project Title
description: Project description for SEO
keywords: keyword1, keyword2
author: Deniz Özkan
date: 2024-01-01
tags: [Tag1, Tag2]
shortDescription: Brief description
shortTitle: Short title
techStack: [Tech1, Tech2]
projectUrl: "https://example.com"
isFeatured: true
featureOrder: 1
---
```

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when the workflow is triggered manually.

### Manual Deployment

```bash
pnpm run build
```

The built files in `out/` can be deployed to any static hosting service.

## Contributing

This is a personal portfolio site, but feel free to open issues for bugs or suggestions.

## License

© 2025 Deniz Özkan. All rights reserved.