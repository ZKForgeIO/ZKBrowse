# ZK Forge

A modern, responsive search engine built with Next.js 15 and TypeScript. ZK Forge provides a sleek, high-performance web search experience with a cutting-edge dark theme design. **No logs policy** and **completely private** search functionality - we don't track, store, or monitor any of your search activity.

## Features

- **Private Search** - No logs, no tracking, complete privacy protection
- **Fast Web Search** - Lightning-fast search results powered by advanced algorithms
- **Responsive Design** - Fully optimized for all devices (mobile, tablet, desktop)
- **Modern UI** - Beautiful dark theme with green accent colors and smooth animations
- **Real-time Results** - Click-to-open results in new tabs with comprehensive information
- **Smart Ranking** - AI-powered result ranking for the most relevant content first
- **Loading States** - Smooth loading animations and user feedback
- **Error Handling** - Graceful error handling with user-friendly messages

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui component library
- **Icons**: Lucide React
- **API Integration**: Custom search API with web search capabilities

## Design System

### Color Palette
- **Primary Green**: #17ff9a (bright emerald/mint green)
- **Secondary Green**: #0ea674 (darker teal-green)
- **Dark Green Accent**: #0d3d2a (dark forest green)
- **Main Background**: #0a0a0a (near-black)
- **Card Background**: #1a1a1a to #0f0f0f (gradient)
- **Border Color**: #2a2a2a (subtle gray)

### Typography
- **Headings**: Bold, large scale (3xl to 7xl)
- **Body Text**: Small to base (text-sm to text-base)
- **Micro Text**: 10px to 12px (text-[10px] to text-xs)

### Components
- **Buttons**: Green gradient with hover glow effects
- **Cards**: Gradient backgrounds with rounded corners
- **Badges**: Dark green background with green borders
- **Effects**: Glow shadows, hover animations, custom scrollbars

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd zk-forge
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Privacy & Security

ZK Forge is built with privacy as the core principle:

- **No Logs Policy** - We don't store, track, or monitor any search queries
- **Private Search** - Your search activity is completely anonymous
- **No Tracking** - No analytics, cookies, or user tracking mechanisms
- **Secure Connection** - All searches are processed securely
- **No Personal Data** - We don't collect or store any personal information

Your privacy is our priority. Search freely without worrying about your data being collected or monitored.

## Usage

1. **Search**: Enter your search query in the search bar
2. **Results**: View ranked search results with snippets and metadata
3. **Navigate**: Click on any result to open it in a new tab
4. **Explore**: Use the responsive interface on any device
5. **Stay Private**: Enjoy completely anonymous searching without any tracking

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── search/
│   │       └── route.ts          # Search API endpoint
│   ├── globals.css               # Global styles and custom CSS
│   ├── layout.tsx                # Root layout component
│   └── page.tsx                  # Main search page
├── components/
│   └── ui/                       # shadcn/ui components
└── lib/                          # Utility libraries
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint code quality check

## Features in Detail

### Search Functionality
- Real-time search with debouncing
- Comprehensive web search integration
- Result ranking and metadata display
- Error handling for failed searches

### Responsive Design
- Mobile-first approach
- Touch-friendly interface
- Adaptive layouts for all screen sizes
- Optimized performance across devices

### User Experience
- Smooth animations and transitions
- Loading states and feedback
- Keyboard navigation support
- Accessible semantic HTML

### Visual Design
- Modern dark theme interface
- Green accent color scheme
- Gradient effects and glows
- Custom scrollbar styling
- Hover and focus states

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any inquiries or support, please visit our website or open an issue in the repository.

---

Built with ❤️ using modern web technologies.
