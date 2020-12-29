import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente'

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [
    {id: 1, nombre: 'Andrés', apellido: 'Ramirez', email: 'andresramirez@hotmail.com', createAt: '2020-05-12'},
    {id: 2, nombre: 'Maria', apellido: 'Villa', email: 'mariavilla@hotmail.com', createAt: '2019-01-02'},
    {id: 3, nombre: 'Alejandro', apellido: 'Ojeda', email: 'ojedaale@hotmail.com', createAt: '2008-05-10'},
    {id: 4, nombre: 'Fernando', apellido: 'Linares', email: 'ferlinares@hotmail.com', createAt: '2020-12-12'},
    {id: 5, nombre: 'Mariana', apellido: 'Hernandez', email: 'marianahdz@hotmail.com', createAt: '2010-03-12'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
