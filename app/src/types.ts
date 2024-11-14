import React, { ReactElement } from 'react';

export interface RouteConfig {
  path: string;
  component: React.ComponentType<any>;
  children?: RouteConfig[]; // Para las subrutas opcionales
}
