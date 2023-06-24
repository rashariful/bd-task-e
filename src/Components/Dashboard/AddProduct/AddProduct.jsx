import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaUpload } from "react-icons/fa";
import { useContext } from "react";
import swal from "sweetalert";
import { AuthContext } from "../../../Context/UserContext";


const AddProduct = () => {

  const imgHostKey = process.env.REACT_APP_Imgbb_Key;
  const { user } = useContext(AuthContext);
  const email = user.email;
  const sellerName = user.displayName;
  const navigate = useNavigate();
  const time = new Date();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLoginSubmit = (data) => {
    const image = data.img[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
    console.log(url);

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgdata) => {
        
        if (imgdata.success) {
          const products = {
            title: data.title,
            brand: data.brand,
            category: data.category,
            discountPrice: data.discountPrice,
            originalPrice: data.originalPrice,
            stock: data.stock,
            condition: data.condition,
            description: data.description,
            thumbnail: imgdata.data.url,
          };

          console.log(products);

          fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
              "CONTENT-TYPE": "application/json",
            },
            body: JSON.stringify(products),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              swal({
                title: `Successful added ${products.title}`,
                icon: "success",
                button: "ok",
              });
              //   navigate("/dashboard/myproducts");
            });
        }
      });
  };

  return (
    <div>
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <h2 className="text-gray-600 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">
            Add Product
          </h2>
          <p className="text-rose-800   font-bold text-center mb-4 md:mb-4"></p>

          <form
            onSubmit={handleSubmit(handleLoginSubmit)}
            className="max-w-2xl border rounded-lg mx-auto shadow-md"
          >
            <div className="grid grid-cols-2 gap-5 p-5">
              {/* Brand Name */}
              <div>
                <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                  Product Name
                </label>
                <input
                  className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  {...register("title", {
                    required: "Name is required",
                  })}
                />
                {errors.title && (
                  <p className="text-red-500">{errors.title.message}</p>
                )}
              </div>

              {/* category */}
              <div>
                <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                  Category
                </label>
                <select
                  {...register("category", {
                    required: "category is required",
                  })}
                  className="select capitalize border border-gray-200 w-full bg-gray-50 text-gray-800 focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                >
                  <option>phones-gadgets</option>
                  <option>computer-office-security</option>
                  <option>grocery-organic-dairy</option>
                  <option>womens-fashion</option>
                  <option>mens-fashion</option>
                  <option>kids-babies-toys</option>
                  <option>beauty-health-hair</option>
                  <option>others</option>
                </select>

                {errors.category && (
                  <p className="text-red-500">{errors.category.message}</p>
                )}
              </div>
              {/* Brand Name */}
              <div>
                <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                  Brand Name
                </label>
                <input
                  className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  {...register("brand", {
                    required: "Brand name is required",
                  })}
                />
                {errors.brand && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>

              {/* discountPrice */}
              <div>
                <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                  Discount Price
                </label>
                <input
                  className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  {...register("discountPrice", {
                    required: "Resale price is required",
                  })}
                />
                {errors.discountPrice && (
                  <p className="text-red-500">{errors.discountPrice.message}</p>
                )}
              </div>
              {/* Original Price */}
              <div>
                <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                  Original Price
                </label>
                <input
                  className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  {...register("originalPrice", {
                    required: "Original price is required",
                  })}
                />
                {errors.originalPrice && (
                  <p className="text-red-500">{errors.originalPrice.message}</p>
                )}
              </div>
              {/*stock */}
              <div>
                <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                  Stock
                </label>
                <input
                  className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  {...register("stock", {
                    required: "stock is required",
                  })}
                />
                {errors.stock && (
                  <p className="text-red-500">{errors.stock.message}</p>
                )}
              </div>
              {/* Condition */}

              <div>
                <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                  Condition
                </label>
                <div className="flex  gap-3">
                  <div>
                    <label className="label cursor-pointer ">
                      <span className="label-text mr-3">Original</span>
                      <input
                        {...register("condition")}
                        type="radio"
                        value="original"
                      />
                    </label>
                  </div>
                  <div>
                    <label className="label cursor-pointer ">
                      <span className="label-text mr-3">Copy</span>
                      <input
                        {...register("condition")}
                        type="radio"
                        value="copy"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* description  and img*/}
            <div className="py-5 px-5">
              <div>
                <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                  Description
                </label>
                <textarea
                  className="textarea textarea-bordered w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  {...register("description", {
                    required: "description is required",
                  })}
                  placeholder="description"
                ></textarea>

                {errors.description && (
                  <p className="text-red-500">{errors.description.message}</p>
                )}
              </div>
              {/* image file */}
              <div className="mt-5">
                <div className="flex items-center justify-center w-full">
                  <label
                    for="dropzone-file"
                    className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        aria-hidden="true"
                        className="w-10 h-10 mb-3 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <FaUpload></FaUpload>
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span> or
                        drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      multiple="true"
                      className="hidden w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      {...register("img", {
                        // required: "image is required",
                      })}
                    />
                  </label>
                </div>

                {errors.img && (
                  <p className="text-red-500">{errors.img.message}</p>
                )}

                {/* here end */}
              </div>
            </div>

            <div className="flex justify-center">
              <button className="btn btn-primary w-52  my-5">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
