import type { ArchitectureLayer, EngineeringPrinciple } from '../types';

export const architectureLayers: ArchitectureLayer[] = [
  {
    step: '01',
    id: 'physical',
    name: 'PHYSICAL',
    flowLabel: 'PHYSICAL',
    subtitle: 'Sensors, Actuators & Signal Processing',
    technologies: ['Sensors', 'Actuators', 'Electrical signals'],
    description: 'Physical hardware layer acquiring analog and digital electrical signals from sensors and driving electromechanical actuators.'
  },
  {
    step: '02',
    id: 'embedded',
    name: 'EMBEDDED',
    flowLabel: 'EMBEDDED',
    subtitle: 'Microcontrollers & Real-Time Firmware',
    technologies: ['ESP32', 'STM32', 'Arduino'],
    description: 'Embedded compute nodes running low-level HAL drivers, deterministic FreeRTOS tasks, and real-time execution loops.'
  },
  {
    step: '03',
    id: 'communication',
    name: 'COMMUNICATION',
    flowLabel: 'CONNECTED',
    subtitle: 'Industrial Fieldbus & Telemetry Queues',
    technologies: ['CAN', 'MQTT', 'Modbus', 'OPC UA'],
    description: 'Noise-immune industrial transport layer routing telemetry frames across fieldbus buses and IP network queues.'
  },
  {
    step: '04',
    id: 'control',
    name: 'CONTROL',
    flowLabel: 'CONTROLLED',
    subtitle: 'Automation & Supervisory Logic',
    technologies: ['PLC', 'SCADA', 'Automation'],
    description: 'Programmable logic controllers and supervisory control loops maintaining system safety interlocks and operational logic.'
  },
  {
    step: '05',
    id: 'edge-software',
    name: 'EDGE / SOFTWARE',
    flowLabel: 'PROCESSED',
    subtitle: 'Application Runtimes & Microservices',
    technologies: ['Python', 'FastAPI', 'Node-RED', 'Docker'],
    description: 'Edge computing layer executing workflow engines, containerized API services, and real-time data pipelines.'
  },
  {
    step: '06',
    id: 'data',
    name: 'DATA',
    flowLabel: 'STORED',
    subtitle: 'Time-Series & Telemetry Storage',
    technologies: ['PostgreSQL', 'InfluxDB', 'WebSocket'],
    description: 'Storage layer buffering timestamped telemetry data, system logs, and WebSocket real-time streams.'
  },
  {
    step: '07',
    id: 'visualization',
    name: 'VISUALIZATION',
    flowLabel: 'VISUALIZED',
    subtitle: 'Web HMIs & Supervision Dashboards',
    technologies: ['React', 'Dashboards', 'Monitoring'],
    description: 'Human-machine interface (HMI) visual supervision node rendering active metrics, alarms, and control views.'
  }
];

export const engineeringPrinciples: EngineeringPrinciple[] = [
  {
    id: 'principle-01',
    number: '01',
    title: 'SYSTEM INTEGRATION',
    description: 'Connect hardware, firmware, communication, and software into cohesive architectures.'
  },
  {
    id: 'principle-02',
    number: '02',
    title: 'REAL-TIME DATA',
    description: 'Capture and process system information continuously with low-latency execution.'
  },
  {
    id: 'principle-03',
    number: '03',
    title: 'TESTABILITY',
    description: 'Design systems that can be monitored, validated, and verified under stress.'
  },
  {
    id: 'principle-04',
    number: '04',
    title: 'MODULARITY',
    description: 'Separate system layers for clean maintenance, scalability, and decoupled upgrades.'
  },
  {
    id: 'principle-05',
    number: '05',
    title: 'OBSERVABILITY',
    description: 'Make internal system state, telemetry data, and diagnostic flags visible.'
  }
];
