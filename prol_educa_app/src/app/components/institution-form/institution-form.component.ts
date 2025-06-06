import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardInstituicaoComponent } from '../card-instituicao/card-instituicao.component';

import { Router } from '@angular/router';
import { AlertService } from '../../shared/services/alert/alert.service';
import { InstituitionsService } from '../../services/admin-services/instituitions/instituitions.service';
import { InstitutionService } from '../../services/institution.service';
@Component({
  selector: 'app-institution-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CardInstituicaoComponent],
  templateUrl: './institution-form.component.html',
  styleUrls: ['./institution-form.component.scss'],
})
export class InstitutionFormComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alertService: AlertService,
    private institutionService: InstitutionService
  ) {}

  ngOnInit(): void {
    // Inicializar o formulário com todos os controles necessários
    this.form = this.fb.group({
      // Dados da Instituição
      cnpj: ['', Validators.required],
      complemento: [''],
      razaoSocial: ['', Validators.required],
      numero: ['', Validators.required],
      cep: ['', Validators.required],
      cidade: ['', Validators.required],
      rua: ['', Validators.required],
      estado: ['', Validators.required],
      status: [''],
      tipo: ['', Validators.required],

      // Dados do Responsável
      nomeResponsavel: ['', Validators.required],
      emailResponsavel: ['', [Validators.required, Validators.email]],
      telefoneResponsavel: ['', Validators.required],
      senhaResponsavel: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // Lógica para lidar com o arquivo selecionado
      console.log('Arquivo selecionado:', file.name);
    }
  }

  onCancel(): void {
    this.form.reset();
    this.router.navigate(['/admin/instituicao']);
  }

  onSubmit(): void {
    // if (this.form.valid) {
    //   console.log('Formulário enviado:', this.form.value);
    //   this.alertService.success('Instituição cadastrada com sucesso!')
    // } else {
    //   // Marcar todos os campos como touched para mostrar erros de validação
    //   Object.keys(this.form.controls).forEach((key) => {
    //     const control = this.form.get(key);
    //     control?.markAsTouched();
    //   });
    // }

console.log(this.form.value);
    if (this.form.valid) {
      console.log('entrou no if');
      this.institutionService.createNewInstitution(this.form.value).subscribe({
        next: () => {
          this.alertService.success('Instituição cadastrada com sucesso!');
          this.router.navigate(['/admin/instituicao']);
        },
        error: (err) => {
          console.error(err);
          this.alertService.error('Erro ao cadastrar a instituição');
        }
      });
    } else {
      console.log('entrou no else');
      Object.keys(this.form.controls).forEach((key) => {
        this.form.get(key)?.markAsTouched();
      });
    }

  }
}
