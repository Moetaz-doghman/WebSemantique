import { DeliveredProcedureOutlined } from '@ant-design/icons';

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const etudiant = {
  id: 'group-etudiant',
  title: 'Etudiant',
  type: 'group',
  children: [
    {
      id: 'etudiant-list',
      title: 'Liste des Etudiants',
      type: 'item',
      url: '/etudiant-list',
      icon: DeliveredProcedureOutlined
    }
  ]
};

export default etudiant;
