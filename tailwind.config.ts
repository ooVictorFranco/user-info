module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Suas extensões de tema aqui
    },
  },
  plugins: [],
  // Importante: adicione isso para garantir que os estilos do Radix UI sejam processados
  safelist: [
    {
      pattern: /^(bg|text|border|ring)-(blue|gray|white)/,
      variants: ['hover', 'focus', 'active'],
    },
  ],
}