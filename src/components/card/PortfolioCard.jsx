const PortfolioCard = ({ data }) => {
  return (
    <div className="w-350px md:w-[570px] h-[520px] mx-auto ">
      <div>
        <img className="w-[570px] h-[420px]" src={data.image} alt="" />
      </div>
      <div className="bg-primary_text text-white p-3">
        <h3 className="text-white text-2xl">{data.title}</h3>
        <p className="text-white ">{data.des}</p>
        {/* <p className="text-white">{data.category}</p> */}
        <a href="">{data.link}</a>
      </div>
    </div>
  );
};

export default PortfolioCard;
