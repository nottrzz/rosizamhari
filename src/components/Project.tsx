import { Button } from "./Button";
import { Card, CardContent } from "./Card";

const projects = [
  {
    id: 1,
    title: "Sistem Aplikasi Pembayaran Spp",
    description: "A web-based tuition payment system that simplifies school administration by enabling students to pay securely and allowing administrators to track, manage, and report payments with ease.",
    image: "https://a.top4top.io/p_3536ead1a1.png",
    link: "#",
  },
  {
    id: 2,
    title: "Website Kebab",
    description: "A modern and responsive kebab website designed to showcase the menu, highlight special offers, and provide customers with an easy way to order their favorite meals online.",
    image: "https://d.top4top.io/p_35367r4jl1.png",
    link: "https://dev-kebabbanget.pantheonsite.io",
  },
  {
    id: 3,
    title: "GoldenLeaf",
    description: "Golden Leaf” is a sleek and responsive website crafted to showcase premium tobacco products, highlight their quality, and build stronger connections with customers.",
    image: "https://f.top4top.io/p_3536iguwy1.png",
    link: "https://glf.kesug.com/?i=1",
  },
];

export default function ProjectsSection() {
  return (
    <section className=" text-white py-16" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Projects</h2>
        <p className="text-center text-gray-400 mb-12 text-base sm:text-lg">
          A showcase of my recent works and experiments
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((proj) => (
            <Card
              key={proj.id}
              className="bg-gray-800 border-none shadow-lg hover:shadow-xl transition rounded-2xl overflow-hidden flex flex-col transform hover:-translate-y-1 duration-300"
            //   style={{ animation: `fadeInUp 0.6s ease ${index * 0.2}s both` }}
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="flex-1 flex flex-col justify-between p-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{proj.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm sm:text-base">{proj.description}</p>
                </div>
                <Button className="bg-gray-700 text-white hover:bg-gray-600 w-full mt-auto">
                  <a href={proj.link} target="_blank" rel="noopener noreferrer">
                    View
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
