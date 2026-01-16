# Course Gallery Images

This folder contains all course poster images displayed in the gallery on the landing page.

## How to Add New Images

### Step 1: Add Your Image
1. Place your new course poster image in this folder (`public/images/courses/`)
2. Use a descriptive filename (e.g., `new-course-poster.jpg`)
3. Recommended image format: JPG or PNG
4. Recommended aspect ratio: 3:4 (portrait orientation works best)

### Step 2: Update the Config File
1. Open `src/config/courseGallery.ts`
2. Add your image filename to the `courseImages` array
3. Example:
   ```typescript
   export const courseImages = [
     "existing-image-1.jpg",
     "existing-image-2.jpg",
     "new-course-poster.jpg",  // ← Add your new image here
   ];
   ```

### Step 3: Rebuild (if needed)
The images will be automatically available. If you're running a dev server, it should hot-reload. For production, rebuild:
```bash
npm run build
```

## Image Guidelines

- **Format**: JPG or PNG
- **Aspect Ratio**: 3:4 (portrait) works best for course posters
- **File Size**: Optimize images before adding (use tools like TinyPNG)
- **Naming**: Use descriptive, lowercase filenames with hyphens (e.g., `tajweed-course.jpg`)

## Current Images

The gallery currently displays all images listed in `src/config/courseGallery.ts`.
