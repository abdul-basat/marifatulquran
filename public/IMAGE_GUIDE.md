# Image Replacement Guide - Maarifatul Quran

Welcome! This guide will help you easily replace images on the Maarifatul Quran website without touching any code.

## About Maarifatul Quran
This website is for an **online female Islamic academy** dedicated to teaching Quranic knowledge and Islamic studies to women. All images should reflect this identity - featuring female students, scholars, and an Islamic learning environment.

## Directory Structure

All images are organized in the `public/images/` folder:

```
public/images/
├── logo/           # Academy logo and branding
├── hero/           # Background images for hero sections
├── people/         # Scholar and student photos
└── campus/         # Campus and learning environment photos
```

## How to Replace Images

### Step 1: Prepare Your Image
- Use high-quality images (preferably JPG or PNG format)
- Follow the recommended dimensions below
- Ensure images reflect the academy's identity as a female-focused Islamic learning institution
- Use appropriate, modest imagery aligned with Islamic values

### Step 2: Replace the File
1. Navigate to the appropriate folder in `public/images/`
2. Delete or backup the existing image
3. Copy your new image to the same folder
4. **IMPORTANT**: Use the exact same filename as the original image

### Step 3: Rebuild the Website
```bash
npm run build
```

## Image Specifications

### Logo (`public/images/logo/`)
- **logo.jpg** - Main academy logo
  - Recommended size: 500x500px (square)
  - Used in: Header, mobile menu, favicon
  - Should feature the academy's branding
  - Will be displayed as a circular logo (border-radius applied)

### Hero Images (`public/images/hero/`)
- **hero-bg.jpg** - Dark mode hero background
  - Recommended size: 1920x1080px (landscape)
  - Used in: Homepage hero section (dark theme)
  - Tip: Use Islamic patterns, calligraphy, or learning environments
  
- **hero-bg-light.jpg** - Light mode hero background
  - Recommended size: 1920x1080px (landscape)
  - Used in: Homepage hero section (light theme)
  
- **pattern.jpg** - Decorative background pattern
  - Recommended size: 800x800px (square, tileable)
  - Used in: Section backgrounds
  - Tip: Islamic geometric patterns work well

### People (`public/images/people/`)
These images should feature female students and scholars in an Islamic learning context:

- **scholar1.jpg** - Featured scholar/teacher 1
  - Recommended size: 600x600px (square or portrait)
  - Should show modestly dressed female Islamic scholar
  
- **scholar2.jpg** - Featured scholar/teacher 2
  - Recommended size: 600x600px (square or portrait)
  
- **student-female.jpg** - Female student photo
  - Recommended size: 800x600px
  - Should depict online learning or Quranic study
  
- **student-male.jpg** - Alternative student photo
  - Recommended size: 800x1200px
  - **Note**: Consider replacing with female student image to maintain academy identity
  
- **student-male-2.jpg** - Alternative student photo 2
  - Recommended size: 800x1200px
  - **Note**: Consider replacing with female student image to maintain academy identity
  
- **student-grad.jpg** - Graduation/achievement photo
  - Recommended size: 800x600px
  - Should show female graduate in Islamic attire

### Campus (`public/images/campus/`)
- **campus.jpg** - Learning environment
  - Recommended size: 1200x800px (landscape)
  - Should show online learning setup or Islamic study environment
  
- **online-learning.jpg** - Online education visual
  - Recommended size: 800x600px
  - Should depict virtual classroom or home study setup

## Important Notes

⚠️ **Keep the same filenames** - Don't rename files, or the website won't find them

✅ **Optimize images** - Compress images before uploading to improve website speed. Use tools like:
  - TinyPNG (https://tinypng.com/)
  - Squoosh (https://squoosh.app/)

🎨 **Maintain consistency** - Keep a consistent visual style across all images

📐 **Responsive design** - Images will automatically resize on different devices

## Favicon

The favicon (browser tab icon) is generated from the logo. If you update the logo, you'll need to:

1. Replace `public/images/logo/logo.jpg` with your new logo
2. Regenerate favicon files (see technical documentation)
3. Rebuild the website

## Need Help?

If you encounter issues or need to add new images:
1. Check that filenames match exactly (including extension)
2. Ensure images are in the correct folders
3. Verify image file formats (JPG, PNG, or WebP)
4. Rebuild the website after making changes

---

**For Developers**: Image paths in the code reference `/images/...` which points to this `public/images/` directory. After building, these are copied to the `dist/` folder automatically.
