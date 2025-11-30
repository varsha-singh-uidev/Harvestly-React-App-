import React, {useState} from 'react'

const ContactUs = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const isFormValid = name !== "" && email !== "" && text !== "";
  
  function formHandler(e){
    e.preventDefault;
    alert("your message has been sent");
  }
  return (
    <>
      <div className="mt-30">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Banner */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold text-[#2E573A] tracking-wide drop-shadow-md">
              Get in Touch
            </h1>
            <p className="mt-2 text-lg text-[#555]">
              We’d love to hear from you — reach out anytime
            </p>
          </div>
           {/* layout the two container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Company Information */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <img src="./Product/location.png" alt="location" className="w-6 h-6" />
                <p className="text-[#2E573A] font-medium">
                  123 Campsite Avenue, Wilderness, CA 98765
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img src="./Product/email.png" alt="email" className="w-6 h-6" />
                <p className="text-[#2E573A] font-medium">harvestlypure@gmail.com</p>
              </div>
              <div className="flex items-center gap-4">
                <img src="./Product/call.png" alt="customer care" className="w-6 h-6" />
                <p className="text-[#2E573A] font-medium">(123) 456-78909</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#F9FBF9] border border-[#c7edc7] rounded-xl shadow-md p-6">
              <form className="space-y-4" onSubmit={formHandler}>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-[#BDE3BD] rounded-md px-4 py-2 focus:outline-none focus:border-[#23CA55] text-[#2E573A]"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-[#BDE3BD] rounded-md px-4 py-2 focus:outline-none focus:border-[#23CA55] text-[#2E573A]"
                />
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="w-full border border-[#BDE3BD] rounded-md px-4 py-2 focus:outline-none focus:border-[#23CA55] text-[#2E573A]"
                ></textarea>
                <button
                  type="submit"
                  disabled={!isFormValid} 
                  className={`w-full text-white font-semibold py-2 rounded-md transition-all duration-200 
                            ${isFormValid 
                              ? "bg-[#23CA55] hover:bg-[#1B9E45] text-white cursor-pointer"
                              : "bg-gray-400 text-gray-700 cursor-not-allowed"
                            }`}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs