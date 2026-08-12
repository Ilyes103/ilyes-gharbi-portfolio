export interface TechStackCategory {
  index: string;
  id: string;
  title: string;
  contextualLabel: string;
  technologies: string[];
  variant: 'cyan' | 'blue' | 'amber' | 'green' | 'outline' | 'default';
}

export const techStackCategories: TechStackCategory[] = [
  {
    index: '01',
    id: 'embedded-electronics',
    title: 'EMBEDDED & ELECTRONICS',
    contextualLabel: 'Microcontrollers • Firmware • Hardware Platforms',
    technologies: ['C', 'C++', 'STM32', 'ESP32', 'ESP8266', 'Arduino', 'Raspberry Pi', 'FPGA', 'FreeRTOS'],
    variant: 'cyan'
  },
  {
    index: '02',
    id: 'industrial-automation',
    title: 'INDUSTRIAL AUTOMATION',
    contextualLabel: 'Process Control • SCADA • Programmable Logic',
    technologies: ['Ladder', 'SCADA', 'Node-RED', 'MATLAB/Simulink', 'Process Improvement'],
    variant: 'blue'
  },
  {
    index: '03',
    id: 'communication-protocols',
    title: 'COMMUNICATION PROTOCOLS',
    contextualLabel: 'Industrial Fieldbus • Telemetry Messaging',
    technologies: ['UART', 'SPI', 'I2C', 'CAN', 'MQTT', 'Mosquitto'],
    variant: 'amber'
  },
  {
    index: '04',
    id: 'design-software',
    title: 'DESIGN & SIMULATION SOFTWARE',
    contextualLabel: 'Circuit Modeling • Virtual Instrumentation • CAD',
    technologies: ['Proteus', 'PSIM', 'Modelsim', 'LABVIEW', 'Arduino IDE', 'VHDL'],
    variant: 'green'
  },
  {
    index: '05',
    id: 'iot-software',
    title: 'IOT PLATFORMS & SOFTWARE',
    contextualLabel: 'Cloud Systems • Mobile Supervision • Runtimes',
    technologies: ['Blynk', 'Arduino IOT cloud', 'Node-RED', 'Python', 'React Native', 'Linux', 'Windows'],
    variant: 'outline'
  },
  {
    index: '06',
    id: 'robotics-automotive',
    title: 'ROBOTICS & AUTOMOTIVE',
    contextualLabel: 'Perception • Robotic Arm • Wiring Harness',
    technologies: ['ROS2', 'LiDAR', 'Embedded Camera', 'Robotic Arm', 'Automotive Cable Harness', 'Six Sigma'],
    variant: 'default'
  }
];

export const architectureFlow = [
  { step: '01', label: 'HARDWARE / SENSORS', tech: 'LiDAR, Camera & Gas Transducers' },
  { step: '02', label: 'EMBEDDED MCU', tech: 'STM32 / ESP32 / Arduino HAL' },
  { step: '03', label: 'COMMUNICATION', tech: 'CAN / MQTT via Mosquitto' },
  { step: '04', label: 'INDUSTRIAL CONTROL', tech: 'Ladder Logic & FreeRTOS Tasks' },
  { step: '05', label: 'ROBOTICS & IOT', tech: 'ROS2 Nodes & Node-RED Engine' },
  { step: '06', label: 'SUPERVISION', tech: 'SCADA & React Native Mobile App' }
];

