# E-Cafe Services Portal

A modern, professional online services portal for printing and application filling services. Built with Next.js 16, React 19, and Tailwind CSS.

## Features

### 🏠 Homepage Sections
- **Header**: Logo, shop name, address, contact info, and WhatsApp button
- **Hero/Search Section**: Large search bar with quick service navigation buttons
- **Services Section**: Grid layout showcasing all available services
- **Order Your Prints**: Interactive file upload and price calculator
- **Contact Section**: Contact information, Google Maps integration, and working hours
- **Footer**: Links to all sections and services

### 📄 Service Pages
Each service has its own dedicated page:

1. **Application Filling Services**
   - `/services/application-filling` - Main application filling page
   - `/services/tspsc` - TSPSC applications
   - `/services/rrb` - Railway Recruitment Board applications
   - `/services/ibps` - Banking Personnel Selection applications
   - `/services/postal` - Postal department applications
   - `/services/entrance-exams` - Entrance exam applications
   - `/services/other-applications` - Other job applications

2. **Printing Services**
   - `/services/printing` - Printing services with order form

3. **PVC Printing**
   - `/services/pvc-printing` - PVC card printing services

4. **Lamination**
   - `/services/lamination` - Document lamination services

5. **Binding**
   - `/services/binding` - Document binding services

## Project Structure

```
app/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Site header with contact info
│   ├── Hero.tsx        # Hero section with search
│   ├── Services.tsx    # Services showcase section
│   ├── OrderPrints.tsx # File upload and price calculator
│   ├── Contact.tsx     # Contact section with map
│   └── Footer.tsx      # Site footer
├── services/           # Individual service pages
│   ├── application-filling/
│   ├── tspsc/
│   ├── rrb/
│   ├── ibps/
│   ├── postal/
│   ├── entrance-exams/
│   ├── other-applications/
│   ├── printing/
│   ├── pvc-printing/
│   ├── lamination/
│   └── binding/
├── page.tsx            # Homepage
├── layout.tsx          # Root layout
└── globals.css         # Global styles
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Update Contact Information
Edit the following files to update contact details:
- `app/components/Header.tsx` - Header contact info
- `app/components/Contact.tsx` - Contact section
- All service pages - Contact buttons

### Update Shop Information
- Shop name and address: `app/components/Header.tsx`
- Working hours: `app/components/Contact.tsx`

### Update Google Maps
Replace the iframe src in `app/components/Contact.tsx` with your location's Google Maps embed URL.

### Update Pricing
- Printing prices: `app/components/OrderPrints.tsx`
- Service descriptions: Individual service pages

## Technologies Used

- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **React Icons** - Icon library

## Features Highlights

✅ Responsive design (mobile, tablet, desktop)
✅ Modern, clean UI/UX
✅ Interactive price calculator
✅ File upload functionality
✅ Google Maps integration
✅ WhatsApp integration
✅ SEO-friendly structure
✅ TypeScript for type safety
✅ Component-based architecture

## License

This project is private and proprietary.
