import Image from 'next/image'

export default function Profile() {
  const profileData = {
    name: "Vishwajeet Sharma",
    photo: "/vishu_1.jpg", // Add your photo to the public folder
    bio: "I'm a passionate web developer with experience in building modern web applications using JavaScript, React, and Node.js.",
    contact: {
      email: "sharmavishwajeet04@gmail.com",
      phone: "+91 9351812885",
      linkedin: "linkedin.com/in/vishux",
      github: "github.com/vishusharmaX"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
        <div className="w-32 h-32 rounded-full overflow-hidden">
          <Image
            src={profileData.photo}
            alt="Profile"
            width={128}
            height={128}
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-500">{profileData.name}</h2>
          <p className="text-gray-600 mt-2">{profileData.bio}</p>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Contact Information</h3>
        <ul className="space-y-2">
          <li className="flex items-center">
            <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className = "text-gray-500">{profileData.contact.email}</span>
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className = "text-gray-500">{profileData.contact.phone}</span>
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <a href={`https://${profileData.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              {profileData.contact.linkedin}
            </a>
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.01-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.146-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.4 1.02 0 2.04.133 3 .4 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.784-2.805 5.63-5.475 5.92.42.36.81 1.095.81 2.22 0 1.606-.01 2.89-.01 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            <a href={`https://${profileData.contact.github}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              {profileData.contact.github}
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
