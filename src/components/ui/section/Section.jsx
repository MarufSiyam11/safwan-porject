import Container from "../container/Container";

const Section = ({ children }) => {
  return (
    <section className="pt-[120px]">
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
