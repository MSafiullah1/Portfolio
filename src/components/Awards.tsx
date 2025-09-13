export default function Awards() {
    const awards = [
      {
        date: "July, 2025",
        title: "Award of High Distinction",
        institution: "LUMS",
        description: "Awarded to students graduating with a CGPA of 3.80 or higher."
      },
      {
        date: "August, 2024",
        title: "Dean's Honour List 2023-24",
        institution: "LUMS",
        description: "Based on my academic performance, I was placed on Dean's Honour List for academic year 2023-24. It is awarded to students that have a CGPA of 3.6 or higher in a complete academic year (Two regular semesters)."
      },
      {
        date: "August, 2023",
        title: "Dean's Honour List 2022-23",
        institution: "LUMS",
        description: "Based on my academic performance, I was placed on Dean's Honour List for academic year 2022-23. It is awarded to students that have a CGPA of 3.6 or higher in a complete academic year (Two regular semesters)."
      },
      {
        date: "August, 2022",
        title: "Dean's Honour List 2021-22",
        institution: "LUMS",
        description: "Based on my academic performance, I was placed on Dean's Honour List for academic year 2021-22. It is awarded to students that have a CGPA of 3.6 or higher in a complete academic year (Two regular semesters)."
      },
      {
        date: "August, 2021",
        title: "Academic Blazer Award 2021",
        institution: "Aithcison College",
        description: "Based on stellar academic performance in Cambridge Advance Level Examination, I was awarded the prestigious Academic Blazer."
      },
      {
        date: "October, 2020",
        title: "2nd Position in Punjab",
        institution: "IYPT",
        description: "My team was awarded the 2nd Position in the Punjab Youngs Physicist Tournament 2020."
      },
      {
        date: "December, 2018",
        title: "Bronze Medal (Provincial Level)",
        institution: "Punjab Olympics",
        description: "I was awarded a Bronze Medal at Punjab Olympics 2018 in the High Jump. I had a jump of over 5 feet."
      },
      {
        date: "December, 2017",
        title: "1st Position in Pakistan",
        institution: "IKLC",
        description: "I achieved first position in Pakistan in International Kangaroo Linguistic Competition 2017."
      }
    ]
  
    return (
      <section id="awards" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-indigo-600">My Awards</h2>
          <div className="space-y-8">
            {awards.map((award, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-indigo-600">{award.title}</h3>
                  <span className="text-gray-600">{award.date}</span>
                </div>
                <p className="text-lg mb-2">{award.institution}</p>
                <p className="text-gray-700">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  