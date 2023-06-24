import React from 'react';
import { useQuery } from "@tanstack/react-query";
import { useState } from 'react';
import swal from "sweetalert";

const MyProducts = () => {

  const [toggle, setToggle] = useState(false)

      const { data: products = [], refetch } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
          const res = await fetch(`http://localhost:5000/products`);
          const data = await res.json();
          return data;
        },
      });
console.log(products);
      const handleDelete = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/products/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
            }
          });
      };

       const handleProductStatus = (id) => {
         console.log(id);
         fetch(`http://localhost:5000/products/public/${id}`, {
           method: "PUT",
         })
           .then((res) => res.json())
           .then((data) => {
             if (data.modifiedCount > 0) {
               swal({
                 title: `boost Successful ${data.title}`,
                 icon: "success",
                 button: "ok",
               });
               refetch();
             }
           });
       };

const handleProductPublish =() =>{
  setToggle(!toggle)
  console.log(toggle);
}

    return (
      <div>
        <div className="w-[80%] mx-auto">
          <h1 className="text-2xl font-bold my-10">All Products</h1>

          <div className="lg:w-2/2 w-full mx-auto overflow-auto">
            <table className="table w-full whitespace-no-wrap">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Photo</th>
                  <th>Product Name</th>
                  <th>brand Name</th>
                  <th>Discount</th>
                  <th className="text-rose-500">Original</th>
                  <th>condition</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                {products?.map((product, i) => (
                  <tr>
                    <th>{i + 1}</th>
                    <td>
                      <img
                        src={product?.thumbnail}
                        className="w-12 h-12 rounded-full"
                        alt="doctor.name"
                      />
                    </td>
                    <td>{product?.title}</td>
                    <td>{product?.brand}</td>
                    <td>{product?.discountPrice}</td>
                    <td className="text-rose-500">{product?.originalPrice}</td>
                    {product?.boostStatus !== "boost" ? (
                      <td>
                        {/* <button
                          //   onClick={() => handleBoost(product._id)}
                          className="btn btn-sm btn-error "
                        >
                          unpublished
                        </button> */}
                        <input
                          onClick={() => handleProductStatus(product._id)}
                          type="checkbox"
                          className="toggle toggle-success"
                        />
                      </td>
                    ) : (
                      <td>
                        <button className="btn btn-sm btn-success ">
                          published
                        </button>
                      </td>
                    )}
                    <td>
                      <button
                        onClick={() => handleDelete(product?._id)}
                        className="btn btn-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default MyProducts;