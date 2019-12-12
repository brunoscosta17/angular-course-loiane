import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor(private http: HttpClient) { }

  user: any = {
    name: '',
    email: '',
    address: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      state: ''
    }
  }

  onSubmit(form) {
    console.log(form);
    console.log(this.user);
  }

  fetchCEP(cep, form) {
    // Método que retira qualquer dígito não numérico
    cep = cep.replace(/\D/g, '');

    this.clearDataForm(form);

    // Verifica se o campo cep possui valor informado
    if (cep != "") {
      // Regex para validar o cep
      let validateCep = /^[0-9]{8}$/;

      if (validateCep.test(cep)) {
        this.http.get(`https://viacep.com.br/ws/${cep}/json`)
          .subscribe(data => this.populateDataForm(data, form));
      }
    }
  }

  populateDataForm(data, form) {
    // form.setValue({
    //   name: form.value.name,
    //   email: form.value.email,
    //   address: {
    //     street: data.logradouro,
    //     cep: data.cep,
    //     number: null,
    //     complement: data.complemento,
    //     district: data.bairro,
    //     city: data.localidade,
    //     state: data.uf,
    //   }
    // });
    form.form.patchValue({
      address: {
        street: data.logradouro,
        complement: data.complemento,
        district: data.bairro,
        city: data.localidade,
        state: data.uf,
      }
    });
  }

  clearDataForm(form) {
    form.form.patchValue({
      address: {
        street: null,
        complement: null,
        district: null,
        city: null,
        state: null,
      }
    });
  }

  ngOnInit() {
  }

}
