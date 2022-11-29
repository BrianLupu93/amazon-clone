import React from "react";
import Product from "../product/Product";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
          className="home__image"
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="Learning React: Modern Patterns for Developing React Apps"
            price={48.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/91uFdkCJmAL._AC_UY218_.jpg"
          />
          <Product
            id="4903853"
            title="SAMSUNG Galaxy Z Fold 4 Cell Phone, Factory Unlocked Android Smartphone, 512GB, Flex Mode, Hands Free Video, Foldable Display, Gray Green"
            price={1575.49}
            rating={5}
            image="https://m.media-amazon.com/images/I/71a87teD1KL._AC_UY218_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung CF390 Series 27 inch FHD 1920x1080 Curved Desktop Monitor for Business, HDMI, VGA, VESA mountable, 3-Year Warranty, TAA (C27F390FHN), Black"
            price={175.49}
            rating={4}
            image="https://m.media-amazon.com/images/I/91SZVWfPjdL._AC_UY218_.jpg"
          />
          <Product
            id="4903830"
            title="Razer Anzu Smart Glasses: Blue Light Filtering & Polarized Sunglass Lenses "
            price={39.59}
            rating={3}
            image="https://m.media-amazon.com/images/I/51oCaTt3reL._AC_UL320_.jpg"
          />
          <Product
            id="4903836"
            title="SAMSUNG Galaxy Watch 5 Pro 45mm Bluetooth Smartwatch w/ Body, Health, Fitness and Sleep Tracker, Improved Battery, Sapphire Crystal Glass, GPS Route Tracking"
            price={399.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/61Sl+xoVHoL._AC_UY218_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903336"
            title="SAMSUNG Odyssey CRG Series 49-Inch Dual QHD (5120x1440) Gaming Monitor, 120Hz, Curved, QLED, HDR, Height Adjustable Stand, Radeon FreeSync (LC49RG90SSNXZA)"
            price={999.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81QEJYyspjL._AC_SX679_.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
