import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "dark": "#181818",
        "darker": "#1d1d1d",
        "darkest": "#101010",
        "mypink": "#FF5F7E",
        "myyellow": "#FFAB4C",
        "midnight-blue": "#000033",
        "mystic-purple": "#660066",
        "starry-silver": "#C0C0C0"
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
export default config
