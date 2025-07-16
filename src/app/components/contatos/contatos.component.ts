import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contatos',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contatos.component.html',
  styleUrl: './contatos.component.css'
})
export class ContatosComponent implements OnInit {
  contactForm!: FormGroup; // Define o tipo do formulário como FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // Inicializa o formulário ao carregar o componente
    this.contactForm = this.fb.group({
      nome: ['', Validators.required], // Campo 'nome' é obrigatório
      email: ['', [Validators.required, Validators.email]], // Campo 'email' é obrigatório e deve ser um email válido
      mensagem: ['', [Validators.required, Validators.minLength(10)]] // Campo 'mensagem' é obrigatório e deve ter no mínimo 10 caracteres
    });
  }

  //Getter para facilitar o acesso aos campos do form no template
  get f() {
    return this.contactForm.controls;
  }

  onSubmit(): void {
    // Verifica se o formulário é válido
    if (this.contactForm.valid) {
      // Exibe os dados no console
      console.log('Formulário enviado:', this.contactForm.value);

      // Exibe um alerta de sucesso
      alert('Formulário enviado com sucesso! Veja os dados no console.');

      // Limpa os campos do formulário
      this.contactForm.reset();
    } else {
      // Exibe um alerta de erro
      alert('Por favor, preencha todos os campos corretamente.');

      //Marca todos os controles como touched para exibir os erros
      this.markAllAsTouched();
    }
  }

  //Marca todos os campos do form como touched
  markAllAsTouched(): void {
    Object.values(this.contactForm.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}











