# Customizing Your Interactive CV

## 🎉 Congratulations! Stage 1 is Complete!

You now have a fully functional, responsive CV website. Here's how to make it yours:

## 📝 Step 1: Update Your Information

### Edit `lib/data.ts`

This file contains all your CV content. Update the following sections:

1. **Personal Info** (lines 7-16)
   - Replace with your name, title, location, contact info
   - Add your professional bio

2. **Social Links** (lines 18-24)
   - Add your LinkedIn, GitHub, Twitter URLs

3. **Experience** (lines 27-50)
   - Add your work history
   - Follow the existing format for each job

4. **Education** (lines 53-65)
   - Add your academic background
   - Currently displayed in the data but not shown on page (can add later)

5. **Skills** (lines 68-75)
   - Update with your actual tech stack
   - Organized by category

6. **Projects** (lines 78-156)
   - Update the 4 project entries with YOUR projects
   - Add more projects by copying the format

## 🖼️ Step 2: Add Your Images

Replace the placeholder images in `public/images/`:

1. **profile.jpg** - Your professional photo (square, 500x500px recommended)
2. **mealcreator.png** - Screenshot of your MealCreator site
3. **whatsapp-crawler.png** - Screenshot or diagram of your WhatsApp crawler
4. **therabot.png** - TheraBot project image
5. **cv-website.png** - Screenshot of this CV website

**Tip**: Use PNG format for best quality. Recommended size: 1200x600px for project images.

## 📄 Step 3: Add Your Resume PDF

Place a PDF version of your traditional resume in `public/resume.pdf`

This will be downloadable via the "Download CV" button in the Contact section.

## 🎨 Customization Tips

### Changing Colors

Edit `app/globals.css`:
- `--background`: Background color
- `--foreground`: Text color

### Adding More Projects

In `lib/data.ts`, copy an existing project object and add it to the `projects` array. Make sure to:
- Give it a unique `id`
- Add appropriate category
- Create an image for it

### Adding Navigation Links

Edit `components/Navigation.tsx` to add/remove nav items.

## 🚀 What's Next?

### Current Status: Stage 1 Complete ✅
- All sections built and responsive
- Clean, professional design
- Easy to update content

### Coming in Stage 2: Animations & Interactivity
- Smooth scroll animations
- Hover effects and transitions
- Mobile menu
- Dark/light mode toggle
- Performance optimizations

### Stage 3 (Optional): Advanced Features
- 3D elements
- Particle effects
- Interactive visualizations

## 🔧 Development Commands

```bash
npm run dev    # Start development server (http://localhost:3000)
npm run build  # Build for production
npm start      # Run production build locally
```

## 📱 Testing

- Open http://localhost:3000 in your browser
- Test on mobile by opening http://192.168.139.122:3000 on your phone
- Check all sections scroll smoothly
- Click all links to verify they work

## 🐛 Troubleshooting

**Images not showing?**
- Make sure images are in `public/images/` folder
- Check the filename matches what's in `data.ts`
- SVG placeholders work but won't look great - replace with real images

**TypeScript errors?**
- Make sure all required fields in `data.ts` are filled
- Check the browser console for specific errors

## 📚 Learning Points from Stage 1

You've now seen:
- **React Components**: Reusable UI pieces (Navigation, Hero, etc.)
- **Props**: Passing data to components
- **TypeScript**: Type safety for your data
- **Tailwind CSS**: Utility-first styling approach
- **Next.js**: File-based routing, Image optimization
- **Component Composition**: Building complex UIs from simple pieces

## ✅ Ready for Stage 2?

Once you've customized your content and added images, let me know and we'll add:
- Beautiful animations using Framer Motion
- Interactive navigation
- Theme toggle (dark/light mode)
- Performance optimizations

Take your time updating the content - a well-crafted CV with real data is more impressive than fancy animations with placeholder text!


