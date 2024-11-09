
"use client";
import { useState, useEffect } from "react";
import feather from "feather-icons";

function Banner() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://api.shope.com.bd/api/v1/public/hero-categories"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setCategories(data);
        } else {
          console.error("Expected an array of categories, but received:", data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      feather.replace(); // Re-run feather.replace after a short delay
    }, 100); // Delay in milliseconds

    return () => clearTimeout(timer); // Clean up the timer
  }, [categories]); // Re-run whenever categories change

  

  const renderCategories = (categories) => {
    // Filter the categories to get the top-level categories (without parent_id)
    const topLevelCategories = categories.filter(
      (category) => category.parent_id === null
    );

    return (
      <ul>
        {topLevelCategories.map((category) => (
          <li key={category.id}>
            <a
              href={category.link}
              className="d-flex justify-content-between align-items-center"
            >
              {category.title}
              {category.childrens && category.childrens.length > 0 && (
                <i data-feather="chevron-right" className="text-end"></i>
              )}
            </a>

            {/* Render second layer (children) */}
            {category.childrens && category.childrens.length > 0 && (
              <ul>
                {category.childrens.map((childCategory) => (
                  <li key={childCategory.id}>
                    <a
                      href={childCategory.link}
                      className="d-flex justify-content-between align-items-center"
                    >
                      {childCategory.title}
                      {childCategory.childrens &&
                        childCategory.childrens.length > 0 && (
                          <i
                            data-feather="chevron-right"
                            className="text-end"
                          ></i>
                        )}
                    </a>

                    {/* Render third layer (grandchildren) */}
                    {childCategory.childrens &&
                      childCategory.childrens.length > 0 && (
                        <ul>
                          {childCategory.childrens.map((grandChildCategory) => (
                            <li key={grandChildCategory.id}>
                              <a href={grandChildCategory.link}>
                                {grandChildCategory.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <section
      className="banner"
      style={{ backgroundImage: "url(/images/banner.png)" }}
    >
      <div className="container position-relative">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="nav-side-menu">
              <div className="dropdown-side-menu">
                {categories.length > 0 ? (
                  renderCategories(categories) // Render categories once loaded
                ) : (
                  <p>Loading categories...</p> // Show loading message until categories are fetched
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
