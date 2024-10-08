/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'mobile': '320px',
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    // colors: {
    //   'one': '#451859',
    //   'two': '#f3953e',
    //   'three': '#face48'
    // },
    width: {
      '1': '4px',
      '2': '8px',
      '3': '12px',
      '4': '16px',
      '5': '24px',
      '6': '32px',
      '7': '48px',
      '8': '64px',
      '9': '96px',
      '10': '128px',
      '11': '192px',
      '12': '256px',
      '12m': '330px',
      '13': '384px',
      '14': '512px',
      '15': '640px',
      '16': '768px',
      '17': '900px',
      '18': '1120px',
      '19': '1320px',
      '20': '1560px',
      'full': '100%'
    },
    height: {
      '1': '4px',
      '2': '8px',
      '3': '12px',
      '4': '16px',
      '5': '24px',
      '6': '32px',
      '6m': '39px',
      '7': '48px',
      '8': '64px',
      '9': '96px',
      '10': '128px',
      '11': '192px',
      '12': '256px',
      '13': '384px',
      '14': '512px',
      '15': '640px',
      '16': '768px',
    },
    margin: {
      '1': '4px',
      '2': '8px',
      '3': '12px',
      '4': '16px',
      '5': '24px',
      '6': '32px',
      '7': '48px',
      '8': '64px',
      '9': '96px',
      '9.5': '108px',
      '10': '128px',
      '11': '192px',
      '12': '256px',
      '13': '384px',
      '14': '512px',
      '15': '640px',
      '16': '768px',
    },
    padding: {
      '1': '4px',
      '2': '8px',
      '3': '12px',
      '4': '16px',
      '5': '24px',
      '6': '32px',
      '7': '48px',
      '8': '64px',
      '9': '96px',
      '10': '128px',
      '11': '192px',
      '12': '256px',
      '13': '384px',
      '14': '512px'
    },
    gap: {
      '1': '4px',
      '2': '8px',
      '3': '12px',
      '4': '16px',
      '5': '24px',
      '6': '32px',
      '7': '48px',
      '8': '64px',
      '9': '96px',
      '10': '128px',
      '11': '192px',
    },
    fontSize: {
      '1': '4px',
      '2': '8px',
      '3': '12px',
      '4': '16px',
      '5': '18px',
      '6': '20px',
      '7': '24px',
      '8': '32px',
      '9': '48px',
      '10': '60px',
      '11': '84px',
      '12': '104px',
    },
    borderWidth: {
      '0': '0',
      '0.5': '1px',
      '1': '4px',
      '2': '8px',
      '3': '12px',
      '4': '16px',
      '5': '24px',
      '6': '32px',
      '7': '48px',
    },
    borderRadius: {
      '0': '0',
      '1': '4px',
      '2': '8px',
      '3': '12px',
      '4': '16px',
      '5': '24px',
      '6': '32px',
      '7': '48px',
      '8': '64px',
    }
  },
  plugins: [],
}