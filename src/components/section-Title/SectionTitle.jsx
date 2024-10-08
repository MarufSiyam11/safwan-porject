const SectionTitle = ({ center = true }) => {
  return (
    <div className={center && "text-center"}>
      <h4 className="text-xl font-medium text-secondary pb-2">MY SERVICES</h4>
      <h2 className="text-3xl font-medium text-primary_text">
        Provide Wide Range of Digital Services
      </h2>
    </div>
  );
};

export default SectionTitle;
