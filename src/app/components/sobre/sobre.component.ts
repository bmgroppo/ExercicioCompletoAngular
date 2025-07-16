import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css'
})
export class SobreComponent implements OnInit{
  imagens = [
    'https://picsum.photos/100/100',
    'https://picsum.photos/200/200',
    'https://picsum.photos/300/300',
    'https://picsum.photos/400/400',
    'https://picsum.photos/500/500'
  ];

  currentImageIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.nextImage();
    }, 3000);
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.imagens.length;
  }
}



