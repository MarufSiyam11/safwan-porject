const SectionTitle = ({ center = true, title, des, maxWidth }) => {
  return (
    <div className={center && "text-center"}>
      <h4 className="text-lg uppercase md:text-xl font-medium text-secondary pb-2 inline-block ml-[52px] relative after_before">
        {title}
      </h4>
      <h2
        className={`text-2xl font-medium text-primary_text xl:text-[50px] leading-tight  ${maxWidth} ${
          center && "mx-auto"
        }`}
      >
        {des}
      </h2>
    </div>
  );
};

export default SectionTitle;
