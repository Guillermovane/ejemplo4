import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemplo4';

  //propiedades
  nombreCliente = "";
  emailCliente = "";
  opinionCliente= "";
  statusCliente= "";
  municipioCliente ="";
  autorizacion= false;

  //declaramos el formulario 
  formOpinion = new FormGroup({
    nombre: new FormControl(""),
    email: new FormControl(""),
    opinion: new FormControl(""),
    status: new FormControl(""),
    municipio: new FormControl(""),
    autorizacion: new FormControl(false),
  });

  //método que se ejecuta cuando se envia el formulario
  onSubmit(){
    this.nombreCliente = this.formOpinion.value.nombre!;
    this.emailCliente = this.formOpinion.value.email!;
    this.opinionCliente = this.formOpinion.value.opinion!;
    this.statusCliente = this.formOpinion.value.status!;
    this.municipioCliente = this.formOpinion.value.municipio!;
    this.autorizacion = this.formOpinion.value.autorizacion!;
  }
}
