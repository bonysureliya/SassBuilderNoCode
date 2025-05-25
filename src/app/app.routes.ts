import { Routes } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { HomeComponent } from './pages/home/home.component';
import { ComponentBuilderComponent } from './pages/component-builder/component-builder.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'builder',
    component: ComponentBuilderComponent,
  },

];
