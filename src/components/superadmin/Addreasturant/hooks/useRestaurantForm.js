import { useState } from 'react';

export const useRestaurantForm = () => {
  const [formData, setFormData] = useState({
    restaurantName: '',
    ownerName: '',
    email: '',
    password: '',
    phone: '',
    slug: '',
    restaurantPhone: '',
    pinCode: '',
    city: '',
    state: '',
    address: '',
    termsAccepted: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const resetForm = () => {
    setFormData({
      restaurantName: '',
      ownerName: '',
      email: '',
      password: '',
      phone: '',
      slug: '',
      restaurantPhone: '',
      pinCode: '',
      city: '',
      state: '',
      address: '',
      termsAccepted: false
    });
  };

  return {
    formData,
    handleChange,
    resetForm
  };
};
