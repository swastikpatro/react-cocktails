# React Cocktails

[Live Link](https://react-cocktails-beta.netlify.app/)

Displays various cocktails 🍺 and directs to specific single product pages using react router v6.

## DEMO ▶

https://user-images.githubusercontent.com/113245457/211576387-a3c40203-d397-4a17-bf8f-9c6a2b8a62e0.mp4

## Features:

- Debounced Search with 500ms delay built using custom useDebounce hook.
- Input value gets trimmed before fetching, so to avoid searches including white spaces like ' GG ' => 'GG';
- Fetches all product data, from API and displays on the Home Page.
- For every input value, cocktails with that searched name fetched from API.
- Every Product directs to Single Product Page which inclues info about that product.
- SPA using React Router v6.
- Error Page if user goes to some incorrect url.
- Page Transitions with framer motion.

## Tech Used:

- CSS
- React
- TypeScript
- React Router v6
- Framer Motion
- Axios
- Eslint
