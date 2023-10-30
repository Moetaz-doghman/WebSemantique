import { DeliveredProcedureOutlined } from '@ant-design/icons';

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const etablissement = {
  id: 'group-etablissement',
  title: 'Etablissement',
  type: 'group',
  children: [
    {
      id: 'etablissement-list',
      title: 'Liste des etablissements',
      type: 'item',
      url: '/etablissement-list',
      icon: DeliveredProcedureOutlined
    }
  ]
};

export default etablissement;
