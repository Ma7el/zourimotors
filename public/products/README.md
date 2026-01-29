# Product Images Directory

Place your product images here.

## Image Requirements:
- Format: JPG, PNG, or WebP
- Recommended size: 800x600px or larger
- Aspect ratio: 4:3 or 16:9

## File Names:
Name your images exactly as listed below:

### Main Brands:
1. `mercedes.jpg` - Mercedes-Benz projector
2. `bmw.jpg` - BMW projector
3. `audi.jpg` - Audi projector
4. `toyota.jpg` - Toyota projector
5. `nissan.jpg` - Nissan projector
6. `honda.jpg` - Honda projector
7. `volkswagen.jpg` - Volkswagen projector
8. `hyundai.jpg` - Hyundai projector

### Additional Brands:
9. `kia.png` - Kia projector
10. `amg.png` - AMG projector
11. `m-competition.png` - M Competition projector
12. `genesis.png` - Genesis projector
13. `lexus.png` - Lexus projector
14. `infiniti.png` - Infiniti projector
15. `acura.png` - Acura projector
16. `mazda.png` - Mazda projector

## Logo:
Place your ZOURI MOTORS logo in the root `public/` folder as:
- `public/public.png` (recommended)
- `logo.jpg`
- `logo.svg`

## How to Add Images:

### For Product Images:
1. Place your image files in this `public/products/` folder
2. Make sure the filename matches exactly (case-sensitive)
3. Go to `app/page.tsx` and:
   - Find the placeholder div with "صورة المنتج"
   - Comment out the placeholder div
   - Uncomment the Image component below it
4. The images will automatically appear on the website

### For Logo:
1. Place your logo in `public/logo.png` (or .jpg, .svg)
2. Go to `app/page.tsx` and:
   - Find the logo placeholder section at the top
   - Comment out the placeholder div
   - Uncomment the Image component for the logo
3. The logo will appear at the top of the page

## Example:
If you have a Mercedes-Benz projector image:
- Save it as: `public/products/mercedes.jpg`
- Uncomment the Image component in `app/page.tsx`
- The image will display automatically
