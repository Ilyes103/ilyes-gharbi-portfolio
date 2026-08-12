import type { PhilosophyPrinciple } from '../types';

export const philosophyPrinciples: PhilosophyPrinciple[] = [
  {
    id: 'phil-01',
    number: '01',
    title: 'DETERMINISM & REAL-TIME RELIABILITY',
    quote: '"In physical systems, a late result is a wrong result."',
    description: 'Engineering firmware for industrial environments requires absolute execution predictability. Memory allocation is kept deterministic, tasks are assigned strict priorities via FreeRTOS, and critical hardware interrupts take precedence over non-urgent networking calls.',
    bullets: [
      'Zero dynamic heap allocation in time-critical ISR loops.',
      'Hardware watchdog timers configured on all microcontroller nodes.',
      'Fail-safe default pin states for immediate hardware shutdown.'
    ]
  },
  {
    id: 'phil-02',
    number: '02',
    title: 'ROBUST FIELDBUS COMMUNICATION',
    quote: '"A sensor is only as good as the network carrying its data."',
    description: 'Factory floors are hostile electromagnetic environments. Systems must be built using differential, noise-immune physical layers (RS485, CAN bus) paired with validated packet framing, CRC checks, and ring-buffer fallback handling.',
    bullets: [
      'Differential physical transceivers for electromagnetic noise rejection.',
      'Explicit frame verification (CRC/Checksum) on every received packet.',
      'Local non-volatile buffer queueing during temporary network outages.'
    ]
  },
  {
    id: 'phil-03',
    number: '03',
    title: 'HARDWARE-IN-THE-LOOP (HIL) RIGOR',
    quote: '"Test early, inject faults, automate verification."',
    description: 'Relying solely on software simulations leaves real-world corner cases undetected. Implementing automated hardware-in-the-loop test benches ensures ECUs and microcontrollers are validated under realistic signal noise and simulated component failures.',
    bullets: [
      'Automated fault injection (short circuits, open loops, voltage dips).',
      'Microsecond CAN bus timestamping for diagnostic verification.',
      'Continuous automated test regression suites.'
    ]
  },
  {
    id: 'phil-04',
    number: '04',
    title: 'SCALABLE EDGE-TO-CLOUD INTEROPERABILITY',
    quote: '"Seamless convergence of Operational Technology (OT) and Information Technology (IT)."',
    description: 'Modern Industry 4.0 architectures bridges low-level hardware controllers with modern software stacks. Using standardized protocols like OPC UA and MQTT allows microcontrollers to communicate directly with edge containers and web dashboards.',
    bullets: [
      'Clean separation between real-time firmware and web microservices.',
      'Standardized payload definitions (JSON Schemas / Protobuf / Modbus maps).',
      'Containerized edge deployment for repeatable factory rollouts.'
    ]
  }
];
