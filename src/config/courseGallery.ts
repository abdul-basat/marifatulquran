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
  "4-year-aalima-course.jpg",
  "admission-open.jpg",
  "addmission-announcement.jpg",
  "arbi-ibarat-course.jpg",
  "faizan-shriat-course.jpg",
  "faizan-tajweed-course.jpg",
  "imamat-course.jpg",
  "naat-course.jpg",
  "quran-hadees classes.jpg",
  "tafseer-course.jpg",
  "tajweed-course.jpg",
  "tajweed-lehjat-course.jpg",
  "takhassus-fil-fiqh-course.jpg",
  "turjama-tafseer-course.jpg",
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
