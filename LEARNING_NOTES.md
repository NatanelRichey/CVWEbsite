# React & Next.js Learning Notes
*From Building My Interactive CV - October 2025*

---

## Table of Contents

### Stage 1 - Core Concepts
1. [Components & JSX](#1-components--jsx)
2. [Props - Passing Data](#2-props---passing-data)
3. [State - Managing Changes](#3-state---managing-changes)
4. [The .map() Function](#4-the-map-function)
5. [Smooth Scrolling](#5-smooth-scrolling)
6. [Tailwind CSS](#6-tailwind-css)
7. [Key Takeaways](#7-key-takeaways)

### Stage 2 - Advanced Interactions
8. [useState Hook](#8-usestate-hook)
9. [useEffect Hook](#9-useeffect-hook)
10. [localStorage API](#10-localstorage-api)
11. [Framer Motion Animations](#11-framer-motion-animations)
12. [Event Listeners](#12-event-listeners)
13. [Stage 2 Summary](#13-stage-2-summary)

---

## 1. Components & JSX

### What is a Component?
A component is a **reusable piece of UI** - it's just a JavaScript function that returns JSX.

```typescript
// Simple component
function Greeting() {
  return <h1>Hello World!</h1>
}

// Use it like HTML
<Greeting />
```

### Components in Vanilla React vs Next.js
- **Components ARE vanilla React** - they're React's core feature
- **Next.js adds** file-based routing, server components, optimizations
- **The component syntax is identical** in both

### What is JSX?
**JSX = JavaScript XML** (NOT JSON!)

```typescript
// This looks like HTML but it's JavaScript
const element = <h1 className="title">Hello</h1>

// React converts it to:
const element = React.createElement('h1', { className: 'title' }, 'Hello')
```

**Key differences from HTML:**
- Use `className` instead of `class`
- Use `htmlFor` instead of `for`
- Self-closing tags need `/` (e.g., `<img />`)
- JavaScript expressions go in curly braces: `{variable}`

### Who Decides Where to Render?

**The Rendering Tree:**

```
app/layout.tsx (Root - wraps everything)
    ↓
app/page.tsx (Main page - assembles sections)
    ↓
components/Hero.tsx (Individual section)
```

**Example:**

```typescript
// app/page.tsx - YOU decide the order
export default function Home() {
  return (
    <div>
      <Navigation />  {/* Rendered first */}
      <Hero />        {/* Then this */}
      <Experience />  {/* Then this */}
    </div>
  )
}
```

**React handles the actual DOM updates** - you just declare what should be shown.

---

## 2. Props - Passing Data

### What Are Props?
Props (properties) are how you pass data to components - **like function parameters**.

### Props Can Be ANY Data Type:

```typescript
// String
<Hero name="John" />

// Number
<Hero age={25} />

// Boolean
<Hero isActive={true} />

// Object
<Hero person={{ name: "John", age: 25 }} />

// Array
<Hero skills={["React", "TypeScript"]} />

// Function
<Hero onClick={() => alert("Hi")} />
```

### Real Example from Your CV:

```typescript
// Passing an object as a prop
<ExperienceCard experience={exp} />

// Receiving the prop (destructuring syntax)
function ExperienceCard({ experience }) {
  // Access properties:
  return (
    <div>
      <h3>{experience.company}</h3>
      <p>{experience.position}</p>
    </div>
  )
}
```

### Props are Just Function Parameters:

```javascript
// Regular function
function greet(name) {
  return "Hello " + name
}
greet("John")

// React component - same concept!
function Greeting({ name }) {
  return <h1>Hello {name}</h1>
}
<Greeting name="John" />
```

### Iterating Over Array Props:

```typescript
function SkillsList({ skills }) {
  return (
    <div>
      {skills.map((skill) => (
        <span key={skill}>{skill}</span>
      ))}
    </div>
  )
}

// Usage:
<SkillsList skills={["React", "TypeScript", "Node.js"]} />

// Renders:
<div>
  <span>React</span>
  <span>TypeScript</span>
  <span>Node.js</span>
</div>
```

---

## 3. State - Managing Changes

### What is State?
State is **data that can change over time** and causes the component to re-render when it changes.

### Do I Need State? Decision Tree:

```
Does clicking/interacting change visible data on the page?
├─ NO → Don't use state (just use regular HTML/links)
│       Examples: Links, "Back to top" button, external links
│
└─ YES → Use state!
         Examples: Filters, counters, form inputs, toggles
```

### Does NOT Need State:

```typescript
// Just navigation - no data changes
<a href="#top">Back to Top</a>
<Link href="#about">About</Link>
<a href="https://github.com">GitHub</a>
```

### DOES Need State:

```typescript
// Filter changes what projects are displayed
const [selectedCategory, setSelectedCategory] = useState('All')

<button onClick={() => setSelectedCategory('Frontend')}>
  Frontend
</button>
```

### useState Syntax Explained:

```typescript
const [count, setCount] = useState(0)
//     ↑       ↑              ↑
//  Current  Updater      Initial
//   value   function      value

// Read the value:
console.log(count)  // 0

// Update the value (triggers re-render):
setCount(5)  // Now count is 5

// Update based on previous value:
setCount(count + 1)  // Increment by 1
```

### Complete Example - Counter:

```typescript
function Counter() {
  // Declare state
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}

// What happens when button is clicked:
// 1. onClick handler runs
// 2. setCount(count + 1) updates state
// 3. React re-renders the component
// 4. New count value appears on screen
```

### Real Example from Your Portfolio:

```typescript
// State for selected category
const [selectedCategory, setSelectedCategory] = useState('All')

// Filter projects based on state
const filteredProjects = selectedCategory === 'All'
  ? projects
  : projects.filter(p => p.category === selectedCategory)

// Button updates state
<button onClick={() => setSelectedCategory('Frontend')}>
  Frontend
</button>

// Display filtered results (changes when state changes!)
{filteredProjects.map(project => (
  <ProjectCard project={project} />
))}
```

### Light Switch Analogy:
- **Without state**: Switch that doesn't control anything (static)
- **With state**: Switch that controls a light bulb (dynamic)

---

## 4. The .map() Function

### What is .map()?
An array method that **transforms each item** and returns a new array.

### Basic JavaScript Examples:

```javascript
// Double numbers
const numbers = [1, 2, 3]
const doubled = numbers.map(num => num * 2)
// Result: [2, 4, 6]

// Uppercase names
const names = ["john", "jane"]
const uppercase = names.map(name => name.toUpperCase())
// Result: ["JOHN", "JANE"]

// Extract property from objects
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" }
]
const names = users.map(user => user.name)
// Result: ["John", "Jane"]
```

### In React - Creating Multiple Components:

```typescript
const projects = [
  { id: 1, title: "Project A" },
  { id: 2, title: "Project B" },
  { id: 3, title: "Project C" }
]

// Transform array of data into array of components
{projects.map((project) => (
  <ProjectCard key={project.id} project={project} />
))}

// This creates:
<>
  <ProjectCard key={1} project={{ id: 1, title: "Project A" }} />
  <ProjectCard key={2} project={{ id: 2, title: "Project B" }} />
  <ProjectCard key={3} project={{ id: 3, title: "Project C" }} />
</>
```

### Syntax Breakdown:

```typescript
projects.map((project) => (
//  ↑          ↑       ↑  ↑
// Array    Each item | Return JSX
//                Arrow function

  <ProjectCard 
    key={project.id}        // Unique identifier
    project={project}       // Pass entire object as prop
  />
))
```

### Why the `key` prop?

React uses `key` to track which items changed, were added, or removed:

```typescript
// ❌ BAD - React can't track items
{projects.map(project => (
  <ProjectCard project={project} />
))}

// ✅ GOOD - React knows each item uniquely
{projects.map(project => (
  <ProjectCard key={project.id} project={project} />
))}

// ❌ BAD - Using array index (problematic if list changes)
{projects.map((project, index) => (
  <ProjectCard key={index} project={project} />
))}

// ✅ GOOD - Use unique ID from data
{projects.map(project => (
  <ProjectCard key={project.id} project={project} />
))}
```

### Real Example from Your CV:

```typescript
// In Experience.tsx
{experience.description.map((point, idx) => (
  <li key={idx}>
    <span>•</span>
    <span>{point}</span>
  </li>
))}

// If experience.description = ["Built features", "Fixed bugs"]
// This creates:
<li key={0}>
  <span>•</span>
  <span>Built features</span>
</li>
<li key={1}>
  <span>•</span>
  <span>Fixed bugs</span>
</li>
```

---

## 5. Smooth Scrolling

### What It Does:

**Without smooth scrolling:**
```
Click link → Page JUMPS instantly to section
```
Jarring, teleportation-like

**With smooth scrolling:**
```
Click link → Page GLIDES smoothly to section
```
Animated, professional feel

### How We Enabled It:

```css
/* In app/globals.css */
html {
  scroll-behavior: smooth;
}
```

This **single CSS line** makes ALL anchor link navigation smooth!

### How It Works:

```html
<!-- Navbar link -->
<a href="#portfolio">Portfolio</a>

<!-- Target section -->
<section id="portfolio">...</section>
```

**Without smooth scrolling:** Instant jump
**With smooth scrolling:** Smooth animated scroll

### Browser Support:
- ✅ Chrome, Firefox, Edge, Safari (modern versions)
- For older browsers, you'd need JavaScript polyfill

---

## 6. Tailwind CSS

### Philosophy:
Instead of writing CSS files, apply **utility classes** directly in HTML/JSX.

### Traditional CSS vs Tailwind:

#### Traditional Approach:
```css
/* styles.css */
.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 32px;
  background-color: #f0f0f0;
  border-radius: 8px;
}
```

```html
<div class="hero-section">Content</div>
```

#### Tailwind Approach:
```html
<!-- Everything in one place! -->
<div className="flex flex-col items-center gap-4 p-8 bg-gray-100 rounded-lg">
  Content
</div>
```

### Common Classes Reference:

| Tailwind Class | CSS Equivalent | What It Does |
|----------------|----------------|--------------|
| `flex` | `display: flex` | Flexbox container |
| `flex-col` | `flex-direction: column` | Stack vertically |
| `flex-row` | `flex-direction: row` | Arrange horizontally |
| `items-center` | `align-items: center` | Center items on cross axis |
| `justify-center` | `justify-content: center` | Center items on main axis |
| `gap-4` | `gap: 1rem` (16px) | Space between items |
| `p-4` | `padding: 1rem` | Padding all sides |
| `px-4` | `padding-left/right: 1rem` | Horizontal padding only |
| `py-4` | `padding-top/bottom: 1rem` | Vertical padding only |
| `m-4` | `margin: 1rem` | Margin all sides |
| `w-full` | `width: 100%` | Full width |
| `h-screen` | `height: 100vh` | Full viewport height |
| `bg-blue-500` | `background-color: #3b82f6` | Blue background |
| `text-white` | `color: white` | White text |
| `font-bold` | `font-weight: bold` | Bold text |
| `text-2xl` | `font-size: 1.5rem` | Large text |
| `rounded-lg` | `border-radius: 0.5rem` | Rounded corners |
| `border` | `border: 1px solid` | Add border |

### Spacing Scale (Important!):

Tailwind uses multiples of 4px:

```
gap-1  = 4px    (0.25rem)
gap-2  = 8px    (0.5rem)
gap-3  = 12px   (0.75rem)
gap-4  = 16px   (1rem)
gap-6  = 24px   (1.5rem)
gap-8  = 32px   (2rem)
gap-12 = 48px   (3rem)
gap-16 = 64px   (4rem)
```

### Responsive Design:

```html
<!-- Traditional CSS -->
<style>
  .container { flex-direction: column; }
  
  @media (min-width: 768px) {
    .container { flex-direction: row; }
  }
</style>
<div class="container">...</div>

<!-- Tailwind (much simpler!) -->
<div className="flex-col md:flex-row">...</div>
<!--     ↑ default    ↑ medium screens and up -->
```

**Breakpoint prefixes:**
- (none) = all screen sizes
- `sm:` = 640px and up (small tablets)
- `md:` = 768px and up (tablets)
- `lg:` = 1024px and up (laptops)
- `xl:` = 1280px and up (desktops)

### Real Example from Your Hero:

```typescript
<div className="flex flex-col md:flex-row items-center gap-12">
//              ↓        ↓          ↓           ↓          ↓
//          Display  Column on   Row on      Center    48px
//           flex    mobile     desktop      items     gap

// What this means:
// - Always: display: flex, align-items: center, gap: 48px
// - Mobile (<768px): flex-direction: column
// - Desktop (≥768px): flex-direction: row
```

### Dark Mode with Custom Colors:

Your CV uses CSS variables for automatic dark mode:

```css
/* globals.css */
:root {
  --background: #ffffff;  /* Light mode */
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;  /* Dark mode */
    --foreground: #ededed;
  }
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
}
```

```html
<!-- Automatically adapts to system theme! -->
<div className="bg-background text-foreground">
  Light in light mode, dark in dark mode
</div>
```

### Pseudo-classes (Hover, Focus, etc.):

```html
<!-- Traditional CSS -->
<style>
  .button { background: blue; }
  .button:hover { background: darkblue; }
</style>

<!-- Tailwind -->
<button className="bg-blue-500 hover:bg-blue-700">
  <!--                     ↑ Only applies on hover -->
  Click me
</button>
```

**Other pseudo-classes:**
- `hover:` - On mouse hover
- `focus:` - When input is focused
- `active:` - When button is pressed
- `disabled:` - When disabled
- `group-hover:` - Hover on parent affects child

### Example: Hover Effect on Card

```typescript
<div className="bg-white hover:bg-gray-100 transition-colors">
  <!--                        ↑ Changes background on hover
                                  ↑ Smooth color transition
  -->
  Card content
</div>
```

---

## 7. Key Takeaways

### React Mental Model:
1. **Components** = Functions that return UI
2. **Props** = Arguments passed to components
3. **State** = Data that can change (triggers re-render)
4. **Rendering** = React updates the DOM when data changes

### Component Hierarchy:
```
App (layout.tsx)
└── Page (page.tsx)
    ├── Navigation
    ├── Hero
    ├── Experience
    │   └── ExperienceCard (multiple instances)
    ├── Skills
    ├── Portfolio
    │   └── ProjectCard (multiple instances)
    ├── Contact
    └── Footer
```

### Data Flow:
```
lib/data.ts (source of truth)
    ↓
Component imports data
    ↓
Component passes data as props
    ↓
Child component receives props
    ↓
Child renders UI with data
```

### When to Use What:

**Regular HTML/Links:**
- Navigation
- External links
- Static content

**State (useState):**
- Filters/sorting
- Form inputs
- Toggle switches
- Counters
- Any data that changes based on user interaction

**Props:**
- Passing data from parent to child
- Configuration for reusable components
- Event handlers

### React vs. Server-Side Rendering (EJS):

**Your MealCreator (EJS):**
```
User clicks → Server renders new HTML → Full page reload
```

**This CV (React/Next.js):**
```
Initial load → React takes over → Updates only what changed
```

**Benefits:**
- Faster interactions (no page reload)
- Smoother user experience
- Better for dynamic content
- Next.js adds SEO benefits through server rendering

---

## Quick Reference Commands

```bash
# Development
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Build for production
npm start            # Run production build

# File structure
/app                 # Pages and layouts
/components          # Reusable UI components
/lib                 # Data and utilities
/public              # Static assets (images, etc.)
```

---

## Learning Resources

### Official Docs:
- React: https://react.dev
- Next.js: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs

### Key Concepts to Explore Next:
1. **useEffect** - Side effects (API calls, subscriptions)
2. **Custom Hooks** - Reusable logic
3. **Context API** - Global state management
4. **Server vs Client Components** - Next.js App Router feature
5. **Data Fetching** - How to load data in Next.js

---

## Questions to Test Understanding

1. What's the difference between props and state?
2. When would you use .map() in React?
3. Why do we need a `key` prop when mapping?
4. What is JSX and how is it different from JSON?
5. When does a component re-render?
6. What's the benefit of Tailwind over traditional CSS?
7. What does `md:flex-row` mean in Tailwind?

### Answers:

1. **Props** are passed from parent (read-only). **State** is internal to component (can change).

2. Use .map() to **render multiple items** from an array (e.g., list of projects).

3. `key` helps React **track which items changed** for efficient updates.

4. **JSX** is HTML-like syntax in JavaScript. **JSON** is a data format. JSX gets compiled to JavaScript, JSON is for data transfer.

5. Component re-renders when:
   - Its state changes (useState)
   - Its props change
   - Parent component re-renders

6. **Tailwind**: Faster development, no naming classes, consistent design, easy responsive design.
   **Traditional CSS**: More control, separation of concerns, familiar to many developers.

7. `md:flex-row` = "On **medium screens and up** (≥768px), apply `flex-row`"

---

## Your Project Structure

```
CV/
├── app/
│   ├── globals.css           # Global styles + CSS variables
│   ├── layout.tsx            # Root layout (wraps entire app)
│   ├── page.tsx              # Home page (assembles all sections)
│   └── favicon.ico           # Site icon
├── components/
│   ├── Navigation.tsx        # Fixed navbar
│   ├── Hero.tsx              # Hero section with photo & intro
│   ├── Experience.tsx        # Work history timeline
│   ├── Skills.tsx            # Skills by category
│   ├── Portfolio.tsx         # Project showcase with filtering ⭐ Uses state!
│   ├── Contact.tsx           # Contact info & social links
│   └── Footer.tsx            # Page footer
├── lib/
│   ├── data.ts               # ALL CV content (easy to edit!)
│   └── types.ts              # TypeScript type definitions
├── public/
│   ├── images/               # Project images & profile photo
│   └── resume.pdf            # Downloadable CV (add this!)
└── package.json              # Project dependencies
```

---

# STAGE 2 - ADVANCED INTERACTIONS & ANIMATIONS

---

## 8. useState Hook

### What Is It?
**Component memory** - lets React components remember values that change over time.

### Syntax:
```typescript
const [value, setValue] = useState(initialValue);
//     ↑       ↑              ↑
//   Current  Updater      Starting
//   value    function     value
```

### When to Use:
- Theme preference (dark/light mode)
- Menu open/closed state
- Active section tracking
- Filter selections
- Form inputs
- Any data that changes based on user interaction

### Key Rules:
1. Call at **top of component** only (not in loops/conditions)
2. **Never mutate state directly** - always use setter function
3. State updates are **asynchronous**

### Example from Your CV:
```typescript
// Theme toggle
const [isDark, setIsDark] = useState(false);

// User clicks → updates state → React re-renders → UI updates
<button onClick={() => setIsDark(!isDark)}>
  {isDark ? <MoonIcon /> : <SunIcon />}
</button>
```

---

## 9. useEffect Hook

### What Is It?
Runs code **after** component renders (for side effects like API calls, event listeners).

### Syntax:
```typescript
useEffect(() => {
  // Code runs after render
  
  return () => {
    // Cleanup (optional)
  };
}, [dependencies]); // When to re-run
```

### Dependency Array:
- `[]` = Run **once** on mount
- `[count]` = Re-run when `count` changes
- No array = Run on **every** render (usually wrong!)

### When to Use:
- Load saved preferences from localStorage
- Add/remove event listeners
- Fetch data from APIs
- Track scroll position
- Update document title

### Example from Your CV:
```typescript
// Load theme on mount
useEffect(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    setIsDark(true);
  }
}, []); // Empty array = run once

// Track scroll position
useEffect(() => {
  const handleScroll = () => {
    setScrollProgress(window.scrollY);
  };
  
  window.addEventListener('scroll', handleScroll);
  
  // CLEANUP: Remove listener on unmount
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

---

## 10. localStorage API

### What Is It?
Browser storage that persists data even after closing the page.

### API:
```typescript
localStorage.setItem('key', 'value');     // Save
const value = localStorage.getItem('key'); // Load (returns string or null)
localStorage.removeItem('key');            // Delete
localStorage.clear();                      // Delete all
```

### Important:
- Only stores **strings**
- For objects, use `JSON.stringify()` and `JSON.parse()`
- Check for `null` (key might not exist)
- ~5-10MB storage limit

### Example from Your CV:
```typescript
// Save theme preference
localStorage.setItem('theme', 'dark');

// Load theme preference
const savedTheme = localStorage.getItem('theme');
const isDark = savedTheme === 'dark';

// Store complex data
const prefs = { theme: 'dark', fontSize: 'large' };
localStorage.setItem('prefs', JSON.stringify(prefs));
const loaded = JSON.parse(localStorage.getItem('prefs'));
```

---

## 11. Framer Motion Animations

### What Is It?
Animation library for React - easier than CSS keyframes.

### Basic Syntax:
```typescript
<motion.div
  initial={{ opacity: 0, y: 40 }}      // Start state
  animate={{ opacity: 1, y: 0 }}       // End state
  transition={{ duration: 0.7 }}       // How long
>
  Content
</motion.div>
```

### Common Props:
- `initial` - Starting state (before animation)
- `animate` - Ending state (what it animates to)
- `transition` - Speed, easing, delay
- `whileHover` - Style while hovering
- `exit` - State when leaving (needs AnimatePresence)

### useInView Hook:
```typescript
const ref = useRef(null);
const isInView = useInView(ref, { once: true });

<motion.div
  ref={ref}
  animate={{ opacity: isInView ? 1 : 0 }}
>
```

### Example from Your CV:
```typescript
// ScrollReveal component
<ScrollReveal delay={0.2}>
  <div>Fades in on scroll</div>
</ScrollReveal>

// Hero image scale-in
<motion.div
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
>
  <Image src="/profile.jpg" />
</motion.div>
```

---

## 12. Event Listeners

### What Are They?
Functions that respond to browser events (scroll, click, resize, etc.)

### Adding Listeners:
```typescript
window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleResize);
```

### Removing Listeners (Important!):
```typescript
window.removeEventListener('scroll', handleScroll);
```

**Always remove listeners in useEffect cleanup to prevent memory leaks!**

### Example from Your CV:
```typescript
useEffect(() => {
  const handleScroll = () => {
    // Calculate scroll progress
    const progress = (window.scrollY / totalHeight) * 100;
    setScrollProgress(progress);
    
    // Check which section is visible
    const section = document.getElementById('experience');
    const rect = section.getBoundingClientRect();
    if (rect.top <= 100) {
      setActiveSection('experience');
    }
  };

  window.addEventListener('scroll', handleScroll);
  
  // Cleanup on unmount
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

---

## 13. Stage 2 Summary

### Features Built:
✅ **Smooth scroll animations** - ScrollReveal component with Framer Motion  
✅ **Active section tracking** - Nav highlights current section  
✅ **Mobile menu** - Hamburger menu with animation  
✅ **Scroll progress bar** - Shows reading progress  
✅ **Theme toggle** - Dark/light mode with persistence  
✅ **Micro-interactions** - Hover effects on cards and buttons  

### Technologies Learned:
- **useState** - Component memory for changing data
- **useEffect** - Side effects after render
- **localStorage** - Persist data in browser
- **Framer Motion** - Smooth animations
- **Event Listeners** - Respond to scroll, click, etc.
- **useRef** - Reference DOM elements
- **CSS Transforms** - GPU-accelerated animations

### Key Patterns:
```typescript
// 1. Track state
const [value, setValue] = useState(initial);

// 2. Load saved data after mount
useEffect(() => {
  const saved = localStorage.getItem('key');
  setValue(saved);
}, []);

// 3. Save on change
useEffect(() => {
  localStorage.setItem('key', value);
}, [value]);

// 4. Cleanup listeners
useEffect(() => {
  window.addEventListener('event', handler);
  return () => window.removeEventListener('event', handler);
}, []);
```

---

## Questions to Test Understanding (Stage 2)

1. What's the difference between useState and regular variables?
2. When does useEffect run?
3. Why do we need cleanup functions in useEffect?
4. What does localStorage.getItem() return if the key doesn't exist?
5. How do you store an object in localStorage?
6. What's the difference between `initial` and `animate` in Framer Motion?
7. Why use CSS transforms instead of changing width/height?

### Answers:

1. **useState** triggers re-render when changed. Regular variables don't trigger re-renders.

2. useEffect runs **after** the component renders. Dependency array controls when it re-runs.

3. Cleanup prevents **memory leaks** by removing event listeners and canceling subscriptions when component unmounts.

4. Returns **null** (not undefined). Always check: `const value = localStorage.getItem('key') || 'default'`

5. Convert to JSON: `localStorage.setItem('user', JSON.stringify(userObject))` then parse: `JSON.parse(localStorage.getItem('user'))`

6. **initial** = starting state (invisible). **animate** = ending state (visible). Framer Motion animates between them.

7. Transforms use **GPU** (faster, smoother). Width/height changes trigger layout recalculation (slow, janky).

---

*This document created: October 19, 2025*
*Updated with Stage 2: October 19, 2025*
*Project: Interactive CV Website*
*Tech Stack: Next.js 15, React 19, TypeScript, Tailwind CSS v4, Framer Motion*

---

## Next Learning Steps

**Stage 2 Complete!** ✅ You now understand:
- React Hooks (useState, useEffect, useRef)
- Browser APIs (localStorage, event listeners)
- Animation libraries (Framer Motion)
- Advanced CSS (transforms, transitions)

**Possible Next Steps:**
1. **Stage 3**: 3D elements, particle effects, advanced interactions
2. **Custom Hooks**: Extract reusable logic
3. **Context API**: Global state without prop drilling
4. **Form Handling**: React Hook Form for complex forms
5. **API Integration**: Fetch data from backends
6. **Testing**: Jest and React Testing Library
7. **Deployment**: Push to GitHub, deploy on Vercel

Remember: **You learn by building.** This CV project is giving you real React experience!

