export const siteConfig = {
  // General Site Info
  teamName: "Redstone",
  email: "contact@redstone-tdps.top",
  githubUrl: "https://github.com/redstone-tdps/redstone-tdps",
  description: "Building the future of autonomous vehicles. Our project is an intelligent 4-wheel car featuring line-following, obstacle detection, and LoRa communication.",

  // Home Page: Project Showcase
  showcase: [
    {
      id: "showcase-1",
      title: "Base Chassis Construction",
      label: "Chassis Assembly",
      status: "Coming Soon",
      description: "First iteration of the 4-wheel drive system mounted onto the base plate.",
      imageUrl: "" // e.g., "/images/chassis.jpg"
    },
    {
      id: "showcase-2",
      title: "RPi & Sensor Array Integration",
      label: "Circuit & Sensors",
      status: "Coming Soon",
      description: "Wiring the obstacle detection logic and LoRa transmission module.",
      imageUrl: ""
    }
  ],

  // Home Page: Development Timeline
  timeline: [
    {
      id: "timeline-1",
      title: "Phase 1: Component Selection",
      date: "March 2026",
      description: "Discuss the optimal components for the 4-wheel drive system.",
      status: "active" // "active" or "upcoming"
    },
    {
      id: "timeline-2",
      title: "Phase 2: Base Assembly & Movement",
      date: "Upcoming",
      description: "Assemble the 4-wheel chassis, design motor drivers and program basic directional steering.",
      status: "upcoming"
    },
    {
      id: "timeline-3",
      title: "Phase 3: Line Following & Obstacle Avoidance",
      date: "Upcoming",
      description: "Integrate IR sensors and/or a camera for left/right detection logic and 24GHz radar for obstacle detection.",
      status: "upcoming"
    },
    {
      id: "timeline-4",
      title: "Phase 4: LoRa Communication & Final Testing",
      date: "Upcoming",
      description: "Integrate all subsystems and conduct comprehensive testing.",
      status: "upcoming"
    },
  ],

  // Resources Page: Downloadable Files grouped by category
  resourceGroups: [
    {
      id: "group-1",
      name: "TDPS",
      files: [
        {
          id: "f1",
          title: "Lecture-1a: Course Information",
          description: "General course information",
          filename: "L1a_Course-Information_2025-2026.pdf",
          url: "/downloads/L1a_Course-Information_2025-2026.pdf"
        },
        {
          id: "f2",
          title: "Lecture-1b: Design Tasks",
          description: "Overview of the TDPS design tasks",
          filename: "L1b_Design-Tasks_An-Overview_2025-2026.pdf",
          url: "/downloads/L1b_Design-Tasks_An-Overview_2025-2026.pdf"
        },
        {
          id: "f3",
          title: "Lecture-2: Teamwork",
          description: "Guidelines and best practices for teamwork",
          filename: "L2_Teamwork_2024-2025.pdf",
          url: "/downloads/L2_Teamwork_2024-2025.pdf"
        },
        {
          id: "f4",
          title: "Lecture-3a: Lab notebooks",
          description: "How to maintain proper lab notebooks",
          filename: "L3a_LabNotebooks_2024-2025.pdf",
          url: "/downloads/L3a_LabNotebooks_2024-2025.pdf"
        },
        {
          id: "f5",
          title: "Lecture-3b: Software Construction and Testing",
          description: "Software Construction Methodologies",
          filename: "L3b_Software Construction_2024-2025.pdf",
          url: "/downloads/L3b_Software Construction_2024-2025.pdf"
        }
      ]
    },
    {
      id: "group-2",
      name: "Product Management",
      files: [
        {
          id: "f6",
          title: "Project Management Part1",
          description: "",
          filename: "pm1.pdf",
          url: "/downloads/pm1.pdf"
        },
        {
          id: "f7",
          title: "Project Management Part2",
          description: "",
          filename: "pm2.pdf",
          url: "/downloads/pm2.pdf"
        },
        {
          id: "f8",
          title: "Project Management Part3",
          description: "",
          filename: "pm3.pdf",
          url: "/downloads/pm3.pdf"
        },
        {
          id: "f9",
          title: "Project Management Part4",
          description: "",
          filename: "pm4.pdf",
          url: "/downloads/pm4.pdf"
        },
      ]
    },
  ]
};
