import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              Portfolio
            </h1>
            <p className="description">Projects</p>

            <div className="portfolio-wrapper">
              <div className="portfolio-item">
                <img src="" className="portfolio-image" />

                <h4 className="portfolio-name">App</h4>
                <div className="portfolio-category">Mobile Dev</div>
              </div>
              <div className="portfolio-item">
                <img src="" className="portfolio-image" />

                <h4 className="portfolio-name">App</h4>
                <div className="portfolio-category">Mobile Dev</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
