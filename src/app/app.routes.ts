import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ContatosComponent } from './components/contatos/contatos.component';
import { ServicosComponent } from './components/servicos/servicos.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'home', component:HomeComponent},
    {path:'servicos', component:ServicosComponent},
    {path:'sobre', component:SobreComponent},
    {path:'contatos', component:ContatosComponent}
];
