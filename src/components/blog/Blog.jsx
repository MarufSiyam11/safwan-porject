import SectionTitle from "../section-Title/SectionTitle";
import img1 from "../../assets/blog1.jpeg";
import img2 from "../../assets/blog2.jpg";
import img3 from "../../assets/blog3.jpeg";
import BlogCard from "../card/BlogCard";
const blogData = [
  {
    id: 1,
    name: "By David William",
    date: "Mar 8 2022",
    image: img1,
    title: "Quis autem vea eum iure reprehenderit.",

    des: "Dolor repellendus temporibus autem rerum quibusdam officiis debitis nece.",
  },
  {
    id: 2,
    name: "By Will Doie",
    date: "Mar 8 2022",
    image: img2,
    title: "Reprehenderit in voutavelit esse cillum.",
    des: "Dolor repellendus temporibus autem rerum quibusdam officiis debitis nece.",
  },
  {
    id: 3,
    name: "By Adam Smith",
    date: "Mar 8 2022",
    image: img3,
    title: "Soluta nobis ose aligenoptio cumue.",
    des: "Dolor repellendus temporibus autem rerum quibusdam officiis debitis nece.",
  },
];
const Blog = () => {
  return (
    <section className="mt-20">
      <div className="container">
        <div>
          <SectionTitle title="Letest Blogs" des="Blog & Articles" />
        </div>
        <div className="pt-10">
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
            {blogData?.map((data) => (
              <BlogCard key={data.id} data={data} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
