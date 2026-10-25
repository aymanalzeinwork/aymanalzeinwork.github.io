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
    cvPdf: "assets/documents/Ayman-Alzein-CV.pdf",
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
      title: "Scaling automated testing for vehicle production software",
      summary: "Developing and maintaining an automated test infrastructure that helps Volvo's testing team assess production software and manufacturing readiness.",
      cardImage: {
        src: "volvo/EX60_byUs.png",
        alt: "Volvo EX60 shown in a studio setting"
      },
      role: "Automation Test Lead",
      period: "January 2025 — present",
      disciplines: ["Test automation", "Vehicle diagnostics", "Manufacturing"],
      intro: "My work began with testing and fault tracing, where I built a foundation in vehicle diagnostics and system topologies. I now lead test automation within Manufacturing Engineering, taking responsibility for an end-to-end infrastructure used by Volvo's testing team.",
      sections: [
        {
          title: "Building a production-representative test environment",
          paragraphs: [
            "I designed and developed an automated environment that reproduces the final stages of the production flow. It supports tasks such as flashing software to electronic control units (ECUs) and performing calibrations, allowing software and manufacturing procedures to be evaluated under conditions representative of production."
          ]
        },
        {
          title: "Bringing the testing workflow together",
          paragraphs: [
            "The framework combines test preparation, execution and results analysis in a single workflow. By automating recurring tasks, it reduces manual effort and gives the team a clearer way to review results across large test runs. I own the framework and guide its ongoing development as requirements change."
          ]
        },
        {
          title: "Increasing test throughput and supporting readiness",
          paragraphs: [
            "Compared with the previous manual approach, the framework increased daily test-cycle throughput by a factor of 70. It also enabled early testing of the EX60 ahead of release, supporting production readiness and vehicle quality."
          ]
        },
        {
          title: "Combining automation with vehicle diagnostics",
          paragraphs: [
            "My work combines Python development and application design with practical engineering. Through structured fault tracing and log analysis, I help investigate complex issues and collaborate with specialist engineering teams to identify root causes."
          ]
        }
      ],
      note: "This overview focuses on externally shareable work. Internal company material and confidential implementation details are not included.",
      related: ["satcube", "formula-student"]
    },
    satcube: {
      path: "pages/satcube.html",
      group: "Engineering",
      label: "Satcube",
      title: "Keeping a satellite antenna on target in motion",
      summary: "A master's thesis exploring modelling, sensor fusion and control for a two-axis antenna mounted on a moving vehicle.",
      role: "Master's thesis student · co-authored with Armin Khorsandi",
      period: "August 2024 — January 2025",
      disciplines: ["System dynamics", "Sensor fusion", "Control design", "MATLAB / Simulink"],
      hero: {
        src: "satcube/terminal-render.webp",
        alt: "Illustration of a compact, vehicle-mounted satellite communication terminal"
      },
      heroLayout: "beside-title",
      intro: "For the SATCUBE Motion project, we studied how a two-axis gimbal could maintain satellite pointing while installed on a moving vehicle. The work brought together system simulation and validation using a physical prototype.",
      sections: [
        {
          title: "Modelling the gimbal dynamics",
          paragraphs: [
            "I developed a Simulink model of the gimbal dynamics, accounting for actuator behaviour such as the electronic speed controller's small delay and friction. The model provided a basis for developing and comparing different control strategies."
          ]
        },
        {
          title: "Estimating antenna orientation",
          paragraphs: [
            "The sensor-fusion study used IMU data alongside differential GNSS. We compared complementary and Kalman filtering approaches to estimate antenna orientation from sensor measurements."
          ]
        },
        {
          title: "Designing control for both axes",
          paragraphs: [
            "We evaluated PD, PID, LQR and LQI strategies for the inner and outer gimbals. For the scenarios assessed, the thesis recommended PID control for the inner gimbal and LQI control for the outer gimbal, considering both control error and motor saturation."
          ]
        },
        {
          title: "Validating the simulation",
          paragraphs: [
            "We compared the simulation results with a prototype implementation. The thesis also outlined areas for further study, including quaternion-based orientation estimation, signal-strength sensing and robustness analysis."
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
      summary: "Low-voltage electronics and system integration for a student team that develops a new race car each year.",
      role: "Project engineer · electrical responsibility for the autonomous car",
      period: "October 2023 — October 2024",
      disciplines: ["Low-voltage electronics", "Sensors", "CAN / Ethernet", "Vehicle integration"],
      hero: {
        src: "formula/formula-car.webp",
        alt: "Formula Student car at a test event"
      },
      galleryLayout: "wide",
      hideGalleryCount: true,
      hideGalleryTitle: true,
      intro: "Chalmers Formula Student is a team of around 40 students who design and build a new race car each year. As a project engineer, I was responsible for the electrical systems on the autonomous car.",
      sections: [
        {
          title: "Integrating the low-voltage electronics",
          paragraphs: [
            "I worked on the low-voltage electronics and integrated the LiDAR, IMU, onboard computer, telemetry, Ethernet and CAN bus, and remote emergency system. These components needed to function as one system so the vehicle could sense its surroundings, communicate reliably and operate safely."
          ]
        },
        {
          title: "Competition results from a team effort",
          paragraphs: [
            "In 2024, the team won the Driverless Vehicle Cup at Formula Student Germany and finished second at Formula Student East. These were collective achievements, while my individual contribution centred on the autonomous car's electrical systems."
          ]
        }
      ],
      gallery: [
        { src: "formula/winning.png", alt: "Chalmers Formula Student team celebrating a competition win", caption: "" }
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
      title: "Adaptive control for a self-driving bicycle",
      summary: "Using gain scheduling and linear interpolation to improve trajectory tracking across changing speeds on a self-driving bicycle.",
      role: "Control engineering project contributor · with Armin Khorsandi",
      period: "Bachelor's project · continued as a master's elective",
      disciplines: ["Gain scheduling", "State estimation", "MATLAB / Simulink", "LabVIEW"],
      hero: {
        src: "autobike/robot-bike-test.webp",
        alt: "Ayman with the AutoBike project bicycle during a test day",
        caption: ""
      },
      intro: "I joined AutoBike during my bachelor's studies and continued working on it as a master's elective. Together with Armin Khorsandi, I contributed to speed-adaptive trajectory control for a self-driving bicycle used in automotive safety-testing research. The project combined control analysis, simulation and implementation on the bicycle itself.",
      sections: [
        {
          title: "Extending control beyond a fixed speed",
          paragraphs: [
            "AutoBike is designed to balance and follow predefined trajectories, making it possible to use a bicycle carrying a dummy in repeatable vehicle-safety tests. The existing controller assumed a constant reference speed. We investigated how to preserve accurate path tracking when the target speed varies.",
            "We extended the trajectory-reference workflow so that each point on the path could have its own speed reference. This involved developing a MATLAB reference-generation function and selecting the relevant speed using the closest point on the trajectory."
          ]
        },
        {
          title: "Adapting estimation and control to speed",
          paragraphs: [
            "We examined how velocity affected the LQR trajectory controller, Kalman estimator and heading-rate feedforward term. Under the model and formulation used in this project, the LQR gain could remain unchanged as speed varied, while the estimator and feedforward dynamics required adaptation.",
            "We implemented velocity-based gain scheduling to update the relevant gains and system matrices. Interpolating linearly between operating points made transitions smoother than switching abruptly between parameter sets. We also explored simplifying the implementation by using only the parameter sets for minimum and maximum speed."
          ]
        },
        {
          title: "Evaluating tracking in simulation",
          paragraphs: [
            "Using MATLAB/Simulink, we compared fixed parameters, discrete gain scheduling and gain scheduling with interpolation. The test path consisted of a 50-metre straight followed by a circle with a 40-metre diameter; speed varied from 2 to 4 m/s along the circular section.",
            "In the reported simulation, the fixed-parameter baseline had lateral errors of approximately -98 to 80 cm. Interpolating between the minimum- and maximum-speed parameter sets reduced the range to 0–24 cm. This indicates better tracking in the tested scenario, but should not be interpreted as a guarantee of performance in every condition."
          ]
        },
        {
          title: "Testing the implementation on the bicycle",
          paragraphs: [
            "We implemented gain scheduling and interpolation in LabVIEW as well as in simulation. During roller-bench tests, we changed the reference speed manually and confirmed that the system matrices updated as intended.",
            "Full trajectory testing at variable speed on the physical bicycle was limited by an issue with the reference index: the closest-point index used to select the speed reference remained at its initial value. Consequently, the reported tracking improvements are based on simulation, while the roller-bench tests verified the parameter-adaptation behaviour."
          ]
        },
        {
          title: "The wider project in the media",
          paragraphs: [
            "The wider AutoBike project received local media coverage, including an SVT report on tests with self-driving robot bicycles outside Borås. Links to the report and our technical paper are provided below."
          ]
        }
      ],
      resources: [
        { label: "Read the gain-scheduling report", href: "assets/documents/AutoBike-gain-scheduling.pdf", download: true },
        { label: "Watch the SVT report about robot-bike testing", href: "https://www.svt.se/nyheter/lokalt/vast/har-testas-sjalvkorande-robotcyklar-utanfor-boras", external: true }
      ],
      related: ["formula-student", "others"]
    },
    others: {
      path: "pages/others.html",
      group: "Engineering",
      label: "Others",
      title: "Others",
      summary: "Additional engineering experience spanning calibration work at RaySafe and a quadcopter project.",
      disciplines: ["Calibration", "Measurement", "Sensor software", "Mechatronics", "Aerial systems"],
      intro: "In addition to my other engineering work, I have experience as a calibration technician at RaySafe and have contributed to a quadcopter project.",
      sections: [
        {
          title: "RaySafe: calibration and measurement work",
          paragraphs: [
            "I worked as a calibration technician at RaySafe from October 2022 to October 2023. The role required precise measurements and systematic comparisons with reference data.",
            "My tasks included measuring X-ray radiation, comparing results with reference data and updating sensor software to improve accuracy. The work strengthened my understanding of measurement quality and the importance of methodical technical practice."
          ]
        },
        {
          title: "Quadcopter project",
          paragraphs: [
            "I also contributed to a quadcopter project involving mechatronics and aerial systems. The project report below contains further technical details."
          ]
        }
      ],
      resources: [
        { label: "Open the quadcopter project report", href: "assets/documents/Quadcopter-project.pdf", download: true }
      ],
      related: ["autobike", "satcube", "volvo"]
    },
        campervan: {
      path: "pages/campervan.html",
      group: "Hobbies",
      label: "Campervan Build",
      title: "A small home built one weekend at a time",
      summary: "A practical campervan conversion shaped by hands-on work, outdoor weekends, sketches and plenty of persistence.",
      role: "Design, build and installation",
      disciplines: ["Interior build", "Electrical planning", "Practical problem-solving"],
      hero: {
        src: "campervan/20260404_134306.jpg",
        alt: "View of the water and sky through the campervan windshield"
      },
      intro: "Building a campervan had been a long-standing goal. I spent many weekends working on the conversion outdoors, driving to a quiet spot, setting up a worktable and making progress before the next working week began.",
      sections: [
        {
          title: "A workshop wherever I could find space",
          paragraphs: [
            "The van served as both project and shelter. I brought timber, fabric, fasteners, paint and hand tools, then measured, sketched, cut and fitted components on site. Working this way showed me how much practical learning happens in the details of a real build."
          ]
        },
        {
          title: "Designing the electrical system",
          paragraphs: [
            "The electrical installation was one of the most engaging parts of the project. I planned battery capacity and placement, charging and monitoring, cable routing and conductor sizes, with the aim of creating a system that was both practical and safe."
          ]
        },
        {
          title: "Making the roof-fan opening",
          paragraphs: [
            "Fitting the roof fan required cutting a large opening in the roof, leaving little room for mistakes. I checked the measurements repeatedly before cutting, then installed the fan and sealed it against water. It was a strong reminder of how much careful preparation matters when a task cannot easily be undone."
          ]
        },
        {
          title: "A project built step by step",
          paragraphs: [
            "The conversion took far longer than I had expected. For a long time, whenever friends asked if it was finished, my answer was, “Almost done.” The van is now a usable space shaped around my needs, and the project has taught me that complex builds come together through many small, intentional steps."
          ]
        }
      ],
      gallery: [
        { src: "campervan/before.webp", alt: "Empty van interior before the conversion", caption: "" },
        { src: "campervan/build-site.webp", alt: "Materials and tools set up beside the van outdoors", caption: "" },
        { src: "campervan/electrical-installation.webp", alt: "Electrical wiring and components during the build", caption: "" },
        { src: "campervan/roof-fan.webp", alt: "Roof fan prepared for installation in the van roof", caption: "" },
        { src: "campervan/working-camper.webp", alt: "Campervan interior during a later stage of the build", caption: "" },
        { src: "campervan/finished-kitchen.webp", alt: "Completed campervan kitchen and storage", caption: "" }
      ],
      related: ["3d-design", "outdoors"]
    },
    "3d-design": {
      path: "pages/3d-design.html",
      group: "Hobbies",
      label: "3D Design & Printing and Laser Cutting",
      title: "Prototyping ideas into finished objects",
      summary: "Personal CAD and fabrication projects that turn practical ideas into tangible objects.",
      role: "Design and fabrication",
      disciplines: ["CATIA", "3D printing", "Laser cutting", "Prototyping"],
      heroLayout: "right-of-title-small",
      cardImage: {
        src: "3d/bench-supply.webp",
        alt: "Homemade bench power supply built from an old computer power supply"
      },
      hero: {
        src: "3d/vape-shell.png",
        alt: "CAD render of a ventilated vape shell design"
      },
      intro: "I enjoy taking useful ideas from a digital design to a finished object. My projects include a bench power supply, an Arduino Mega enclosure, other 3D-printed parts and laser-cut gifts.",
      sections: [
        {
          title: "A custom front panel for a bench power supply",
          paragraphs: [
            "I converted an old PC power supply into a bench supply, designed a custom front panel in CATIA and printed it in PLA. The project brought CAD, fabrication and practical electronics together in a useful workshop tool."
          ]
        },
        {
          title: "Designing practical everyday parts",
          paragraphs: [
            "Other projects include an enclosure for an Arduino Mega, a wheel cap and a shell design. Each begins with a functional requirement and a shape, then progresses from CAD modelling to a physical part."
          ]
        },
        {
          title: "Making 50 laser-cut wedding boxes",
          paragraphs: [
            "For my sister's wedding, I designed 50 small gift boxes in CATIA and laser-cut their components from 4 mm plywood. The process involved translating a three-dimensional concept into flat parts and assembling them into a complete batch of gifts."
          ]
        }
      ],
      gallery: [
        { src: "3d/bench-supply.webp", alt: "Finished homemade bench power supply", caption: "A repurposed PC power supply with a custom 3D-printed panel." },
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
      summary: "A path from guitar to oud that brought music theory, instrument making and electronics together.",
      role: "Musician and instrument maker",
      disciplines: ["Music theory", "Piezo sensors", "Low-pass filter", "Amplifier circuit"],
      heroLayout: "right-of-title-small",
      hero: {
        src: "music/bass-performance.png",
        alt: "A musician playing bass guitar"
      },
      intro: "I began learning music theory through online videos. After moving to Sweden, I started playing guitar and joined a local group that met to play and sing. My interest later shifted towards the microtones of Middle Eastern music, which introduced me to the oud.",
      sections: [
        {
          title: "Discovering the oud",
          paragraphs: [
            "Unlike a guitar, the oud has no frets, allowing greater freedom to explore the subtle pitch intervals that first attracted me to the instrument. As I learned to play, I began considering whether I could build one myself."
          ]
        },
        {
          title: "Building an electric oud",
          paragraphs: [
            "With more confidence in electronics than woodworking, I chose to build an electric oud. Piezo sensors capture the instrument's vibrations and convert them into an electrical signal, which I shaped using a simple low-pass filter connected to an amplifier circuit."
          ]
        },
        {
          title: "Where music meets electronics",
          paragraphs: [
            "The project brought music, curiosity and electronics into a single instrument. It gave me a practical way to apply circuit-design knowledge to something personal while developing new skills along the way."
          ]
        }
      ],
      gallery: [
        { src: "music/oud-sketch.webp", alt: "Hand-drawn oud design sketch", caption: "A sketch from the instrument design." },
        { src: "music/oud-body-assembly.jpg", alt: "Partially assembled wooden oud body with curved frame and internal braces", caption: "" }
      ],
      related: ["3d-design", "campervan"]
    },
    outdoors: {
      path: "pages/outdoors.html",
      group: "Hobbies",
      label: "Outdoors",
      title: "A little further north, or simply outside",
      summary: "Time spent walking, exploring nature and cooking outdoors in changing weather.",
      disciplines: ["Walking", "Travel", "Outdoor cooking"],
      hero: {
        src: "outdoors/scandinavian-walk.webp",
        alt: "Ayman walking in an open Scandinavian mountain landscape"
      },
      intro: "I enjoy walking and spending quiet time in nature, whether alone or with friends and family. Being outdoors helps me slow down and feel a sense of freedom. I have visited every Swedish county, from Norrbotten to Skåne.",
      sections: [
        {
          title: "Finding space in the landscape",
          paragraphs: [
            "I am particularly drawn to Scandinavia's open, uncrowded landscapes. Sometimes a quiet walk, a wide view or a moment beside the water is reason enough to go outside."
          ]
        },
        {
          title: "A winter morning by the sea",
          paragraphs: [
            "One morning in December 2025, I sat by the sea after breakfast. The charcoal still glowed as I prepared to boil water for tea, while the warmth of the fire softened the cold coastal air."
          ]
        },
        {
          title: "Cooking outdoors in any weather",
          paragraphs: [
            "I also enjoy barbecuing in all kinds of weather. Sharing a meal outdoors is a simple pleasure and a welcome excuse to stay outside a little longer."
          ]
        }
      ],
      hideGalleryTitle: true,
      galleryLayout: "full-feature",
      gallery: [
        { src: "outdoors/winter-coast.webp", alt: "A winter camp and glowing charcoal beside the coast", caption: "A winter morning by the sea." },
        { src: "outdoors/winter-camp.webp", alt: "Small campfire and kettle on a winter shoreline", caption: "Tea by the fire." },
        { src: "outdoors/outdoor-cooking.webp", alt: "Food cooking over an outdoor barbecue", caption: "Cooking outdoors." },
        { src: "outdoors/barbecue.webp", alt: "Rows of food on a barbecue grill", caption: "Barbecue, whatever the weather." }
      ],
      related: ["campervan", "3d-design"]
    }
  }
};
