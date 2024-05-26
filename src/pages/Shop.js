import React, { useState } from "react";
import { products } from "../data/Data";
import { IoMdHeartEmpty, IoMdSearch } from "react-icons/io";
import { BiCart } from "react-icons/bi";
import Modal from "../common/Modal";
import PageHeading from "../common/PageHeading";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Shop = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpen = (productId) => {
    alert(productId);
    setIsModalOpen(productId);
  };
  const handleClose = () => {
    setIsModalOpen(null);
  };

  const [filters, setFilter] = useState({
    categories: [],
    brands: [],
    priceRange: [0, 1500],
  });

  const categoryList = Array.from(
    new Set(products.map((product) => product.category))
  );

  const brandList = Array.from(
    new Set(products.map((product) => product.brand))
  );

  const filterProducts = products.filter((product) => {
    if (
      filters.categories.length > 0 &&
      !filters.categories.includes(product.category)
    )
      return false;

    if (filters.brands.length > 0 && !filters.brands.includes(product.brand))
      return false;

    const price = parseFloat(product.price);

    if (price < filters.priceRange[0] || price > filters.priceRange[1])
      return false;

    return true;
  });

  const handlePriceChange = (value) => {
    setFilter({ ...filters, priceRange: value });
  };

  const handleCheckboxChange = (filterType, value) => {
    const updatedFilter = [...filters[filterType]];
    const index = updatedFilter.indexOf(value);
    if (index === -1) {
      updatedFilter.push(value);
    } else {
      updatedFilter.splice(index, 1);
    }
    setFilter({ ...filters, [filterType]: updatedFilter });
  };
  return (
    <div>
      <div>
        <PageHeading home={"Home"} pagename={"Shop"} />
      </div>

      <div className="flex w-10/12 m-auto items-start mt-8">
        <div className="filterproduct w-1/4 bg-white shadow-lg p-4">
          <div>
            <div className="my-4">
              <h1 className="text-4xl font-semibold">Filter</h1>
            </div>

            <div className="my-4">
              <h1 className="text-3xl mb-3 font-semibold">Price</h1>

              <div>
                <Slider
                  min={0}
                  max={1500}
                  range
                  defaultValue={filters.priceRange}
                  onChange={handlePriceChange}
                />

                <div className="flex justify-between">
                  <span>Min Price :$ {filters.priceRange[0]}</span>
                  <span>Max Price :$ {filters.priceRange[1]}</span>
                </div>
              </div>
            </div>

            <div className="my-4">
              <h1 className="text-3xl mb-3 font-semibold">By Category</h1>

              <div>
                {categoryList.map((cate, key) => (
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.categories.includes(cate)}
                      onChange={() => handleCheckboxChange("categories", cate)}
                    />
                    <div>{cate}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="my-4">
              <h1 className="text-3xl mb-3 font-semibold">By brands</h1>

              <div>
                {brandList.map((brand, key) => (
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.brands.includes(brand)}
                      onChange={() => handleCheckboxChange("brands", brand)}
                    />
                    <div>{brand}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-8/12 m-auto">
          <div className="grid grid-cols-3 gap-3">
            {filterProducts.map((item, key) => (
              <div key={key} className="mt-8">
                <div className="overflow-hidden relative ml-4">
                  <div className="image-container relative">
                    <div className="rounded-3xl">
                      <img src={item.img} alt="item" className="rounded-3xl" />
                    </div>

                    <div className="absolute top-0 right-0 m-4 opacity-0">
                      <div className="bg-white p-4 rounded-full mb-2">
                        <IoMdHeartEmpty />
                      </div>
                      <div className="bg-white p-4 rounded-full">
                        <IoMdSearch />
                      </div>
                    </div>

                    <div className="opacity-0 absolute -bottom-3 right-0 bg-white p-4 rounded-s-2xl">
                      <div className="bg-black text-white h-10 w-10 grid place-items-center rounded-3xl">
                        <button
                          className="text-2xl"
                          onClick={() => handleOpen(item.id)}
                        >
                          <BiCart />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="product-details mt-2">
                    <p className="mb-2">{item.title}</p>
                    <p>${item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal
        isModalOpen={isModalOpen}
        data={products.find((item) => item.id === isModalOpen)}
        handleClose={handleClose}
      />
    </div>
  );
};

export default Shop;
