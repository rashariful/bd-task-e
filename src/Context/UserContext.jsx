import React, { createContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  FacebookAuthProvider,

} from "firebase/auth";
import app from "../firebase/firebase.config";
import { useQuery } from "@tanstack/react-query";

export const AuthContext = createContext();
const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();
const FacebookProvider = new FacebookAuthProvider();


const UserContext = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  
   const [cart, setCart] = useState([]);
  //  console.log(cart);

   const { data: products = [], refetch } = useQuery({
     queryKey: ["products"],
     queryFn: async () => {
       const res = await fetch(`https://dummyjson.com/products`);
       const data = await res.json();
       return data;
     },
   });
 
  //  console.log(products);
   // add to cart function
   const addToCart = (data) => {
     setCart([...cart, { ...data, quantity: 1 }]);
   };
   // item remove from cart
  function removeFromCart(id) {
    setCart((cart) => {
      return cart.filter((item) => item._id !== id);
    });
  }

    function increaseCartQuantity(id) {
      setCart((cart) => {
        if (cart.find((item) => item.id === id) == null) {
          return [...cart, { id, quantity: 1 }];
        } else {
          return cart.map((item) => {
            if (item._id === id) {
              return { ...item, quantity: item.quantity + 1 };
            } else {
              return item;
            }
          });
        }
      });
    }

  // 01 This function for register user
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };


  // 02 This is for register with google account
  const registerUserWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, GoogleProvider);
  };

  // 03 This is for login user
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // 04 this is for sign in with google
  const signInUserWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, GoogleProvider);
  };

  // 05 this is for log out
  const logoutUser = () => {
    setLoading(true);
    return signOut(auth)
    
  };
  // 06 this is for login by facebook
 const singInUserWithFacebook = () =>{
  setLoading(true)
  return signInWithPopup(auth, FacebookProvider);
 }
 
  // 08 use effect
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      currentUser ? setUser(currentUser) : setUser(null);

      setError("");
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    setUser,
    loading,
    error,
    setError,
    registerUser,
    registerUserWithGoogle,
    singInUserWithFacebook,
    signInUser,
    signInUserWithGoogle,
    logoutUser,
    products,
    addToCart,
    cart,
    removeFromCart,
    increaseCartQuantity,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
