import React from 'react';
import { Code, Server, Shield, Database, Cloud, GitBranch } from 'lucide-react';

const products = [
  {
    title: 'AWS Infrastructure Terraform Script',
    description: 'Set up a production-ready AWS environment in minutes. This script includes:',
    features: [
      'VPC with public and private subnets across multiple AZs',
      'EC2 instances with auto-scaling groups',
      'RDS database with multi-AZ setup',
      'S3 buckets with proper encryption and access policies',
      'CloudFront distribution for content delivery',
      'IAM roles and policies for secure access management'
    ],
    icon: <Server className="w-12 h-12 text-blue-400 mb-4" />,
    gumroadLink: 'https://gum.co/your-aws-script-link'
  },
  {
    title: 'Azure DevOps Pipeline Terraform Script',
    description: 'Streamline your CI/CD process with this comprehensive Azure DevOps setup:',
    features: [
      'Git repositories with branch policies',
      'Build pipelines for multiple programming languages',
      'Release pipelines with staging and production environments',
      'Integration with Azure Key Vault for secrets management',
      'Artifact management and versioning',
      'Automated testing and code quality checks'
    ],
    icon: <GitBranch className="w-12 h-12 text-purple-400 mb-4" />,
    gumroadLink: 'https://gum.co/your-azure-devops-script-link'
  },
  {
    title: 'GCP Security Terraform Script',
    description: 'Enhance your Google Cloud Platform security posture with:',
    features: [
      'VPC Service Controls for resource isolation',
      'Cloud IAM roles with least privilege access',
      'Cloud Armor for DDoS protection and WAF',
      'Security Command Center premium setup',
      'Cloud KMS for encryption key management',
      'Logging and monitoring with Cloud Audit Logs and Cloud Monitoring'
    ],
    icon: <Shield className="w-12 h-12 text-green-400 mb-4" />,
    gumroadLink: 'https://gum.co/your-gcp-security-script-link'
  }
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Terraform Scripts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col h-full">
              <div className="flex justify-center">{product.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-center text-white">{product.title}</h3>
              <p className="text-gray-300 mb-4">{product.description}</p>
              <ul className="text-gray-400 mb-6 flex-grow">
                {product.features.map((feature, i) => (
                  <li key={i} className="mb-2 flex items-start">
                    <Cloud className="mr-2 flex-shrink-0 mt-1" size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center mt-auto">
                <a
                  href={product.gumroadLink}
                  className="gumroad-button bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy on Gumroad
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;