export interface FocusDomain {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  category: 'core' | 'industrial' | 'specialized';
  iconName: string;
}

export const engineeringFocusDomains: FocusDomain[] = [
  {
    id: 'embedded-systems',
    index: '01',
    title: 'EMBEDDED SYSTEMS',
    subtitle: 'Microcontrollers & Real-Time Firmware',
    description: 'Developing deterministic firmware for microcontrollers (STM32, ESP32, ESP8266, Arduino, FPGA) running FreeRTOS and bare-metal C/C++ routines.',
    technologies: ['C/C++', 'STM32', 'ESP32', 'Arduino', 'FreeRTOS', 'FPGA'],
    category: 'core',
    iconName: 'Cpu'
  },
  {
    id: 'automotive-harness',
    index: '02',
    title: 'AUTOMOTIVE WIRING HARNESS',
    subtitle: 'Production Optimization & Quality Control',
    description: 'Working within cable harness production environments, leveraging process improvement methodologies, Six Sigma Yellow Belt frameworks, and analytical problem-solving.',
    technologies: ['Cable Harness Production', 'Process Improvement', 'Six Sigma', 'Automotive Systems'],
    category: 'industrial',
    iconName: 'Network'
  },
  {
    id: 'industrial-automation',
    index: '03',
    title: 'INDUSTRIAL AUTOMATION',
    subtitle: 'Programmable Logic & Process Supervision',
    description: 'Building automated industrial control logic with Ladder programming, SCADA supervision interfaces, Node-RED flows, and MATLAB/Simulink modeling.',
    technologies: ['Ladder Logic', 'SCADA', 'Node-RED', 'MATLAB/Simulink', 'Process Control'],
    category: 'core',
    iconName: 'Bot'
  },
  {
    id: 'industrial-iot',
    index: '04',
    title: 'INDUSTRIAL IoT',
    subtitle: 'Telemetry & SCADA Monitoring',
    description: 'Designing end-to-end IoT monitoring architectures using ESP32 edge nodes, MQTT message streaming via Mosquitto, and real-time SCADA dashboards.',
    technologies: ['ESP32', 'MQTT', 'Mosquitto', 'Node-RED', 'SCADA', 'Blynk'],
    category: 'industrial',
    iconName: 'Radio'
  },
  {
    id: 'robotics',
    index: '05',
    title: 'ROBOTICS & MANIPULATION',
    subtitle: 'ROS2, LiDAR Spatial Perception & Smart Storage',
    description: 'Engineering autonomous mobile robots with ROS2 and LiDAR sensors, controlling robotic arms for product handling, and building React Native mobile supervision apps.',
    technologies: ['ROS2', 'LiDAR', 'Embedded Camera', 'Robotic Arm', 'React Native'],
    category: 'specialized',
    iconName: 'Terminal'
  },
  {
    id: 'electronic-design',
    index: '06',
    title: 'ELECTRONIC DESIGN',
    subtitle: 'Circuit Simulation & Virtual Instrumentation',
    description: 'Modeling electronic circuits, testing virtual instrumentation, and validating hardware designs using Proteus, PSIM, Modelsim, LABVIEW, and VHDL.',
    technologies: ['Proteus', 'PSIM', 'Modelsim', 'LABVIEW', 'VHDL'],
    category: 'specialized',
    iconName: 'Gauge'
  }
];

