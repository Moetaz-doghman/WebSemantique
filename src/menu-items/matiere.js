import { DeliveredProcedureOutlined } from '@ant-design/icons';

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const matiere = {
  id: 'group-matiere',
  title: 'Matiere',
  type: 'group',
  children: [
    {
      id: 'matiere-list',
      title: 'Liste des Matieres',
      type: 'item',
      url: '/matiere-list',
      icon: DeliveredProcedureOutlined
    }
  ]
};

export default matiere;
