const ServiceCard = ({ title, des, icon }) => {
  return (
    <div>
      <div>
        <img src={icon} alt="icon" />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{des}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
