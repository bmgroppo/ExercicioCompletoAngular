import { Component,OnInit } from '@angular/core';
import { ProdutosService } from '../../services/produtos.service';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(private produtosService: ProdutosService) { }

  produtos: any[] = [];
  
  ngOnInit(): void {
    this.produtos = this.produtosService.produtos;
  }
}
