import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ContatosComponent } from './components/contatos/contatos.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { PainelComponent } from './components/painel/painel.component';
import { PainelControleComponent } from './components/painel-controle/painel-controle.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'home', component:HomeComponent},
    {path:'servicos', component:ServicosComponent},
    {path:'sobre', component:SobreComponent},
    {path:'contatos', component:ContatosComponent},
    {path:'painel', component:PainelComponent},
    {path:'painel-controle', component:PainelControleComponent, canActivate: [authGuard]}
];
