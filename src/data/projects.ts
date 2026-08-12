export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  featured: boolean;
  description: string;
  technologies: string[];
  engineeringFocus: string[];
  systemPipeline: string[];
  overview: string;
  challenge: string;
  architectureDetails: string;
  approach: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: 'amr-robotics-storage',
    number: '01',
    title: 'Autonomous Robot & Robotic Arm for Product Handling & Storage',
    category: 'ROBOTICS / INDUSTRY 4.0',
    featured: true,
    description: 'Designed and implemented an autonomous robot based on ROS2, LiDAR, and embedded camera, integrated with a robotic arm for handling and storage, supervised via a React Native mobile application.',
    technologies: ['ROS2', 'LiDAR', 'Embedded Camera', 'Robotic Arm', 'React Native', 'C++', 'Python'],
    engineeringFocus: [
      'autonomous navigation',
      'robotic arm manipulation',
      'real-time supervision',
      'inventory management',
      'product traceability'
    ],
    systemPipeline: ['SENSORS & LIDAR', 'ROS2 CORE', 'ROBOTIC ARM CONTROL', 'REACT NATIVE APP', 'INVENTORY MANAGEMENT'],
    overview: 'Final year engineering project conducted at SEBN Jendouba. Developed an autonomous mobile robotics and manipulation system for automated material handling, product storage, and real-time inventory tracking.',
    challenge: 'Integrating spatial perception with LiDAR and embedded vision while achieving reliable robotic arm control for product handling and synchronizing telemetry with a custom mobile supervision app.',
    architectureDetails: 'LiDAR & Embedded Camera → ROS2 Autonomous Navigation Node → Embedded Robotic Arm Motion Controller → MQTT Telemetry Gateway → React Native Mobile Supervision App.',
    approach: 'Engineered ROS2 nodes for autonomous robot movement, programmed motion control routines for the robotic arm, and built a cross-platform React Native mobile application for real-time supervision and inventory traceability.'
  },
  {
    id: 'smart-factory-monitoring',
    number: '02',
    title: 'Smart Factory Environmental Monitoring System',
    category: 'INDUSTRIAL IoT / INDUSTRY 4.0',
    featured: false,
    description: 'Developed an Industry 4.0 IoT-based environmental monitoring system for industrial applications, enabling real-time monitoring of temperature, humidity, air quality, and safety parameters through a SCADA dashboard.',
    technologies: ['ESP32', 'Arduino IDE', 'MQTT', 'Mosquitto', 'Node-RED', 'SCADA', 'Industry 4.0'],
    engineeringFocus: [
      'data acquisition',
      'MQTT telemetry',
      'SCADA visualization',
      'alarm management',
      'environmental safety'
    ],
    systemPipeline: ['ENVIRONMENTAL SENSORS', 'ESP32 DATA ACQUISITION', 'MOSQUITTO MQTT', 'NODE-RED ENGINE', 'SCADA DASHBOARD'],
    overview: 'An Industry 4.0 environmental monitoring solution built to collect and process atmospheric, temperature, humidity, and safety metrics across industrial plant environments.',
    challenge: 'Ensuring continuous non-blocking sensor acquisition on low-cost ESP32 microcontrollers and maintaining low-latency MQTT data publication under industrial conditions.',
    architectureDetails: 'Industrial Environmental Sensor Probe Array → ESP32 Microcontroller (Arduino IDE) → Mosquitto MQTT Broker → Node-RED Logic & Dashboard UI → SCADA Alarm Manager.',
    approach: 'Implemented robust ADC signal sampling loops on ESP32 microcontrollers, published structured MQTT messages via Mosquitto, and built Node-RED flows for SCADA visualization and real-time alarm threshold alerts.'
  },
  {
    id: 'steg-gas-station',
    number: '03',
    title: 'Steg Gas Pressure Regulating Station',
    category: 'INDUSTRIAL IoT / SCADA',
    featured: false,
    description: 'Developed an IoT-based monitoring system for a STEG gas pressure regulating station, enabling real-time monitoring of gas pressure, temperature, and safety parameters through a SCADA dashboard.',
    technologies: ['ESP32', 'Arduino IDE', 'MQTT', 'Mosquitto', 'Node-RED', 'SCADA', 'IoT'],
    engineeringFocus: [
      'gas pressure monitoring',
      'temperature acquisition',
      'safety parameter telemetry',
      'SCADA dashboard',
      'remote supervision'
    ],
    systemPipeline: ['PRESSURE & TEMP SENSORS', 'ESP32 MCU', 'MQTT BROKER', 'NODE-RED LOGIC', 'SCADA INTERFACE'],
    overview: 'Specialized IoT monitoring setup designed for a STEG gas pressure regulating station to supervise gas distribution pressure, ambient thermal metrics, and safety interlocks.',
    challenge: 'Establishing reliable parameter monitoring for gas pressure regulating equipment with immediate alarm feedback for out-of-spec readings.',
    architectureDetails: 'Gas Pressure Transducers & Temperature Sensors → ESP32 Firmware Node → Mosquitto MQTT Telemetry Queue → Node-RED Flow Engine → Central SCADA Dashboard.',
    approach: 'Configured embedded ESP32 acquisition code in Arduino IDE, established MQTT communication over Mosquitto brokers, and constructed interactive Node-RED SCADA panels for operators.'
  },
  {
    id: 'cable-harness-optimization',
    number: '04',
    title: 'Automotive Cable Harness Production Optimization',
    category: 'AUTOMOTIVE / PROCESS IMPROVEMENT',
    featured: false,
    description: 'Applied process improvement methodologies and analytical problem-solving approaches in automotive wiring harness manufacturing at SEBN Jendouba.',
    technologies: ['Automotive Wiring Harness', 'Process Improvement', 'Cable Harness Production', 'Quality Optimization'],
    engineeringFocus: [
      'cable harness production',
      'process improvement',
      'quality optimization',
      'problem-solving approaches',
      'automotive manufacturing'
    ],
    systemPipeline: ['PRODUCTION LINE', 'PROCESS ANALYSIS', 'PROBLEM SOLVING', 'QUALITY METRICS', 'WORKFLOW OPTIMIZATION'],
    overview: 'Engineering internship initiative at SEBN Jendouba focused on cable harness production environments, analyzing line efficiency, and applying process improvement methodologies.',
    challenge: 'Identifying workflow bottlenecks and defect drivers in high-complexity automotive wiring harness assembly processes.',
    architectureDetails: 'Wire Assembly Stations & Test Rigs → Process Performance Diagnostics → Root Cause Analysis → Workflow Optimization.',
    approach: 'Utilized systematic problem-solving methods and process improvement frameworks to streamline cable harness assembly steps, reduce assembly error rates, and improve production quality.'
  }
];

