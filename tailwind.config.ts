import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        basewhite: "var(--basewhite)",
        "gray-200": "var(--gray-200)",
        "gray-50": "var(--gray-50)",
        "gray-600": "var(--gray-600)",
        "primary-100": "var(--primary-100)",
        "primary-600": "var(--primary-600)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        header: "var(--bg-header)",
        hover: "var(--bg-hover)",
        "hover-light": "var(--bg-hover-light)",
        content: "var(--bg-content)",
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
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      textColor: {
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        inverted: "var(--text-inverted)",
        dark: "var(--text-dark)",
      },
      borderColor: {
        DEFAULT: "var(--border)",
      },
      boxShadowColor: {
        DEFAULT: "var(--shadow)",
      },
      fontFamily: {
        serif: ["var(--font-instrument)"],
        mono: ["var(--font-geist-sans)"],
        "text-extra-small-leading-none-regular":
          "var(--text-extra-small-leading-none-regular-font-family)",
        "text-small-leading-none-regular":
          "var(--text-small-leading-none-regular-font-family)",
        "text-small-leading-none-semibold":
          "var(--text-small-leading-none-semibold-font-family)",
        "text-small-leading-normal-medium":
          "var(--text-small-leading-normal-medium-font-family)",
        "text-small-leading-normal-regular":
          "var(--text-small-leading-normal-regular-font-family)",
        "web-font-primary-body-1-normal":
          "var(--web-font-primary-body-1-normal-font-family)",
        "web-font-primary-caption-1-medium":
          "var(--web-font-primary-caption-1-medium-font-family)",
        "web-font-primary-caption-1-normal":
          "var(--web-font-primary-caption-1-normal-font-family)",
        "web-font-primary-caption-2-normal":
          "var(--web-font-primary-caption-2-normal-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          'Apple Color Emoji"',
          'Segoe UI Emoji"',
          'Segoe UI Symbol"',
          'Noto Color Emoji"',
        ],
      },
      boxShadow: {
        "button-effect-special": "var(--button-effect-special)",
        "elevation-e2": "var(--elevation-e2)",
        "elevation-e6": "var(--elevation-e6)",
        "shadow-sm": "var(--shadow-sm)",
        "special-drop": "var(--special-drop)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
  },
  plugins: [],
};

export default config;
