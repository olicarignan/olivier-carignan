import 'tailwindcss/tailwind.css'
import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="dark:bg-grey dark:text-white">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
