import img from "../../assets/blank.png";
const ContactFrom = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-2 gap-6">
          <div className="w-full">
            <img
              className="h-[470px] w-[586px] object-cover"
              src={img}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFrom;
