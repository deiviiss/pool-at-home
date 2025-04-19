# Piscina en Casa

Transform your backyard into a paradise! This project is a web application built with [Next.js](https://nextjs.org) that allows users to rent portable pools with installation and pickup included. The app is designed to be intuitive, responsive, and user-friendly.

## Features

- **Quick Reservations:** Book pool installations for specific dates.
- **Detailed Specifications:** Clear information on space requirements, filling times, and draining processes.
- **Service Conditions:** Important details to ensure a safe and enjoyable experience.
- **FAQ Section:** Answers to common user questions.
- **Direct Contact:** Chat directly via WhatsApp.

## Technologies Used

- **Framework:** [Next.js](https://nextjs.org)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **UI Components:** Tailwind CSS and custom components.
- **Icons:** [Lucide React](https://lucide.dev)
- **Optimized Images:** Using `next/image` for better performance.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/piscina-en-casa.git
   cd piscina-en-casa
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```plaintext
src/
├── app/
│   ├── page.tsx          # Main page
│   ├── privacy/          # Privacy policy page
├── components/
│   ├── ui/               # Reusable UI components
│   ├── mobile-menu/      # Mobile menu
│   ├── scroll-to-top/    # Scroll-to-top button
├── public/
│   ├── imgs/             # Project images
```

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com). Follow these steps:

1. Connect your repository to Vercel.
2. Configure any required environment variables.
3. Click "Deploy."

For more details, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## License

This project is licensed under the [MIT License](LICENSE).
