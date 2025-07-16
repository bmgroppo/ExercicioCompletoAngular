import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css'
})
export class SobreComponent implements OnInit, OnDestroy {
  imagens = [
    'https://picsum.photos/800/400?random=1',
    'https://picsum.photos/800/400?random=2',
    'https://picsum.photos/800/400?random=3'
  ];

  currentImageIndex = 0;
  private intervalId: any;

  ngOnInit() {
    this.iniciarAutoplay();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  iniciarAutoplay() {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 3000);
  }

  private nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.imagens.length;
  }

  public imagemAnterior(): void {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.imagens.length) % this.imagens.length;
    this.resetarAutoplay();
  }

  public proximaImagem(): void {
    this.nextImage();
    this.resetarAutoplay();
  }

  private resetarAutoplay(): void {
    clearInterval(this.intervalId);
    this.iniciarAutoplay();
  }
}
