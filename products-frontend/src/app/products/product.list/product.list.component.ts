import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { product } from './product';
import { DecimalPipe } from '@angular/common';


const ELEMENT_DATA: product[] = [
  {id: 1, name: "Laptop", description: "Gaming", price: 1200, quantity: 5},
  {id: 2, name: "Smartphone", description: "Alta gama", price: 900, quantity: 10},
  {id: 3, name: "Auriculares inalámbricos", description: "Cancelación de ruido", price: 250, quantity: 20},
  {id: 4, name: "Smartwatch", description: "Fitness y salud", price: 300, quantity: 15},
  {id: 5, name: "Tablet", description: "Productividad", price: 600, quantity: 8},
  {id: 6, name: "Monitor", description: "4K curvo", price: 750, quantity: 3},
  {id: 7, name: "Teclado mecánico", description: "RGB", price: 150, quantity: 12},
  {id: 8, name: "Mouse gaming", description: "Inalámbrico de alta precisión", price: 80, quantity: 25},
  {id: 9, name: "Cámara DSLR", description: "Profesional", price: 1500, quantity: 2},
  {id: 10, name: "Impresora multifuncional", description: "Inyección de tinta", price: 200, quantity: 7},
  {id: 11, name: "Disco duro externo", description: "SSD de 1TB", price: 100, quantity: 30},
  {id: 12, name: "Router Wi-Fi 6", description: "Doble banda", price: 180, quantity: 10},
  {id: 13, name: "Altavoz inteligente", description: "Asistente de voz", price: 90, quantity: 18},
  {id: 14, name: "Drone", description: "Con cámara 4K", price: 500, quantity: 4},
  {id: 15, name: "Proyector portátil", description: "Mini LED", price: 350, quantity: 6},
  {id: 16, name: "Webcam", description: "Full HD", price: 70, quantity: 22},
  {id: 17, name: "Tarjeta gráfica", description: "Gaming de última generación", price: 800, quantity: 3},
  {id: 18, name: "Consola de videojuegos", description: "Nueva generación", price: 500, quantity: 7},
  {id: 19, name: "Batería externa (Power bank)", description: "Carga rápida", price: 40, quantity: 40},
  {id: 20, name: "E-reader", description: "Pantalla táctil", price: 130, quantity: 15}
];

@Component({
  selector: 'app-product-list',
  imports: [MatTableModule, DecimalPipe],
  templateUrl: './product.list.component.html',
  styleUrl: './product.list.component.scss'
})
export class ProductListComponent {
  displayedColumns: string[] = ['name', 'description', 'price'];
  dataSource = ELEMENT_DATA;
}
