import React, { useState, useEffect } from 'react';
import { Calendar, ArrowLeft, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

// This would typically come from a database or API
const initialBlogPosts = [
  {
    id: 1,
    title: 'Quantum Computing and DevOps: Preparing for the Next Frontier',
    date: 'August 5, 2023',
    excerpt: 'As quantum computing advances, DevOps practices must evolve. Explore how quantum technologies will reshape our approach to software development and deployment.',
    content: `The intersection of quantum computing and DevOps presents both exciting opportunities and unique challenges. As quantum computers become more powerful and accessible, DevOps teams must adapt their practices to harness this revolutionary technology.

    Key areas of focus include:
    1. Quantum-safe cryptography implementation
    2. Hybrid classical-quantum CI/CD pipelines
    3. Quantum algorithm optimization and testing strategies
    4. Quantum-aware infrastructure as code

    By staying ahead of the curve, organizations can position themselves to leverage quantum advantages in areas such as complex system modeling, optimization problems, and secure communications.`,
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 2,
    title: 'AI-Driven DevOps: Enhancing Efficiency and Decision Making',
    date: 'September 12, 2023',
    excerpt: 'Artificial Intelligence is revolutionizing DevOps practices. Discover how AI-powered tools are streamlining workflows, predicting issues, and optimizing resource allocation.',
    content: `The integration of Artificial Intelligence into DevOps workflows is transforming how teams develop, deploy, and maintain software. AI-driven DevOps tools are enhancing efficiency, improving decision-making, and enabling predictive maintenance.

    Key benefits of AI in DevOps include:
    1. Automated anomaly detection and root cause analysis
    2. Intelligent resource allocation and scaling
    3. Predictive testing and quality assurance
    4. Natural language processing for improved collaboration and documentation

    By leveraging AI, DevOps teams can focus on high-value tasks while reducing manual errors and accelerating delivery cycles. The future of DevOps is intelligent, adaptive, and increasingly autonomous.`,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 3,
    title: 'The Rise of DevSecOps: Integrating Security at Every Stage',
    date: 'October 20, 2023',
    excerpt: 'Security can no longer be an afterthought. Learn how DevSecOps is changing the game by embedding security practices throughout the entire software development lifecycle.',
    content: `DevSecOps represents a paradigm shift in how organizations approach security in software development. By integrating security practices at every stage of the DevOps pipeline, teams can build more resilient systems and respond faster to emerging threats.

    Key principles of DevSecOps include:
    1. Shift-left security testing and continuous vulnerability assessment
    2. Automated security policy enforcement
    3. Secure infrastructure as code practices
    4. Collaborative security culture and shared responsibility

    Implementing DevSecOps not only improves an organization's security posture but also accelerates delivery by catching and addressing security issues early in the development process. In an era of increasing cyber threats, DevSecOps is becoming not just a best practice, but a necessity for modern software development.`,
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
];

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState(initialBlogPosts);
  const [showNewPostForm, setShowNewPostForm] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    excerpt: '',
    content: '',
    image: '',
  });

  useEffect(() => {
    // Here you would typically fetch blog posts from an API
    // For now, we're using the initial state
  }, []);

  const handleInputChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlogPost = {
      id: blogPosts.length + 1,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      ...newPost,
    };
    setBlogPosts([newBlogPost, ...blogPosts]);
    setShowNewPostForm(false);
    setNewPost({ title: '', excerpt: '', content: '', image: '' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8">
          <ArrowLeft className="mr-2" size={20} />
          Back to Home
        </Link>
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold">DevOps Insights</h1>
          <button
            onClick={() => setShowNewPostForm(!showNewPostForm)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 flex items-center"
          >
            <Plus size={20} className="mr-2" />
            New Post
          </button>
        </div>

        {showNewPostForm && (
          <form onSubmit={handleSubmit} className="mb-12 bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Add New Blog Post</h2>
            <div className="mb-4">
              <label htmlFor="title" className="block mb-2">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={newPost.title}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-700 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="excerpt" className="block mb-2">Excerpt</label>
              <textarea
                id="excerpt"
                name="excerpt"
                value={newPost.excerpt}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-700 rounded"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="content" className="block mb-2">Content</label>
              <textarea
                id="content"
                name="content"
                value={newPost.content}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-700 rounded"
                rows="6"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="image" className="block mb-2">Image URL</label>
              <input
                type="url"
                id="image"
                name="image"
                value={newPost.image}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-700 rounded"
                required
              />
            </div>
            <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300">
              Add Post
            </button>
          </form>
        )}

        {blogPosts.map((post) => (
          <article key={post.id} className="mb-16 bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
            <div className="p-8">
              <h2 className="text-3xl font-semibold mb-4">{post.title}</h2>
              <div className="flex items-center text-gray-400 mb-4">
                <Calendar className="mr-2" size={16} />
                <span>{post.date}</span>
              </div>
              <p className="text-xl mb-6">{post.excerpt}</p>
              <div className="text-gray-300">{post.content}</div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;