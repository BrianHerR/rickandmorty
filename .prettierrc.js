/** @type {import("prettier").Config} */
const config = {
    semi: false,
    singleQuote: true,
    trailingComma: 'all',
    plugins: ['prettier-plugin-tailwindcss'],
    tailwindConfig: './styles/tailwind.config.js',
}

export default config
