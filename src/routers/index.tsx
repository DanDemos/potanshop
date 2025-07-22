import { BrowserRouter } from 'react-router-dom';
import RouteList from './router';

const AppLayout: React.FC = () => {
  return (
    <BrowserRouter>
      <RouteList />
    </BrowserRouter>
  );
};

export default AppLayout;