/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        "xl-custom": "1400px",
        "hero-md": "1100px",
        "hero-lg": "1300px",
        "hero-xl": "1500px",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Професійні кольори
        "brand-primary": "#1a5f1a", // Темно-зелени��
        "brand-secondary": "#2d7d2d", // Середньо-зелений
        "brand-accent": "#d4a116", // Золотий
        "brand-dark": "#1a1a1a", // Майже чорний
        "brand-light": "#f8f9fa", // Світло-сірий
        "surface-primary": "#ffffff",
        "surface-secondary": "#f1f3f4",
        "surface-tertiary": "#e8eaed",
        "text-primary": "#202124",
        "text-secondary": "#5f6368",
        "text-muted": "#80868b",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.3s ease-out",
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.1), 0 10px 20px -2px rgba(0, 0, 0, 0.05)",
        medium: "0 4px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.08)",
        strong: "0 10px 40px -10px rgba(0, 0, 0, 0.25), 0 2px 10px -2px rgba(0, 0, 0, 0.1)",
        glow: "0 0 20px rgba(26, 95, 26, 0.4)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
