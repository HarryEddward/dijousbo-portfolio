import { h } from 'preact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes';

const App = () => (
  <Router>
    <Routes>
      {routes.map(({ path, component: Component, children }, index) => (
        <Route key={index} path={path} element={<Component />}>
          {children && children.map(({ path: childPath, component: ChildComponent }, childIndex) => (
            <Route key={childIndex} path={childPath} element={<ChildComponent />} />
          ))}
        </Route>
      ))}
    </Routes>
  </Router>
);

export default App;
