import img from "../../assets/image (12).png";
const ContactFrom = () => {
  return (
    <section className="mt-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full">
            <img className="w-[300] h-[586px] object-cover" src={img} alt="" />
          </div>

          <div className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-[670px] h-auto">
              <h4 className="text-xl text-[#E5745D] inline-block relative pb-2 ml-[52px] after_before">
                Get In Touch
              </h4>
              <h2 className="text-3xl  mb-6">Feel Free to Contact</h2>
              <div>
                <form action="">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        placeholder="Enter Name"
                        className="border-b-2 w-full h-[40px] border-gray-400 placeholder-gray-300 outline-none focus:border-green-400"
                      />
                    </div>
                    <div>
                      <input
                        name="email"
                        id="email"
                        type="text"
                        placeholder="Enter Email"
                        className="border-b-2 w-full h-[40px] border-gray-400 placeholder-gray-300 outline-none focus:border-green-400"
                      />
                    </div>
                    <div>
                      <input
                        name="phone"
                        id="phone"
                        type="text"
                        placeholder="Phone"
                        className="border-b-2 w-full h-[40px] border-gray-400 placeholder-gray-300 outline-none focus:border-green-400"
                      />
                    </div>
                    <div>
                      <input
                        name="subject"
                        id="subject"
                        type="text"
                        placeholder="Subject"
                        className="border-b-2 w-full h-[40px] border-gray-400 placeholder-gray-300 outline-none focus:border-green-400"
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      name="message"
                      id="message"
                      type="text"
                      placeholder="Message"
                      className="border-b-2 w-full h-[40px] border-gray-400 placeholder-gray-300 outline-none focus:border-green-400 mb-6"
                    />
                  </div>
                  <div className="">
                    <button type="Contact Me" className="btn">
                      Contact Me
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFrom;
