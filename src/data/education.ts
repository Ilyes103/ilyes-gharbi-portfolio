import type { EducationEntry } from '../types';

export const educationData: EducationEntry[] = [
  {
    id: 'edu-01',
    degree: 'Engineering Degree in Electrical Engineering',
    specialization: 'Embedded Systems, Industrial Automation & Smart Manufacturing',
    institution: 'International Multidisciplinary School of Sousse',
    period: '2022 – 2025',
    location: 'Sousse, Tunisia',
    keyCoursework: [
      'Microcontroller Architectures (STM32, ESP32, ESP8266, FPGA)',
      'Real-Time Operating Systems (FreeRTOS)',
      'Industrial Communication Protocols (CAN, MQTT, UART, SPI, I2C)',
      'Industrial Automation & PLC Programming (Ladder)',
      'Design Software (Proteus, PSIM, Modelsim, LABVIEW)',
      'Robotics & Industrial Telemetry (ROS2, Node-RED, SCADA)'
    ],
    achievements: [
      'Engineered autonomous robotics & storage system during final year project at SEBN, Jendouba.',
      'Comprehensive preparation in electrical engineering, embedded firmware, and Industry 4.0 automation.'
    ]
  },
  {
    id: 'edu-02',
    degree: "Bachelor's Degree in Electrical Engineering",
    specialization: 'Electrical Engineering & Electronics',
    institution: 'Higher Institute of Technological Studies of Jendouba',
    period: '2018 – 2022',
    location: 'Jendouba, Tunisia',
    keyCoursework: [
      'Electrical Engineering Fundamentals',
      'Analog & Digital Electronics',
      'Circuit Analysis & Power Engineering',
      'Control Systems & Instrumentation',
      'MATLAB / Simulink & Prototyping'
    ],
    achievements: [
      'Graduated with Bachelor’s Degree in Electrical Engineering.',
      'Strong foundational training in electronic circuits, control systems, and industrial instrumentation.'
    ]
  }
];

