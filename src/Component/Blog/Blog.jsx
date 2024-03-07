function Blog() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-10 mt-28">Travel Blog</h1>
      <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-5">
        {blogs.map((blog, inx) => (
          <div key={inx} className="shadow-2xl mx-auto w-[350px]">
            <img src={blog.image} alt="" />
            <div className="p-5">
              <div className="flex my-2">
                <p className="text-xs uppercase text-yellow-300 mr-auto">
                  {blog.travel}
                </p>
                <p>{blog.date}</p>
              </div>
              <p className="text-xl font-medium mb-5">{blog.text}</p>
              <div className="flex items-center">
                <div className="items-center flex">
                  <img
                    className="rounded-full w-8 h-8 mr-3"
                    src={blog.author}
                    alt=""
                  />
                  <p>{blog.name}</p>
                </div>
                <button className="ml-auto text-yellow-400">Learn More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;

const blogs = [
  {
    image: "https://i.ibb.co/F8MFnXn/Rectangle-18.png",
    travel: "Work And Travel",
    date: "16 septembar 23",
    text: "Embaracing The Digital Nomad Lifestyle The Digital Nomad Thr....",
    author: "https://i.ibb.co/SybKkYx/Rectangle-32.png",
    name: "Ys Stafe",
  },
  {
    image: "https://i.ibb.co/qN8xmh7/Rectangle-18-2.png",
    travel: "Historial",
    date: "16 septembar 23",
    text: "Embaracing The Digital Nomad Lifestyle The Digital Nomad Thr....",
    author: "https://i.ibb.co/5sRZM8R/Rectangle-30.png",
    name: "Ys Stafe",
  },
  {
    image: "https://i.ibb.co/d4SCB0V/Rectangle-18-1.png",
    travel: "Sustainable tourism",
    date: "16 septembar 23",
    text: "Embaracing The Digital Nomad Lifestyle The Digital Nomad Thr....",
    author: "https://i.ibb.co/p3Cb1Lw/Rectangle-33.png",
    name: "Ys Stafe",
  },
];
