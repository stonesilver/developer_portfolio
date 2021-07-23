import Layout from '../components/Layout/Layout.component';
import NavBar from '../components/navbar/Navbar.component';
import Footer from '../components/Footer/Footer.component'
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </>
  );
}

export default MyApp;
