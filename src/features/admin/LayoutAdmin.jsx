import { SidebarProvider } from 'contexts/SidebarContext';
import MainAdmin from './MainAdmin';

function LayoutAdmin() {
//   const [state, dispatch] = useContext(SidebarContext);
  
//   useEffect(() => {
//     function handleResize() {
//       if(window.innerWidth >= 1200 )
//       {
//         dispatch({type: SHOW_SIDEBAR, active: false});
//       }
//       else
//       {
//         dispatch({type: SHOW_SIDEBAR, active: true});
//       }
//     }
//     window.addEventListener('resize', handleResize)
//     return () => {
//       window.removeEventListener('resize', handleResize)
//     }
// });
  return (
    <SidebarProvider>
      <MainAdmin />
    </SidebarProvider>
  );
}

export default LayoutAdmin;