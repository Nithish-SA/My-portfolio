import { Gauge, Radio, Zap, Cpu, ArrowRight } from 'lucide-react';

const projects = [
  {
    icon: Gauge,
    title: 'FX3 Logic Analyzer',
    subtitle: '100MHz USB 3.0 Logic Analyzer',
    problem: 'Need for high-speed signal capture and protocol decoding in development workflow',
    specs: [
      '100MHz sampling rate',
      'FX3 USB controller integration',
      'PulseView compatible',
      'UART/SPI protocol decode',
      '8-channel capture'
    ],
    impact: 'Production-ready debug tool detected in PulseView, enabling real-time protocol analysis',
    tags: ['USB 3.0', 'High-Speed', 'FX3', 'Signal Integrity'],
    color: 'blue'
  },
  {
    icon: Radio,
    title: '4-Layer FCC-Compliant Redesign',
    subtitle: 'EMI/EMC Optimized PCB',
    problem: 'Existing 2-layer board failed FCC radiated emissions testing',
    specs: [
      '4-layer stackup design',
      'Strategic decoupling placement',
      'Ground plane optimization',
      'Trace impedance control',
      'Ferrite bead integration'
    ],
    impact: 'Passed FCC Part 15 Class B RE tests on first submission, 15dB margin on critical frequencies',
    tags: ['EMI/EMC', 'FCC Certified', 'Production', 'Signal Integrity'],
    color: 'green'
  },
  {
    icon: Zap,
    title: '240VAC → 12VDC Buck Converter',
    subtitle: 'High-Power AC-DC Supply + 16A Relay Module',
    problem: 'Industrial application requiring isolated AC-DC conversion with high-current switching',
    specs: [
      '240VAC input, isolated',
      '12VDC @ 3A output',
      '16A relay control',
      'Thermal management',
      'Safety certifications ready'
    ],
    impact: 'Reliable power solution for industrial equipment, zero field failures in 500+ units',
    tags: ['Power Electronics', 'Isolation', 'High Current', 'Industrial'],
    color: 'orange'
  },
  {
    icon: Cpu,
    title: 'Raspberry Pi CM4 Carrier Board',
    subtitle: 'Custom Compute Module Integration',
    problem: 'Client needed custom I/O and connectivity for edge computing application',
    specs: [
      'CM4 socket integration',
      'Custom GPIO breakout',
      'Ethernet + WiFi',
      'M.2 NVMe support',
      'Industrial temp range'
    ],
    impact: 'Deployed in 200+ edge devices, enabling custom IoT solutions with standard CM4',
    tags: ['Embedded', 'Compute Module', 'IoT', 'Production'],
    color: 'purple'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Production-ready hardware solutions from concept to certification
            </p>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              const colorClasses = {
                blue: 'from-blue-500 to-blue-600',
                green: 'from-green-500 to-green-600',
                orange: 'from-orange-500 to-orange-600',
                purple: 'from-gray-700 to-gray-800'
              };

              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 group hover:-translate-y-2"
                >
                  <div className={`bg-gradient-to-r ${colorClasses[project.color as keyof typeof colorClasses]} p-6 text-white`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                        <Icon size={32} />
                      </div>
                      <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-white/90 text-sm">{project.subtitle}</p>
                  </div>

                  <div className="p-6">
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Problem</h4>
                      <p className="text-gray-700">{project.problem}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">Specifications</h4>
                      <ul className="space-y-2">
                        {project.specs.map((spec, specIndex) => (
                          <li key={specIndex} className="flex items-start gap-2 text-gray-700">
                            <span className="text-blue-600 mt-1">▸</span>
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Impact</h4>
                      <p className="text-gray-900 font-semibold">{project.impact}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block bg-blue-50 rounded-xl p-8 border-2 border-blue-200">
              <p className="text-gray-700 text-lg mb-4">
                <span className="font-bold text-blue-600">500+</span> production units deployed across multiple projects
              </p>
              <p className="text-gray-600">
                All designs are production-tested, FCC-compliant where applicable, and ready for manufacturing
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
