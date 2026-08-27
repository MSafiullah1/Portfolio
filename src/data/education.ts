export type EducationEntry = {
  degree: string
  institution: string
  period: string
  details: string[]
  courses: string[]
  honors: string[]
}

export const education: EducationEntry[] = [
  {
    degree: "BS in Computer Science",
    institution: "Lahore University of Management Sciences",
    period: "2021 - 2025",
    details: [
      "CGPA: 3.95/4.00 | Major CGPA: 3.99/4.00",
      "Award of High Distinction",
    ],
    courses: [
      "Advanced Topics in ML", "Computer Vision", "Generative AI",
      "Deep Learning", "Machine Learning", "Algorithms",
      "Operating Systems", "Artificial Intelligence",
    ],
    honors: [
      "Merit Scholarship 2023-24", "Merit Scholarship 2021-22",
      "Dean's Honor List", "Top 15 in Batch Ranking",
    ],
  },
  {
    degree: "Minor in Computational Finance",
    institution: "Lahore University of Management Sciences",
    period: "2021 - 2025",
    details: ["Minor CGPA: 4.00/4.00"],
    courses: [
      "Quantitative Finance", "Principles of Finance",
      "Actuarial Science & Insurance", "Mathematics of Finance",
      "Microeconomics", "Portfolio Management", "Financial Derivatives",
    ],
    honors: [],
  },
  {
    degree: "Cambridge A-Levels",
    institution: "Aitchison College",
    period: "2019 - 2021",
    details: ["Grades: 2A*, 2A", "Academic Blazer Award"],
    courses: [],
    honors: [],
  },
]

export type AwardGroup = {
  institution: string
  awards: string[]
}

export const awardGroups: AwardGroup[] = [
  {
    institution: "Lahore University of Management Sciences",
    awards: [
      "Award of High Distinction",
      "Dean's Honor List",
      "Top 15 in Batch Ranking",
      "Merit Scholarship 2023-24",
      "Merit Scholarship 2021-22",
    ],
  },
  {
    institution: "Other Achievements",
    awards: [
      "Academic Blazer Award, Aitchison College",
      "2nd Position, Punjab Young Physicist's Tournament (PYPT)",
      "Bronze Medal, Punjab Olympic Association",
      "1st Position in Pakistan, International Kangaroo Linguistic Contest (IKLC)",
    ],
  },
]
