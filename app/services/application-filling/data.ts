// Application data structure (will be replaced with API data later)
export interface Application {
  id: number;
  title: string;
  name: string;
  officialNotificationDocument: string;
  applicationFee: number;
  applyingCharges: number;
  totalAmount: number;
  requiredDocuments: {
    educational: string[];
    identity: string[];
    other: string[];
  };
}

export const sampleApplications: Application[] = [
  {
    id: 1,
    title: 'TSPSC Group I Services Notification',
    name: 'TSPSC Group I',
    officialNotificationDocument: '/Ramakrishna_Chennuri_Modern_Resume (1).pdf',
    applicationFee: 200,
    applyingCharges: 150,
    totalAmount: 350,
    requiredDocuments: {
      educational: ['10th Certificate', '12th Certificate', 'Degree Certificate', 'Marks Memos'],
      identity: ['Aadhaar Card', 'PAN Card'],
      other: ['Passport Size Photos (4)', 'Category Certificate (if applicable)', 'Nativity Certificate']
    }
  },
  {
    id: 2,
    title: 'RRB NTPC Recruitment 2024',
    name: 'RRB NTPC',
    officialNotificationDocument: '/Ramakrishna_Chennuri_Modern_Resume (1).pdf',
    applicationFee: 500,
    applyingCharges: 200,
    totalAmount: 700,
    requiredDocuments: {
      educational: ['10th Certificate', '12th Certificate', 'Degree Certificate'],
      identity: ['Aadhaar Card', 'Photo ID Proof'],
      other: ['Passport Size Photos (6)', 'Medical Certificate']
    }
  },
  {
    id: 3,
    title: 'IBPS PO/MT Notification 2024',
    name: 'IBPS PO/MT',
    officialNotificationDocument: '/Ramakrishna_Chennuri_Modern_Resume (1).pdf',
    applicationFee: 850,
    applyingCharges: 175,
    totalAmount: 1025,
    requiredDocuments: {
      educational: ['10th Certificate', '12th Certificate', 'Graduation Degree', 'Post Graduation (if applicable)'],
      identity: ['Aadhaar Card', 'PAN Card', 'Valid ID Proof'],
      other: ['Passport Size Photos (8)', 'Signature Scanned Copy', 'Left Thumb Impression']
    }
  },
  {
    id: 4,
    title: 'Postal Assistant / Sorting Assistant',
    name: 'Postal Assistant',
    officialNotificationDocument: '/Ramakrishna_Chennuri_Modern_Resume (1).pdf',
    applicationFee: 100,
    applyingCharges: 100,
    totalAmount: 200,
    requiredDocuments: {
      educational: ['10th Certificate', '12th Certificate'],
      identity: ['Aadhaar Card'],
      other: ['Passport Size Photos (2)']
    }
  },
  {
    id: 5,
    title: 'TS EAMCET 2024 Entrance Examination',
    name: 'TS EAMCET',
    officialNotificationDocument: '/Ramakrishna_Chennuri_Modern_Resume (1).pdf',
    applicationFee: 800,
    applyingCharges: 150,
    totalAmount: 950,
    requiredDocuments: {
      educational: ['10th Certificate', '12th Certificate', 'Intermediate Marks Memo'],
      identity: ['Aadhaar Card', 'Hall Ticket Number (if appearing)'],
      other: ['Passport Size Photos (3)', 'Parent Income Certificate']
    }
  },
  {
    id: 7,
    title: 'SSC CGL Recruitment 2024',
    name: 'SSC CGL',
    officialNotificationDocument: '/Ramakrishna_Chennuri_Modern_Resume (1).pdf',
    applicationFee: 100,
    applyingCharges: 150,
    totalAmount: 250,
    requiredDocuments: {
      educational: ['10th Certificate', '12th Certificate', 'Graduation Degree'],
      identity: ['Aadhaar Card', 'PAN Card'],
      other: ['Passport Size Photos (4)', 'Category Certificate (if applicable)', 'Domicile Certificate']
    }
  },
  {
    id: 8,
    title: 'UPSC Civil Services Examination 2024',
    name: 'UPSC CSE',
    officialNotificationDocument: '/Ramakrishna_Chennuri_Modern_Resume (1).pdf',
    applicationFee: 100,
    applyingCharges: 250,
    totalAmount: 350,
    requiredDocuments: {
      educational: ['10th Certificate', '12th Certificate', 'Graduation Degree', 'Marks Memos'],
      identity: ['Aadhaar Card', 'PAN Card', 'Photo ID Proof'],
      other: ['Passport Size Photos (6)', 'Signature Scanned Copy', 'Category Certificate (if applicable)']
    }
  },
  {
    id: 9,
    title: 'SBI PO Recruitment 2024',
    name: 'SBI PO',
    officialNotificationDocument: '/Ramakrishna_Chennuri_Modern_Resume (1).pdf',
    applicationFee: 750,
    applyingCharges: 200,
    totalAmount: 950,
    requiredDocuments: {
      educational: ['10th Certificate', '12th Certificate', 'Graduation Degree'],
      identity: ['Aadhaar Card', 'PAN Card'],
      other: ['Passport Size Photos (4)', 'Signature Scanned Copy', 'Left Thumb Impression', 'Medical Certificate']
    }
  }
];

