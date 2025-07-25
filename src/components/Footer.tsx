import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="py-20 px-4 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        {/* Main CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Explore Processing On-BCI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Download FORESEE today and redefine how neural signal pipelines are
            developed.
          </p>
        </div>

        {/* License & Citation Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              📄 License & Citation
            </h3>
            <p className="text-gray-300 mb-4">
              FORESEE is open-source software. Please cite our work in your
              research:
            </p>
            <div className="bg-gray-800/50 rounded-lg p-4 font-mono text-sm text-gray-300">
              @article{"{foresee2024,"}
              <br />
              {
                "  title={FORESEE: A Framework for Neural Signal Processing Pipeline Development},"
              }
              <br />
              {"  author={[Authors]},"}
              <br />
              {"  journal={IEEE Conference},"}
              <br />
              {"  year={2024}"}
              <br />
              {"}"}
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              🤝 Contribute
            </h3>
            <p className="text-gray-300 mb-4">
              Instructions for people to contribute:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                Fork the repository on GitHub
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                Create feature branches for new modules
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                Submit pull requests with documentation
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                Report issues and suggest improvements
              </li>
            </ul>
          </div>
        </div>

        {/* Final Message */}
        <div className="text-center border-t border-gray-700 pt-8">
          <p className="text-gray-300 text-lg mb-4">
            FORESEE is open-source and developed to empower researchers and
            engineers in the BCI space.
          </p>
          <p className="text-gray-400">
            We welcome feedback, contributions, and collaborations.
          </p>
        </div>
      </div>
    </footer>
  );
};
