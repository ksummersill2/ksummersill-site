import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    title: 'The Evolution of DevSecOps in Government IT',
    date: 'May 15, 2023',
    excerpt:
      'Exploring how DevSecOps practices are transforming government IT operations and enhancing security.',
  },
  {
    title: 'Securing Cloud Infrastructure: Lessons from the Frontlines',
    date: 'June 2, 2023',
    excerpt:
      'Key insights and best practices for maintaining robust security in cloud environments, based on real-world experiences.',
  },
  {
    title: 'From Graphic Design to DevOps: A Journey of Continuous Learning',
    date: 'July 10, 2023',
    excerpt:
      'My personal story of career evolution and the importance of adaptability in the ever-changing tech landscape.',
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">Latest Insights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <div className="flex items-center text-gray-400 mb-4">
                <Calendar className="mr-2" size={16} />
                <span>{post.date}</span>
              </div>
              <p className="text-gray-300 mb-4">{post.excerpt}</p>
              <Link
                to="/blog"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition duration-300"
              >
                Read more <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link
          to="/blog"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 inline-flex items-center"
        >
          View All Posts <ArrowRight className="ml-2" size={16} />
        </Link>
      </div>
    </section>
  );
};

export default Blog;