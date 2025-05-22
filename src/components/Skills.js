export default function Skills() {
    const skillsData = {
      languages: ["C++", "JavaScript", "HTML", "CSS", "SQL"],
      frameworks: ["React", "Next.js", "Node.js", "Express"],
      tools: ["Git", "GitHub", "Postman", "Figma", "VS Code"],
      databases: ["MongoDB", "MySQL"]
    };
  
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Skills</h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Programming Languages</h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.languages.map((skill, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>
  
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Frameworks</h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.frameworks.map((skill, index) => (
                <span key={index} className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>
  
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.tools.map((skill, index) => (
                <span key={index} className="bg-purple-100 text-purple-800 text-sm font-medium px-2.5 py-0.5 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>
  
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Databases</h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.databases.map((skill, index) => (
                <span key={index} className="bg-yellow-100 text-yellow-800 text-sm font-medium px-2.5 py-0.5 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  