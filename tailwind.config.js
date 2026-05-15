/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        "on-tertiary": "#ffffff",
        "surface-container-low": "#f3f4f5",
        "on-secondary-container": "#5c694b",
        "on-tertiary-fixed": "#2a1708",
        outline: "#707975",
        "secondary-fixed": "#dae8c3",
        "on-surface-variant": "#404945",
        "surface-tint": "#366758",
        "on-secondary-fixed": "#141f08",
        "on-primary-fixed-variant": "#1c4f41",
        "tertiary-container": "#fdd8bf",
        "tertiary-fixed-dim": "#e3c0a8",
        "on-secondary-fixed-variant": "#3f4b30",
        "on-primary-fixed": "#002018",
        "on-error-container": "#93000a",
        "on-surface": "#191c1d",
        "on-primary-container": "#396b5c",
        "inverse-primary": "#9dd1bf",
        "on-tertiary-container": "#785d49",
        "surface-dim": "#d9dadb",
        "on-error": "#ffffff",
        "inverse-on-surface": "#f0f1f2",
        "secondary-fixed-dim": "#becba8",
        "primary-fixed": "#b9eedb",
        "primary-fixed-dim": "#9dd1bf",
        primary: "#366758",
        "primary-container": "#b5ead7",
        "inverse-surface": "#2e3132",
        "outline-variant": "#c0c9c4",
        "surface-container": "#edeeef",
        surface: "#f8f9fa",
        error: "#ba1a1a",
        "on-primary": "#ffffff",
        "surface-bright": "#f8f9fa",
        "on-tertiary-fixed-variant": "#5a422f",
        secondary: "#566246",
        tertiary: "#745945",
        "on-background": "#191c1d",
        "secondary-container": "#dae8c3",
        "tertiary-fixed": "#ffdcc4",
        "surface-container-high": "#e7e8e9",
        background: "#f8f9fa",
        "on-secondary": "#ffffff",
        "surface-variant": "#e1e3e4",
        "error-container": "#ffdad6",
        "surface-container-highest": "#e1e3e4",
        "surface-container-lowest": "#ffffff",
      },

      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },

      spacing: {
        "container-margin-desk": "40px",
        "container-margin-mob": "20px",
        gutter: "16px",
        unit: "8px",
        "section-gap": "48px",
      },

      fontFamily: {
        "display-lg": ["Plus Jakarta Sans", "sans-serif"],
        "headline-sm": ["Plus Jakarta Sans", "sans-serif"],
        "headline-md": ["Plus Jakarta Sans", "sans-serif"],
        "body-lg": ["Plus Jakarta Sans", "sans-serif"],
        "body-md": ["Plus Jakarta Sans", "sans-serif"],

        "label-md": ["Inter", "sans-serif"],
        "label-sm": ["Inter", "sans-serif"],
      },

      fontSize: {
        "display-lg": [
          "40px",
          {
            lineHeight: "48px",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],

        "headline-md": [
          "24px",
          {
            lineHeight: "32px",
            fontWeight: "600",
          },
        ],

        "headline-sm": [
          "20px",
          {
            lineHeight: "28px",
            fontWeight: "600",
          },
        ],

        "body-lg": [
          "18px",
          {
            lineHeight: "28px",
            fontWeight: "400",
          },
        ],

        "body-md": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "400",
          },
        ],

        "label-md": [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "0.01em",
            fontWeight: "500",
          },
        ],

        "label-sm": [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "600",
          },
        ],
      },
    },
  },

  plugins: [],
}