import React, { useState } from 'react'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
      });

      const [message, setMessage] = useState(false)
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true)
      };
    
      return (
        <div>
            <div className='relative'>
            <img className='brightness-75 grayscale object-cover h-[40vh] object-left-bottom w-full' src='https://lella.qodeinteractive.com/wp-content/uploads/2019/08/title-area-img-1.jpg'></img>
            <h2 className="absolute h-full top-0 flex items-center left-1/2 -translate-x-1/2 text-center py-4 text-6xl text-red-800">Contact Us</h2>
        </div>
        <div className="max-w-xl mx-auto p-6 text-red-800">
          <p className='text-xl'>We'd love to hear from you! Fill out the form below to get in touch with us.</p>
    
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-4">
              <label htmlFor="name" className="block text-xl">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-neutral-300 border-red-800 w-full px-3 py-2 border"
              />
            </div>
    
            <div className="mb-4">
              <label htmlFor="email" className="block text-xl">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-neutral-300 border-red-800 w-full px-3 py-2 border"
              />
            </div>
    
            <div className="mb-4">
              <label htmlFor="phone" className="block text-xl">Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="bg-neutral-300 border-red-800 w-full px-3 py-2 border"
              />
            </div>
    
            <div className="mb-4">
              <label htmlFor="message" className="block text-xl">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
                className="bg-neutral-300 border-red-800 w-full px-3 py-2 border"
              ></textarea>
            </div>
    
            <button
              type="submit"
              className="bg-red-800 text-white py-2 px-4 hover:bg-red-600"
            >
              Submit
            </button>
            {message ? <p className='text-3xl py-4'>Thanks! we will get in touch with you soon.</p> : null}
          </form>
        </div>
        </div>
  )
}

export default Contact