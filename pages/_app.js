import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import 'tailwindcss/tailwind.css';

NProgress.configure({
  showSpinner: false,
  template:
    '<div class="bar" role="bar"></div><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
});
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
