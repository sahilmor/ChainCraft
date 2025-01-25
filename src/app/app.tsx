import React, { useState } from 'react';
import { Send, Download, Code2, Loader } from 'lucide-react';
import { Header } from '@/components/app/Header';
import { Stars } from '@/components/app/Background';
import FeatureCard from '@/components/app/FeatureCard';
import FeatureListCard from '@/components/app/FeatureListCard';

import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';

const App = () => {
  const { toast } = useToast()
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedFile, setGeneratedFile] = useState<string | null>(null);
  const featureGroups = [
    {
      title: "Development Features",
      description: "Powerful tools for rapid development",
      features: [
        "Blazing-Fast Development",
        "AI-Powered Code Generation",
        "User-Friendly Interface",
        "Customizable Templates",
        "Real-Time Code Preview"
      ]
    },
    {
      title: "Blockchain Integration",
      description: "Seamless blockchain connectivity",
      features: [
        "Multi-Blockchain Support",
        "Smart Contract Generation",
        "One-Click Deployment",
        "Security Audits",
        "Cross-Platform Compatibility"
      ]
    },
    {
      title: "Advanced Features",
      description: "Enterprise-grade capabilities",
      features: [
        "Collaborative Tools",
        "Version Control",
        "Built-In Documentation",
        "AI-Assisted Debugging",
        "24/7 AI Assistance"
      ]
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call - replace with actual backend integration
    setTimeout(() => {
      setGeneratedFile('example-app.zip');
      setIsLoading(false);
    }, 2000);
  };

  return (
    <>
      <Toaster />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white relative">
        <div className="absolute inset-0 z-0">
          {/* <Canvas camera={{ position: [0, 0, 1] }}> */}
            <Stars />
          {/* </Canvas> */}
        </div>
        <div className="relative z-10">
          <Header />
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-4">
                  <Code2 className="w-12 h-12 text-blue-400" />
                </div>
                <h1 className="text-4xl font-bold mb-4">Smart dApp Builder.</h1>
                <p className="text-gray-400 text-lg">
                  Revolutionizing dApp creation, one file at a time.
                </p>
              </div>

              {/* Main Form */}
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-700">
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label
                      htmlFor="prompt"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Describe Your App
                    </label>
                    <textarea
                      id="prompt"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="Describe the app you want to create... (e.g., Create a React todo app with dark mode and local storage)"
                      className="w-full h-40 px-4 py-3 bg-gray-700/90 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
                      required
                    />
                  </div>

                  <div className="flex justify-end">
                    {isLoading ? (
                      <button className="flex text-lg items-center justify-center px-6 py-3 bg-blue-600 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                        <div className="flex justify-between items-center">
                          <Loader />
                          Generating...
                        </div>
                      </button>
                    ) : (
                      <button className="relative font-medium text-lg tracking-wide rounded-xl cursor-pointer border-none bg-gradient-to-r from-blue-600 to-purple-600 text-ghostwhite overflow-hidden group">
                        <span className="relative z-10 transition-colors duration-300 flex items-center px-5 py-3 group-hover:text-white">
                          <Send />
                          Generate App
                        </span>
                        <div className="absolute top-0 left-0 w-full h-full bg-blue-600 -skew-x-14 transition-transform duration-300 ease-out group-hover:translate-x-full"></div>
                      </button>
                    )}
                  </div>
                </form>
              </div>

              {/* Generated File Section */}
              {generatedFile && (
                <div className="mt-8 bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Your App is Ready!</h3>
                      <p className="text-gray-400">Download the generated code and get started.</p>
                    </div>
                    <Button
                      className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
                      onClick={() => {
                        toast({
                          title: "Download Started",
                          description: "Your project zip has started to download.",
                        })
                      }}
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download ZIP
                    </Button>
                  </div>
                </div>
              )}

              {/* Features Section */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                <FeatureCard
                  icon={Code2}
                  title="Clean Code"
                  description="Generate well-structured, maintainable code following best practices"
                />
                <FeatureCard
                  icon={Download}
                  title="Instant Download"
                  description="Get your generated app immediately in a convenient ZIP format"
                />
                <FeatureCard
                  icon={Send}
                  title="Easy Integration"
                  description="Ready-to-use code that you can integrate into your project"
                />
              </div>

              {/* Comprehensive Features Section */}
              <div className="mt-24">
                <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                  {featureGroups.map((group, index) => (
                    <FeatureListCard
                      key={index}
                      title={group.title}
                      description={group.description}
                      features={group.features}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;