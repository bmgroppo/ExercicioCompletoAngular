import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-painel',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './painel.component.html',
  styleUrl: './painel.component.css'
})
export class PainelComponent {
  usuario = '';
  senha = '';
  erro = '';

  constructor(private authService: AuthService, private router: Router) {}
  
  login() {
    if (this.authService.login(this.usuario, this.senha)) {
      this.router.navigate(['/painel-controle']);
    } else {
      this.erro = 'Usuário ou senha inválidos';
    }
}
}
