export const siteConfig = {
  // General Site Info
  teamName: "Team Redstone",
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
      date: "October 2025",
      description: "Currently determining whether to use Raspberry Pi or microcontrollers for optimal LoRa and sensor processing power. Finalizing wheel types and motor drivers.",
      status: "active" // "active" or "upcoming"
    },
    {
      id: "timeline-2",
      title: "Phase 2: Base Assembly & Movement",
      date: "Upcoming",
      description: "Assemble the 4-wheel chassis and program basic directional steering and line-following PID control.",
      status: "upcoming"
    },
    {
      id: "timeline-3",
      title: "Phase 3: Telemetry & Obstacle Avoidance",
      date: "Upcoming",
      description: "Integrate ultrasonic/IR sensors for left/right detection logic and configure the LoRa transceiver packet payload.",
      status: "upcoming"
    }
  ],

  // Resources Page: Downloadable Files grouped by category
  resourceGroups: [
    {
      id: "group-1",
      name: "Week 1 Slides",
      files: [
        {
          id: "f1",
          title: "L1a_Course-Information_2025-2026",
          description: "General course information",
          filename: "L1a_Course-Information_2025-2026.pdf",
          url: "/downloads/L1a_Course-Information_2025-2026.pdf"
        },
        {
          id: "f2",
          title: "L1b_Design-Tasks_An-Overview_2025-2026",
          description: "Overview of the TDPS design tasks",
          filename: "L1b_Design-Tasks_An-Overview_2025-2026.pdf",
          url: "/downloads/L1b_Design-Tasks_An-Overview_2025-2026.pdf"
        },
        {
          id: "f3",
          title: "L2_Teamwork_2024-2025",
          description: "Guidelines and best practices for teamwork",
          filename: "L2_Teamwork_2024-2025.pdf",
          url: "/downloads/L2_Teamwork_2024-2025.pdf"
        },
        {
          id: "f4",
          title: "L3a_LabNotebooks_2024-2025",
          description: "How to maintain proper lab notebooks",
          filename: "L3a_LabNotebooks_2024-2025.pdf",
          url: "/downloads/L3a_LabNotebooks_2024-2025.pdf"
        },
        {
          id: "f5",
          title: "L3b_Software Construction_2024-2025",
          description: "Software Construction Methodologies",
          filename: "L3b_Software Construction_2024-2025.pdf",
          url: "/downloads/L3b_Software Construction_2024-2025.pdf"
        }
      ]
    },
    {
      id: "group-2",
      name: "Hardware Specs",
      files: [
        {
          id: "f6",
          title: "Vehicle Frame Design Specs",
          description: "Hardware & Parts List",
          filename: "frame-specs.pdf",
          url: "/downloads/frame-specs.pdf"
        }
      ]
    }
  ]
};
