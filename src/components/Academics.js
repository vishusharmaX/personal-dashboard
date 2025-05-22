export default function Academics() {
  const academicsData = [
    {
      id: 1,
      title: "B.Tech in Computer Science and Engineering",
      institution: "VIT Bhopal University",
      year: "2021 - Present",
      description: "Current CGPA: 8.90. Focused on full-stack web development and data structures & algorithms."
    },
    {
      id: 2,
      title: "Web Development Intern",
      institution: "DocQ",
      year: "Jan 2024 - Mar 2024",
      description: "Worked on building scalable doctor listing and appointment pages using Next.js, REST APIs, and MongoDB."
    },
    {
      id: 3,
      title: "Web Development Intern",
      institution: "The Sparks Foundation",
      year: "Aug 2023 - Sep 2023",
      description: "Created responsive UI for basic banking system using HTML, CSS, and JavaScript. Handled user transactions with dynamic updates."
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Academics & Experience</h2>

      <div className="space-y-6">
        {academicsData.map(item => (
          <div key={item.id} className="bg-gray-50 rounded-lg p-4 shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-700">{item.title}</h3>
                <p className="text-gray-600 mt-1">{item.institution}</p>
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">{item.year}</span>
            </div>
            <p className="text-gray-600 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
