export const healthIndicators = [
  {
    id: 'heart',
    label: 'Healthy Heart',
    status: 'healthy',
    position: { top: 40, left: 50 }
  },
  {
    id: 'lungs',
    label: 'Lungs',
    status: 'issue',
    position: { top: 50, left: 40 }
  },
  {
    id: 'teeth',
    label: 'Teeth',
    status: 'healthy',
    position: { top: 20, left: 50 }
  },
  {
    id: 'bone',
    label: 'Bone',
    status: 'healthy',
    position: { top: 70, left: 60 }
  }
];

export const healthStatusDetails = [
  {
    id: 'lungs',
    label: 'Lungs',
    status: 'issue',
    lastCheck: '2023-10-15',
    nextCheck: '2023-11-15',
    value: '85%',
    description: 'Minor inflammation detected'
  },
  {
    id: 'teeth',
    label: 'Teeth',
    status: 'healthy',
    lastCheck: '2023-09-20',
    nextCheck: '2024-03-20',
    value: '98%',
    description: 'Regular cleaning recommended'
  },
  {
    id: 'bone',
    label: 'Bone',
    status: 'healthy',
    lastCheck: '2023-08-05',
    nextCheck: '2024-02-05',
    value: '92%',
    description: 'Normal density maintained'
  }
];