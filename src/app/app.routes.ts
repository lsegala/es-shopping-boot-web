import {RouterModule, Routes} from '@angular/router';
import {DetalheComponent} from './detalhe/detalhe.component';
import {ModuleWithProviders} from '@angular/core';
import {ItensComponent} from './itens/itens.component';

export const routes: Routes = [{
  path: '', component: ItensComponent
}, {
  path: 'detalhe/:id', component: DetalheComponent
}];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
