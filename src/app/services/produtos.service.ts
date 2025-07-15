import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor() { }

  produtos =[
    {
      id: 1,
      rotulo:'Produto1',
      detalhe:'Detalhes do Produto1',
      img:'https://picsum.photos/100/100'
    },
    {
      id: 2,
      rotulo:'Produto2',
      detalhe:'Detalhes do Produto2',
      img:'https://picsum.photos/200/200'
    },
    {
      id: 3,
      rotulo:'Produto3',
      detalhe:'Detalhes do Produto3',
      img:'https://picsum.photos/300/300'
    },
    {
      id: 4,
      rotulo:'Produto4',
      detalhe:'Detalhes do Produto4',
      img:'https://picsum.photos/400/400'
    },
    {
      id: 5,
      rotulo:'Produto5',
      detalhe:'Detalhes do Produto5',
      img:'https://picsum.photos/500/500'
    },
    {
      id: 6,
      rotulo:'Produto6',
      detalhe:'Detalhes do Produto6',
      img:'https://picsum.photos/600/600'
    }
  ]
}
