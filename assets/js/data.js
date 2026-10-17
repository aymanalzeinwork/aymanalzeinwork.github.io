window.PORTFOLIO = {
  name: "Ayman Alzein",
  email: "aymanalzein@hotmail.com",
  title: "Systems, control & automation engineer",
  home: {
    intro: "I work across automation, vehicle systems and control engineering — turning complex systems into practical, testable solutions.",
    about: "My background spans automation and mechatronics, from a bachelor's degree through an MSc in Systems, Control and Mechatronics at Chalmers. I enjoy understanding how a complete system behaves, then using modelling, diagnostics and hands-on testing to make it work reliably.",
    selected: ["volvo", "satcube", "formula-student", "autobike"],
    beyond: ["campervan", "3d-design", "music", "outdoors"]
  },
  documents: {
    cv: "assets/documents/Ayman-Alzein-CV.docx",
    cvPdf: null,
    autobike: "assets/documents/AutoBike-gain-scheduling.pdf",
    formula: "assets/documents/Chalmers-Formula-Student.pdf",
    quadcopter: "assets/documents/Quadcopter-project.pdf",
    satcube: "assets/documents/Satcube-satellite-tracking-thesis.pdf"
  },
  articles: {
    volvo: {
      path: "pages/volvo.html",
      group: "Engineering",
      label: "Volvo Cars",
      title: "Making vehicle software testable at production scale",
      summary: "Automation and fault tracing for software validation in a vehicle-manufacturing environment.",
      role: "Automation and fault-tracing engineer",
      period: "January 2025 — present",
      disciplines: ["Test automation", "Vehicle diagnostics", "Manufacturing"],
      intro: "Manufacturing Engineering needs to verify software and production processes before updates reach the factory. My work is centred on building an automated testing infrastructure that reproduces parts of the final-assembly flow and makes the results useful to engineering teams.",
      sections: [
        {
          title: "From preparation to evidence",
          paragraphs: [
            "The workflow covers preparation of test objects, execution of tests, management of logs and presentation of results. Connecting those stages makes it possible to validate software releases and production software before deployment."
          ]
        },
        {
          title: "System-level fault tracing",
          paragraphs: [
            "The role calls for a broad understanding of vehicle systems, automotive diagnostics and production automation. I use that system view to investigate faults and help distinguish software issues from problems elsewhere in the vehicle or test process."
          ]
        },
        {
          title: "A practical engineering loop",
          paragraphs: [
            "The work brings together test design, automation and review of test evidence. The goal is repeatable verification that supports the people responsible for introducing software changes safely into manufacturing."
          ]
        }
      ],
      note: "This public article is based on the experience described in my CV. Internal company material and confidential implementation details are not included.",
      related: ["satcube", "formula-student"]
    },
    satcube: {
      path: "pages/satcube.html",
      group: "Engineering",
      label: "Satcube",
      title: "Keeping a satellite antenna on target in motion",
      summary: "A master's thesis on modelling, sensor fusion and control for a vehicle-mounted two-axis antenna.",
      role: "Master's thesis student · co-authored with Armin Khorsandi",
      period: "August 2024 — January 2025",
      disciplines: ["System dynamics", "Sensor fusion", "Control design", "MATLAB / Simulink"],
      hero: {
        src: "satcube/terminal-render.webp",
        alt: "Illustration of a compact, vehicle-mounted satellite communication terminal"
      },
      intro: "As part of the SATCUBE Motion project, we investigated how a two-axis gimbal could keep an antenna pointed towards a satellite while mounted on a moving vehicle. The work combined a full simulation environment with prototype validation.",
      sections: [
        {
          title: "Model the mechanism",
          paragraphs: [
            "I built a Simulink model of the gimbal dynamics and considered actuator behaviour, including the electronic speed controller's small delay and friction. This gave us a system model on which to develop and compare control approaches."
          ]
        },
        {
          title: "Estimate orientation",
          paragraphs: [
            "The sensor-fusion work examined IMU data and differential GNSS. We compared filtering approaches, including complementary and Kalman filtering, to estimate the antenna orientation from real sensor inputs."
          ]
        },
        {
          title: "Control each axis",
          paragraphs: [
            "We evaluated PD, PID, LQR and LQI strategies for the inner and outer gimbals. The thesis recommendations were a PID controller for the inner gimbal and an LQI controller for the outer gimbal, based on control error and motor saturation in the evaluated scenarios."
          ]
        },
        {
          title: "Simulation and prototype",
          paragraphs: [
            "The simulation work was validated against a prototype implementation. The thesis also identified future investigations, including quaternion-based orientation, signal-strength sensing and robustness analysis."
          ]
        }
      ],
      gallery: [
        { src: "satcube/system-overview.webp", alt: "System overview diagram from the satellite-tracking thesis", caption: "System overview from the thesis presentation." },
        { src: "satcube/gimbal-axes.webp", alt: "Diagram illustrating the two-axis gimbal concept", caption: "Two-axis gimbal concept." }
      ],
      resources: [
        { label: "Read the satellite-tracking thesis", href: "assets/documents/Satcube-satellite-tracking-thesis.pdf", download: true }
      ],
      related: ["volvo", "formula-student"]
    },
    "formula-student": {
      path: "pages/formula-student.html",
      group: "Engineering",
      label: "Chalmers Formula Student",
      title: "Electronics for an autonomous race car",
      summary: "Low-voltage electronics and integration work in a student team developing a new car each year.",
      role: "Project engineer · electrical responsibility for the autonomous car",
      period: "October 2023 — October 2024",
      disciplines: ["Low-voltage electronics", "Sensors", "CAN / Ethernet", "Vehicle integration"],
      hero: {
        src: "formula/formula-car.webp",
        alt: "Formula Student car at a test event"
      },
      intro: "Chalmers Formula Student is a student team of around 40 people that builds a new race car each year. During my year as a project engineer, I was responsible for electronics on the self-driving car.",
      sections: [
        {
          title: "Integrating the low-voltage system",
          paragraphs: [
            "My responsibilities included the low-voltage electronics and integration of the LiDAR, IMU, onboard computer, telemetry, Ethernet and CAN bus, and remote emergency system. These components have to work together as part of a vehicle that can sense, communicate and operate safely."
          ]
        },
        {
          title: "A team result",
          paragraphs: [
            "In 2024, the team placed first in the Driverless Vehicle Cup at Formula Student Germany and second in Formula Student East. Those results came from the wider team; my contribution was focused on the self-driving car's electrical systems."
          ]
        }
      ],
      gallery: [
        { src: "formula/formula-car.webp", alt: "Formula Student car during an outdoor test", caption: "The car at a test event." },
        { src: "formula/formula-cockpit.webp", alt: "Driverless-car cockpit and low-voltage equipment", caption: "On-board view of the self-driving car." }
      ],
      resources: [
        { label: "Open the Formula Student project document", href: "assets/documents/Chalmers-Formula-Student.pdf", download: true }
      ],
      related: ["satcube", "autobike"]
    },
    autobike: {
      path: "pages/autobike.html",
      group: "Engineering",
      label: "AutoBike",
      title: "AutoBike: an ongoing student project",
      summary: "A self-driving robot-bike project I joined during my bachelor's studies and continued in my master's.",
      role: "Student project contributor",
      period: "Bachelor's project · continued as a master's elective",
      disciplines: ["Autonomous vehicles", "Control engineering", "Project work"],
      hero: {
        src: "autobike/robot-bike-test.webp",
        alt: "Ayman with the AutoBike project bicycle during a test day"
      },
      intro: "I joined AutoBike during my bachelor's studies and chose to continue working on it as a selective project during my master's. The material available for this portfolio includes a gain-scheduling report and a project photograph.",
      sections: [
        {
          title: "Project work and documentation",
          paragraphs: [
            "Rather than assigning myself specific subsystems that are not documented in the source material, I have kept this overview focused on my participation and the technical report available below."
          ]
        },
        {
          title: "Project in the media",
          paragraphs: [
            "The project attracted local media attention. The original project notes link to an SVT report about testing self-driving robot bikes outside Borås."
          ]
        }
      ],
      gallery: [
        { src: "autobike/robot-bike-test.webp", alt: "AutoBike project photograph from a test day", caption: "A test-day photograph from the AutoBike project." }
      ],
      resources: [
        { label: "Read the gain-scheduling report", href: "assets/documents/AutoBike-gain-scheduling.pdf", download: true },
        { label: "Watch the SVT report about robot-bike testing", href: "https://www.svt.se/nyheter/lokalt/vast/har-testas-sjalvkorande-robotcyklar-utanfor-boras", external: true }
      ],
      related: ["formula-student", "quadcopter"]
    },
    quadcopter: {
      path: "pages/quadcopter.html",
      group: "Engineering",
      label: "Quadcopter",
      title: "Quadcopter project",
      summary: "A standalone project report in my collection of practical engineering work.",
      role: "Project contributor",
      disciplines: ["Mechatronics", "Aerial systems"],
      intro: "The source material includes a dedicated quadcopter project report. I have kept this page deliberately brief rather than infer design choices or results that are not described in the accompanying document.",
      sections: [
        {
          title: "Project document",
          paragraphs: [
            "Open or download the report to see the original project material."
          ]
        }
      ],
      resources: [
        { label: "Open the quadcopter project report", href: "assets/documents/Quadcopter-project.pdf", download: true }
      ],
      related: ["autobike", "satcube"]
    },
    raysafe: {
      path: "pages/raysafe.html",
      group: "Engineering",
      label: "RaySafe",
      title: "Calibration through careful measurement",
      summary: "Calibration-technician work combining x-ray measurements, reference data and sensor software updates.",
      role: "Calibration technician",
      period: "October 2022 — October 2023",
      disciplines: ["Calibration", "Measurement", "Sensor software"],
      intro: "At RaySafe, I worked as a calibration technician. The role called for accurate measurements and a disciplined comparison against reference data.",
      sections: [
        {
          title: "Measure, compare, improve",
          paragraphs: [
            "I performed x-ray radiation measurements, compared the results with reference data and updated sensor software to improve accuracy. This experience built a strong foundation in measurement quality and careful technical work."
          ]
        }
      ],
      related: ["volvo", "satcube"]
    },
    campervan: {
      path: "pages/campervan.html",
      group: "Hobbies",
      label: "Campervan Build",
      title: "A small home built one weekend at a time",
      summary: "A hands-on van conversion, built outdoors with sketches, tools, timber and plenty of persistence.",
      role: "Design, build and installation",
      disciplines: ["Interior build", "Electrical planning", "Practical problem-solving"],
      hero: {
        src: "campervan/finished-interior.webp",
        alt: "Finished campervan interior with bed, storage and warm lighting"
      },
      intro: "I had wanted to build a camper van for years. I worked on it outdoors over many weekends, driving to a quiet place, setting up a worktable, and fitting in as much building as I could before the week began again.",
      sections: [
        {
          title: "Build wherever the weekend took me",
          paragraphs: [
            "The van became both workshop and shelter. I carried timber, fabric, fasteners, paint and hand tools, then sketched, cut and installed parts on site. The process taught me how much there is to learn in the details of a real build."
          ]
        },
        {
          title: "Planning a safe electrical system",
          paragraphs: [
            "The electrical system was the part I found most interesting. I had to think through battery sizing, safe placement, charging and monitoring, cable routes and conductor sizes. The goal was to make the installation practical as well as safe."
          ]
        },
        {
          title: "The roof-fan cut",
          paragraphs: [
            "Installing the roof fan meant cutting a large opening in the van roof — a one-way operation with little room for error. I measured repeatedly before making the cut, then installed and waterproofed the fan. It was a memorable lesson in preparation and careful execution."
          ]
        },
        {
          title: "Still a work in progress",
          paragraphs: [
            "The build took much longer than I expected, and for a long time my answer to friends asking whether it was finished was, “Almost done.” The van is now a usable, personal space, and the project remains a reminder that a complicated build advances through many small, deliberate steps."
          ]
        }
      ],
      gallery: [
        { src: "campervan/before.webp", alt: "Empty van interior before the conversion", caption: "The empty van before the build." },
        { src: "campervan/build-site.webp", alt: "Materials and tools set up beside the van outdoors", caption: "A weekend worksite in the woods." },
        { src: "campervan/electrical-installation.webp", alt: "Electrical wiring and components during the build", caption: "Planning and installing the electrical system." },
        { src: "campervan/roof-fan.webp", alt: "Roof fan prepared for installation in the van roof", caption: "The roof fan installation." },
        { src: "campervan/interior-progress.webp", alt: "Campervan interior partway through construction", caption: "Interior progress." },
        { src: "campervan/working-camper.webp", alt: "Campervan interior during a later stage of the build", caption: "A later stage of the conversion." },
        { src: "campervan/finished-kitchen.webp", alt: "Completed campervan kitchen and storage", caption: "The finished kitchen area." },
        { src: "campervan/finished-bed.webp", alt: "Completed campervan bed and interior", caption: "The bed and finished interior." }
      ],
      related: ["3d-design", "outdoors"]
    },
    "3d-design": {
      path: "pages/3d-design.html",
      group: "Hobbies",
      label: "3D Design & Printing and Laser Cutting",
      title: "From a useful print to fifty custom gift boxes",
      summary: "Small CAD and making projects that turn practical ideas into finished objects.",
      role: "Design and fabrication",
      disciplines: ["CATIA", "3D printing", "Laser cutting", "Prototyping"],
      hero: {
        src: "3d/bench-supply.webp",
        alt: "Homemade bench power supply built from an old computer power supply"
      },
      intro: "I enjoy designing useful objects and making them real. My personal projects range from a bench power supply and an Arduino Mega enclosure to 3D-printed designs and laser-cut gifts.",
      sections: [
        {
          title: "A power supply with a designed front panel",
          paragraphs: [
            "I repurposed an old PC power supply as a bench supply, designed its panel in CATIA and 3D-printed the panel in PLA. It brought CAD, fabrication and practical electronics together in a tool I could use."
          ]
        },
        {
          title: "Designing for everyday use",
          paragraphs: [
            "Other small designs include a case for an Arduino Mega board, a wheel cap and a shell. Each one starts with the function and shape, then moves through modelling and a tangible part."
          ]
        },
        {
          title: "Fifty laser-cut wedding boxes",
          paragraphs: [
            "For my sister's wedding, I designed 50 small gift boxes in CATIA and laser-cut the parts from 4 mm plywood. Making the boxes meant thinking about how a three-dimensional design would break down into flat parts, then assembling a batch of finished gifts."
          ]
        }
      ],
      gallery: [
        { src: "3d/bench-supply.webp", alt: "Finished homemade bench power supply", caption: "A repurposed PC power supply with a custom 3D-printed panel." },
        { src: "3d/bench-panel.webp", alt: "CAD design and printed panel for the bench supply", caption: "Panel design and printed part." },
        { src: "3d/bench-build.webp", alt: "Bench power supply being assembled", caption: "Assembly in progress." },
        { src: "3d/arduino-case.webp", alt: "CAD model of an Arduino Mega enclosure", caption: "Arduino Mega case design." },
        { src: "3d/design-studies.webp", alt: "Two CAD models from personal 3D-design projects", caption: "A pair of small design studies." },
        { src: "3d/laser-cutting.webp", alt: "Plywood pieces laid out during laser cutting", caption: "Parts during the laser-cutting process." },
        { src: "3d/gift-boxes.webp", alt: "Handmade wooden gift box", caption: "A finished gift box." },
        { src: "3d/gift-detail.webp", alt: "Close-up of a custom engraved wooden gift box", caption: "Detail of a finished box." }
      ],
      related: ["campervan", "music"]
    },
    music: {
      path: "pages/music.html",
      group: "Hobbies",
      label: "Playing Music",
      title: "Finding a sound — and building an electric oud",
      summary: "A musical journey from guitar to oud, with a practical electronics project along the way.",
      role: "Musician and instrument maker",
      disciplines: ["Music theory", "Piezo sensors", "Low-pass filter", "Amplifier circuit"],
      intro: "I first learned music theory through online videos, then picked up guitar after moving to Sweden and joined a local group that met to play and sing. Later, an interest in the microtones of Middle Eastern music led me to the oud.",
      sections: [
        {
          title: "The oud and its open possibilities",
          paragraphs: [
            "Unlike a fretted guitar, the oud has no frets, which makes it possible to explore the fine pitch differences in the scales that drew me to the instrument. Learning to play it led to a new idea: building one myself."
          ]
        },
        {
          title: "Making it electric",
          paragraphs: [
            "My electronics skills were stronger than my woodworking, so I made an electric oud. Piezo sensors pick up vibrations from the instrument and turn them into an electrical signal. I designed a simple low-pass filter connected to an amplifier circuit."
          ]
        },
        {
          title: "A personal project with a practical circuit",
          paragraphs: [
            "The build joined music, curiosity and electronics in one object. It was a chance to apply circuit knowledge to something personal, while learning a different craft along the way."
          ]
        }
      ],
      gallery: [
        { src: "music/oud-sketch.webp", alt: "Hand-drawn oud design sketch", caption: "A sketch from the instrument design." },
        { src: "music/oud-design.webp", alt: "Second hand-drawn view of the oud design", caption: "Another view of the oud design." }
      ],
      related: ["3d-design", "campervan"]
    },
    outdoors: {
      path: "pages/outdoors.html",
      group: "Hobbies",
      label: "Outdoors",
      title: "A little further north, or simply outside",
      summary: "Walking, unhurried time in nature and outdoor cooking in every kind of weather.",
      disciplines: ["Walking", "Travel", "Outdoor cooking"],
      hero: {
        src: "outdoors/scandinavian-walk.webp",
        alt: "Ayman walking in an open Scandinavian mountain landscape"
      },
      intro: "I like walking or simply sitting in nature, on my own or with friends and family. Being outside helps me slow down and feel free. I have spent time in every Swedish county, from Norrbotten to Skåne, as well as in Denmark, Norway and Finland.",
      sections: [
        {
          title: "Time in open landscapes",
          paragraphs: [
            "I especially enjoy the uncrowded landscapes of Scandinavia. A quiet walk, a long view or a pause by the water can be enough reason to head out."
          ]
        },
        {
          title: "A cold morning by the sea",
          paragraphs: [
            "One December morning in 2025, I sat by the sea after breakfast. The charcoal was still glowing, ready to boil water for tea, and the fire kept me warm in the cold air."
          ]
        },
        {
          title: "Food tastes better outside",
          paragraphs: [
            "I also enjoy barbecuing, whatever the weather. Getting outdoors for a meal is a simple pleasure and a good reason to spend a few more hours outside."
          ]
        }
      ],
      gallery: [
        { src: "outdoors/scandinavian-walk.webp", alt: "Open mountain landscape on a walk in Scandinavia", caption: "A walk in the Scandinavian mountains." },
        { src: "outdoors/winter-coast.webp", alt: "A winter camp and glowing charcoal beside the coast", caption: "A cold morning by the sea." },
        { src: "outdoors/waterfall.webp", alt: "Waterfall in a green landscape", caption: "A stop on the way." },
        { src: "outdoors/rocky-coast.webp", alt: "Rocky shoreline looking out over the sea", caption: "A rocky stretch of coast." },
        { src: "outdoors/winter-camp.webp", alt: "Small campfire and kettle on a winter shoreline", caption: "Tea by the fire." },
        { src: "outdoors/outdoor-cooking.webp", alt: "Food cooking over an outdoor barbecue", caption: "Cooking outdoors." },
        { src: "outdoors/barbecue.webp", alt: "Rows of food on a barbecue grill", caption: "Barbecue, whatever the weather." }
      ],
      related: ["campervan", "3d-design"]
    }
  }
};
