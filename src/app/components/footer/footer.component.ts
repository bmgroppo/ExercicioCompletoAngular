import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  email = 'groppo.mg@pm.rj.gov.br';
  gitURL = 'https://www.git.com/bmgroppo';
  instagramURL = 'https://www.instagram.com/seu_perfil';
  linkedinURL = 'https://www.linkedin.com/in/seu_perfil';

  textoInstitucional = 'Bruno Groppo - Todos os direitos reservados.';

}
