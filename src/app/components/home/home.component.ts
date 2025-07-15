import { Component,OnInit } from '@angular/core';
import { ProdutosService } from '../../services/produtos.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
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
