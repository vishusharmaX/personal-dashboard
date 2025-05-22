export default function Goals() {
    const goalsData = [
      {
        id: 1,
        title: "Become a Proficient Software Developer",
        description: "Strengthen my problem-solving and system design skills to secure a role at a top tech company and build impactful software products.",
        targetDate: "2025"
      },
      {
        id: 2,
        title: "Learn a New Framework",
        description: "Master a new JavaScript framework like Vue.js or Svelte to expand my front-end development skills.",
        targetDate: "December 2025"
      },
      {
        id: 3,
        title: "Build a Full-Stack Project",
        description: "Develop and deploy a complete full-stack application using modern technologies like Next.js and Firebase.",
        targetDate: "March 2025"
      },
      {
        id: 4,
        title: "Contribute to Open Source",
        description: "Make meaningful contributions to open-source projects on GitHub to give back to the developer community.",
        targetDate: "Ongoing"
      },
      {
        id: 5,
        title: "Improve UI/UX Skills",
        description: "Enhance my design skills by learning more about user experience principles and modern design tools.",
        targetDate: "Ongoing"
      }
    ];
  
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Goals</h2>
  
        <div className="space-y-4">
          {goalsData.map(goal => (
            <div key={goal.id} className="bg-gray-50 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-700">{goal.title}</h3>
                  <p className="text-gray-600 mt-1">{goal.description}</p>
                </div>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Target: {goal.targetDate}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  