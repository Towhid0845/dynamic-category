"use client";
import SearchBar from "./SearchBar";
import TopHeader from "./TopHeader";
import { useEffect } from "react";

function Header() {
  useEffect(() => {
    const timer = setTimeout(() => {
      feather.replace(); // Re-run feather.replace after a short delay
    }, 100); // Delay in milliseconds

    return () => clearTimeout(timer); // Clean up the timer
  }, []); // Re-run whenever categories change
  return (
    <>
      <header className="sticky_top">
        <div className="custom_container">
          <div className="container">
            <div className="row py-2">
              <div className="col-12">
                <TopHeader />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center py-3 py-lg-4">
            <div className="col-12">
              <SearchBar />
            </div>
          </div>
        </div>
      </header>

      <div className="mobile-menu d-block d-lg-none">
        <div className="mobile-menu-overlay"></div>

        <div className="mobile-menu-main">
          <div className="close-m-menu text-end">
            <i data-feather="user" className="text-secondary"></i>
          </div>
          <div className="menu-body">
            <div className="menu-list">
              <ul className="list-unstyled">
                <li className="sub-menu">
                  <a href="index.php">Home</a>
                </li>

                <li className="sub-menu">
                  <a href="#">
                    Shop by Category
                    <i data-feather="chevron-down"></i>
                  </a>
                  <ul className="list-unstyled">
                    <li>
                      <a href="category.php">category 01</a>
                    </li>
                    <li>
                      <a href="category.php">category 02</a>
                    </li>
                    <li>
                      <a href="category.php">category 03</a>
                    </li>
                    <li>
                      <a href="category.php">category 04</a>
                    </li>
                    <li>
                      <a href="category.php">category 05</a>
                    </li>
                  </ul>
                </li>
                <li className="sub-menu">
                  <a href="category.php">Special Offer</a>
                </li>
                <li className="sub-menu">
                  <a href="category.php">All Product</a>
                </li>
                <li className="sub-menu">
                  <a href="#">
                    Brand<i className="fas fa-sort-down float-end"></i>
                  </a>
                  <ul className="list-unstyled">
                    <li>
                      <a href="">brand1</a>
                    </li>
                    <li>
                      <a href="">brand2</a>
                    </li>
                    <li>
                      <a href="">brand3</a>
                    </li>
                    <li>
                      <a href="">brand4</a>
                    </li>
                    <li>
                      <a href="">brand5</a>
                    </li>
                  </ul>
                </li>

                <li className="sub-menu">
                  <a href="contact-us.php">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
