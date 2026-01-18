/**
 * Course Gallery Configuration
 * 
 * To add new course posters:
 * 1. Add the image file to: public/images/courses/
 * 2. Add the filename to the courseImages array below
 * 
 * The gallery will automatically display all images listed here.
 */

export const courseImages = [
  "4-year-aalima-course.webp",
  "admission-open.webp",
  "addmission-announcement.webp",
  "arbi-ibarat-course.webp",
  "faizan-shriat-course.webp",
  "faizan-tajweed-course.webp",
  "imamat-course.webp",
  "naat-course.webp",
  "quran-hadees classes.webp",
  "tafseer-course.webp",
  "tajweed-course.webp",
  "tajweed-lehjat-course.webp",
  "takhassus-fil-fiqh-course.webp",
  "turjama-tafseer-course.webp",
];

/**
 * Base path for course images
 */
export const COURSE_IMAGES_PATH = "/images/courses/";

/**
 * Get full image URL
 */
export const getCourseImageUrl = (filename: string): string => {
  return `${COURSE_IMAGES_PATH}${filename}`;
};
