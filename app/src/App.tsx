import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './routes';
import { RouteConfig } from './types';
import './index.css'
import { DEFAULT_THEME } from './themes';
import { applyTheme } from './themes/utils';

// Renderiza las rutas, incluyendo las hijas (children)
const renderRoutes = (routes: RouteConfig[]): JSX.Element[] =>
  routes.map(({ path, component: Component, children }, index) => (
    <Route key={index} path={path} element={<Component />}>
      {children && renderRoutes(children)}
    </Route>
  ));

const App: React.FC = () => {

  const [theme, setTheme] = useState(DEFAULT_THEME);

  /**
   * Run the applyTheme function every time the theme state changes
   */
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);


  return(
    <div className='transition-colors bg-primary-background text-secondary w-full h-full'>
      <Router
      >
        <Routes>
          {renderRoutes(routes)}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
