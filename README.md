# Online Shop CA using NextJS - Sander Torgersen

An online shop platform where users can browse a veriety products and checkout these items. Can search products and has form made with zod. This project uses modern web technologies that align with each other, focusing on performance and accessibility and user experience.

## Project links

**[Report](https://docs.google.com/document/d/1lXkf_IMbnkQwdWAh6pFN5f-tm8f32dE3a94g0_Jl6bQ/edit?usp=sharing)**

**[Github Repo](https://github.com/NoroffFEU/jsfw-2025-v1-sander-torgersen-jsf-ca)**

**[Vercel Production Deplyment](https://jsfw-2025-v1-sander-torgersen-jsf-c.vercel.app/)**

## Features

- **Forms**: Uses Zod, Zod-Resolver and React-Hook-Forms, for validation, propper acceibilities and "useForm" for good managment of state.
- **Hooks**: Uses Zustand with persist muddleware for localStorage, that manages states and actions.
- **Browse Listings**: View products with dynamic filtering as the user types in search field.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
- **Modern UI**: Styled with Tailwind CSS and Shadcn, featuring easy custom fast design and smooth animations.

## Tech Stack

- **Runtime**: [React 19](https://react.dev/)
- **Meta Framework**: [NextJS](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI**:
  - [shadcn/ui new-york style](https://ui.shadcn.com/)
  - [Tailwind CSS v4](https://tailwindcss.com/)
  - [Lucide React](https://lucide.dev/)
  - [Sonner (toast)](https://ui.shadcn.com/docs/components/radix/sonner)
- **State Management**:
  - [Zustand 5](https://zustand-demo.pmnd.rs/)
  - [Zustand Middleware](https://zustand.docs.pmnd.rs/reference/middlewares/persist)
- **Form Validation**
  - [Zod](https://zod.dev/)
  - [React-Hook-Forms](https://react-hook-form.com/)
- **Deployment**: [Vercel](https://vercel.com/home)

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/NoroffFEU/jsfw-2025-v1-sander-torgersen-jsf-ca.git
   cd jsfw-2025-v1-sander-torgersen-jsf-ca
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Development server

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Building for Production

Build the project for deployment:

```bash
npm run build
```

The output will be in the `dist` directory.

### Production Server

Start the production server:

```bash
npm run start
```

The application will be available at `http://localhost:3000`.

## Author

**[Sander Dorgan Torgersen](https://github.com/SanderTorg)**
