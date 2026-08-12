import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Programming & Design Software',
    code: 'STACK_01',
    description: 'Core programming languages, hardware description, mathematical modeling, and electronic design software.',
    skills: [
      { name: 'C / C++', level: 'Core', tag: 'Embedded Firmware' },
      { name: 'Python', level: 'Core', tag: 'Scripting & Automation' },
      { name: 'Ladder Logic', level: 'Core', tag: 'PLC Programming' },
      { name: 'VHDL', level: 'Advanced', tag: 'FPGA Logic' },
      { name: 'MATLAB / Simulink', level: 'Advanced', tag: 'System Simulation' },
      { name: 'Proteus & PSIM', level: 'Core', tag: 'Circuit Simulation' },
      { name: 'Modelsim & LABVIEW', level: 'Advanced', tag: 'Virtual Testing' }
    ]
  },
  {
    category: 'Electronics & Microcontrollers',
    code: 'STACK_02',
    description: 'Embedded hardware platforms, microcontrollers, real-time operating systems, and single-board computers.',
    skills: [
      { name: 'STM32', level: 'Core', tag: 'ARM Cortex MCUs' },
      { name: 'ESP32 & ESP8266', level: 'Core', tag: 'Wi-Fi/BLE IoT MCUs' },
      { name: 'Arduino Platform', level: 'Core', tag: 'Prototyping & IDE' },
      { name: 'Raspberry Pi', level: 'Core', tag: 'Single Board Compute' },
      { name: 'FPGA', level: 'Advanced', tag: 'Digital Hardware' },
      { name: 'FreeRTOS', level: 'Core', tag: 'Real-Time Kernel' }
    ]
  },
  {
    category: 'Communication Protocols',
    code: 'STACK_03',
    description: 'Industrial fieldbus networks, serial communication interfaces, and IoT telemetry message brokers.',
    skills: [
      { name: 'CAN bus', level: 'Core', tag: 'Automotive & Industrial' },
      { name: 'MQTT & Mosquitto', level: 'Core', tag: 'IoT Telemetry' },
      { name: 'UART / SPI / I2C', level: 'Core', tag: 'Serial Peripherals' }
    ]
  },
  {
    category: 'IoT Platforms & Industrial Systems',
    code: 'STACK_04',
    description: 'Supervisory control and data acquisition (SCADA), Industry 4.0 platforms, and workflow automation.',
    skills: [
      { name: 'SCADA Systems', level: 'Core', tag: 'Dashboard Supervision' },
      { name: 'Node-RED', level: 'Core', tag: 'Fundamentals Certified' },
      { name: 'Arduino IOT Cloud & Blynk', level: 'Core', tag: 'IoT Dashboard' },
      { name: 'Process Improvement', level: 'Core', tag: 'Six Sigma Yellow Belt' }
    ]
  },
  {
    category: 'Robotics & Operating Systems',
    code: 'STACK_05',
    description: 'Autonomous robotics perception, mobile app supervision, and host/embedded operating systems.',
    skills: [
      { name: 'ROS2', level: 'Core', tag: 'Robot Operating System' },
      { name: 'LiDAR & Embedded Camera', level: 'Core', tag: 'Spatial Perception' },
      { name: 'Robotic Arm Control', level: 'Core', tag: 'Product Handling' },
      { name: 'React Native', level: 'Core', tag: 'Mobile Supervision' },
      { name: 'Linux & Windows', level: 'Core', tag: 'Operating Systems' }
    ]
  }
];

