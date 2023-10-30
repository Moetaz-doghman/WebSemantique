import { DeliveredProcedureOutlined } from '@ant-design/icons';

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const commande = {
  id: 'group-commande',
  title: 'Enseignant',
  type: 'group',
  children: [
    {
      id: 'commande-list',
      title: 'Liste des enseignants',
      type: 'item',
      url: '/commande-list',
      icon: DeliveredProcedureOutlined
    }
  ]
};

export default commande;
