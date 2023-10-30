import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

// render - commande
const CommandeList = Loadable(lazy(() => import('pages/commandes/ListCommande')));
const EtablissementList = Loadable(lazy(() => import('pages/etablissement')));
const EtudiantList = Loadable(lazy(() => import('pages/etudiant')));
const EvenementList = Loadable(lazy(() => import('pages/evenement')));
const MatiereList = Loadable(lazy(() => import('pages/matieres')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },

    {
      path: 'color',
      element: <Color />
    },

    {
      path: 'commande-list',
      element: <CommandeList />
    },
    {
      path: 'etablissement-list',
      element: <EtablissementList />
    },
    {
      path: 'etudiant-list',
      element: <EtudiantList />
    },
    {
      path: 'evenement-list',
      element: <EvenementList />
    },
    {
      path: 'matiere-list',
      element: <MatiereList />
    },

    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {
      path: 'typography',
      element: <Typography />
    },
    {
      path: 'icons/ant',
      element: <AntIcons />
    }
  ]
};

// // Component to handle authentication check
// const AuthenticationCheck = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(null);
//   const navigate = useNavigate();
//   const token = localStorage.getItem('token');
//   useEffect(() => {
//     // Make an HTTP request to check authentication
//     fetch('https://amazony-backend.vercel.app/admin/check', {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setIsAuthenticated(data.isAuthenticated);
//       })
//       .catch((error) => {
//         console.error('Authentication check failed:', error);
//         setIsAuthenticated(false);
//       });
//   }, [token]);

//   if (isAuthenticated === null) {
//     // Waiting for authentication check response
//     return null;
//   } else if (isAuthenticated) {
//     // User is authenticated, render the children
//     return children;
//   } else {
//     // User is not authenticated, navigate to login page
//     navigate('/');
//     return null;
//   }
// };

// // Wrap the MainRoutes with AuthenticationCheck
// MainRoutes.element = <AuthenticationCheck>{MainRoutes.element}</AuthenticationCheck>;

// AuthenticationCheck.propTypes = {
//   children: PropTypes.node.isRequired
// };
export default MainRoutes;
