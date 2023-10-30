import { DeliveredProcedureOutlined } from '@ant-design/icons';

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const evenement = {
  id: 'group-evenement',
  title: 'Evenement',
  type: 'group',
  children: [
    {
      id: 'evenement-list',
      title: 'Liste des Evenements',
      type: 'item',
      url: '/evenement-list',
      icon: DeliveredProcedureOutlined
    }
  ]
};

export default evenement;
