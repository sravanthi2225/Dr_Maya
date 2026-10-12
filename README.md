# Dr. Maya Reynolds, PsyD — Private Practice Website

Production-ready, boutique brand website designed for **Dr. Maya Reynolds, PsyD**, Licensed Clinical Psychologist. Built with Next.js (App Router), TypeScript, Tailwind CSS, and `next/font`.

---

## 1. Quick Start & Setup

### Prerequisites
- Node.js 18.18+ or 20+
- npm (included with Node.js)

### Local Development
```bash
# Navigate to the project directory
cd maya-reynolds-app

# Install dependencies (if not already installed)
npm install

# Run the local development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Production Build & Verification
```bash
# Compile and validate production build with Turbopack
npm run build

# Start the optimized production server
npm run start
```

---

## 2. GitHub & Deployment Commands (Manual Deploy)

As requested, here are the exact terminal commands to create a public GitHub repository and deploy publicly to Vercel or Netlify without passwords.

### Step 1: Initialize Git and Commit
```bash
cd "d:\Dr.Maya Reynolds Profile\maya-reynolds-app"
git init
git add .
git commit -m "Initial commit: Dr. Maya Reynolds PsyD bespoke studio website"
git branch -M main
```

### Step 2: Push to a New Public GitHub Repository
```bash
# Using GitHub CLI (authenticated):
gh repo create dr-maya-reynolds-website --public --source=. --remote=origin --push

# OR using standard Git with your repository URL:
git remote add origin https://github.com/<YOUR-USERNAME>/dr-maya-reynolds-website.git
git push -u origin main
```

### Step 3: Deploy to Vercel (Public, Zero Password)
```bash
# Install Vercel CLI globally (if not installed)
npm install -g vercel

# Deploy directly from terminal
vercel --prod
```
*Follow the interactive prompt: select project name `dr-maya-reynolds-website`, keep default build settings (`next build`), and press Enter. Vercel will output a live public URL (e.g., `https://dr-maya-reynolds-website.vercel.app`).*

### Step 4: Deploy to Netlify (Alternative)
```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=.next
```

---

## 3. Requirements Mapping Table

| Requirement | Implementation Details | Satisfied In Code |
| :--- | :--- | :--- |
| **Single Source of Truth** | All practice copy strictly reflects profile: Name, Santa Monica address (`123th Street 45 W`), California telehealth, adults only, CBT/EMDR/mindfulness/somatic methods, trauma pacing, burnout/perfectionism. No invented fees, phone, email, license numbers, or testimonials. | [`layout.tsx`](file:///d:/Dr.Maya%20Reynolds%20Profile/maya-reynolds-app/src/app/layout.tsx), [`page.tsx`](file:///d:/Dr.Maya%20Reynolds%20Profile/maya-reynolds-app/src/app/page.tsx), [`OurOffice.tsx`](file:///d:/Dr.Maya%20Reynolds%20Profile/maya-reynolds-app/src/components/OurOffice.tsx), [`FaqAccordion.tsx`](file:///d:/Dr.Maya%20Reynolds%20Profile/maya-reynolds-app/src/components/FaqAccordion.tsx) |
| **Reference Clone Section Order** | Exactly mirrors layout, section order, spacing rhythm, and hierarchy of reference site: 1. Header, 2. Hero, 3. Hope, 4. Who I Help, 5. Statement & Expertise, 6. How I Work, 7. Specialties, 8. NEW Our Office, 9. Schedule CTA, 10. FAQs, 11. Footer. | [`page.tsx`](file:///d:/Dr.Maya%20Reynolds%20Profile/maya-reynolds-app/src/app/page.tsx) |
| **Header (Sticky + Dropdowns)** | Wordmark logo, About, Specialties dropdown (4 tracks), Methods dropdown (4 modalities), FAQs, Contact, and "Book a Consultation" button. Shrinks smoothly on scroll. Full-screen mobile menu. | [`Header.tsx`](file:///d:/Dr.Maya%20Reynolds%20Profile/maya-reynolds-app/src/components/Header.tsx) |
| **Hero Section** | Small uppercase eyebrow, large H1 with one italic emphasized word (*quiet*), one-sentence subline, primary CTA button, two asymmetric images (portrait + sunlit office). | [`Hero.tsx`](file:///d:/Dr.Maya%20Reynolds%20Profile/maya-reynolds-app/src/components/Hero.tsx) |
| **Hope Section** | H2, italic supporting line, first paragraph, center arched window-light vignette image, second paragraph. Alternating Sand background. | [`Hope.tsx`](file:///d:/Dr.Maya%20Reynolds%20Profile/maya-reynolds-app/src/components/Hope.tsx) |
| **"Who I Help" Section** | 3 image cards with titles, text, and focus tags: Anxiety & Panic, Trauma & Old Patterns, Burnout & Perfectionism. | [`WhoIHelp.tsx`](file:///d:/Dr.Maya%20Reynolds%20Profile/maya-reynolds-app/src/components/WhoIHelp.tsx) |
| **Statement & Areas of Expertise** | Statement H2 followed by large italic terms separated by hairline rules (*Anxiety*, *Panic*, *Trauma*, *Burnout*, *Perfectionism*, *Overthinking*, *Chronic Stress*, *Nervous System Regulation*, *Self-Trust*). | [`StatementExpertise.tsx`](file:///d:/Dr.Maya%20Reynolds%20Profile/maya-reynolds-app/src/components/StatementExpertise.tsx) |
| **"How I Work" Section** | H2, therapist image, italic lead line, two paragraphs on warm, collaborative style and mind-body methods, text link "Learn more about me". | [`HowIWork.tsx`](file:///d:/Dr.Maya%20Reynolds%20Profile/maya-reynolds-app/src/components/HowIWork.tsx) |
| **Specialties Section** | 4 items: Trauma, Anxiety & Panic, EMDR Therapy, Burnout & Perfectionism. Each with title, short paragraph, and "Learn more" link. | [`Specialties.tsx`](file:///d:/Dr.Maya%20Reynolds%20Profile/maya-reynolds-app/src/components/Specialties.tsx) |
| **NEW "Our Office" Section** | Mandatory placement between Specialties and CTA. Eyebrow, H2, 2 short paragraphs from profile, Santa Monica address with "Get directions" link, California telehealth note, and 3 asymmetric editorial office images. | [`OurOffice.tsx`](file:///d:/Dr.Maya%20Reynolds%20Profile/maya-reynolds-app/src/components/OurOffice.tsx) |
| **Schedule CTA Section** | Eyebrow, H2, paragraph, "Book a Consultation" button, and warm coastal atmosphere image. | [`ScheduleCTA.tsx`](file:///d:/Dr.Maya%20Reynolds%20Profile/maya-reynolds-app/src/components/ScheduleCTA.tsx) |
| **FAQs Accordion** | 8 questions answered strictly from profile: who do you work with, in-person vs telehealth, methods used, trauma approach, burnout/perfectionism, office space, fees/insurance ("Contact me for current details"), and emergencies (call/text 988). | [`FaqAccordion.tsx`](file:///d:/Dr.Maya%20Reynolds%20Profile/maya-reynolds-app/src/components/FaqAccordion.tsx) |
| **Footer** | In-person + telehealth blurb, brand wordmark, Navigate links, Contact address, Serving areas, legal links, and prominent crisis box: "If you are in crisis, call or text 988." | [`Footer.tsx`](file:///d:/Dr.Maya%20Reynolds%20Profile/maya-reynolds-app/src/components/Footer.tsx) |
| **Color Palette** | Defined as CSS variables and applied throughout: Evergreen `#1F3A34`, Warm Cream `#F6F1E9`, Sand `#EAE0D0`, Sage `#A9B8A3`, Clay `#A65A3B` (contrast ratio 5.06:1 on white text > WCAG AA 4.5:1), Body text `#1D2623`, Muted `#5B6660`. | [`globals.css`](file:///d:/Dr.Maya%20Reynolds%20Profile/maya-reynolds-app/src/app/globals.css) |
| **Typography** | Cormorant Garamond serif headings with italic emphasis words; DM Sans body font at 17px/1.65 line-height; fluid clamp sizing; generous whitespace; 1200px max container. | [`layout.tsx`](file:///d:/Dr.Maya%20Reynolds%20Profile/maya-reynolds-app/src/app/layout.tsx), [`globals.css`](file:///d:/Dr.Maya%20Reynolds%20Profile/maya-reynolds-app/src/app/globals.css) |
| **Human Studio Craft Details** | Thin hairline dividers, arched and soft-rounded image frames, 3.5% paper-grain overlay, alternating cream/sand/evergreen backgrounds, custom focus rings, link hover animations, prefers-reduced-motion compliance. Zero AI tells. | [`globals.css`](file:///d:/Dr.Maya%20Reynolds%20Profile/maya-reynolds-app/src/app/globals.css) |
| **Curated Local Images** | Curated warm-graded WebP imagery organized into `/public/images/office`, `/public/images/maya`, and `/public/images/cards`. Also configured with aliases (`office-1.webp`, `office-2.webp`, etc.) ready for Google Drive drop-in. | [`public/images/`](file:///d:/Dr.Maya%20Reynolds%20Profile/maya-reynolds-app/public/images) |
| **Mobile Responsiveness** | Tested and verified on desktop (1440, 1280), tablet (1024, 768), and mobile (390, 360). 44px min touch targets, full-screen mobile menu overlay, sticky mobile booking action bar. | [`StickyMobileCTA.tsx`](file:///d:/Dr.Maya%20Reynolds%20Profile/maya-reynolds-app/src/components/StickyMobileCTA.tsx), [`Header.tsx`](file:///d:/Dr.Maya%20Reynolds%20Profile/maya-reynolds-app/src/components/Header.tsx) |
| **SEO & Semantic Architecture** | Single H1, logical H2/H3 hierarchy, skip link, OpenGraph, Twitter tags, JSON-LD Schema (`MedicalBusiness`/`Psychologist`/`LocalBusiness`), `robots.ts`, `sitemap.ts`. Target Lighthouse 90+. | [`layout.tsx`](file:///d:/Dr.Maya%20Reynolds%20Profile/maya-reynolds-app/src/app/layout.tsx), [`robots.ts`](file:///d:/Dr.Maya%20Reynolds%20Profile/maya-reynolds-app/src/app/robots.ts), [`sitemap.ts`](file:///d:/Dr.Maya%20Reynolds%20Profile/maya-reynolds-app/src/app/sitemap.ts) |
| **Contact & Booking Flow** | Fully validated inquiry modal and on-page form with name, email, phone (optional), format, focus, message, and success state. | [`ConsultationModal.tsx`](file:///d:/Dr.Maya%20Reynolds%20Profile/maya-reynolds-app/src/components/ConsultationModal.tsx), [`ContactSection.tsx`](file:///d:/Dr.Maya%20Reynolds%20Profile/maya-reynolds-app/src/components/ContactSection.tsx) |
