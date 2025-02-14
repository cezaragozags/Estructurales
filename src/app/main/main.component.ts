import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  //atributos
  alimentos:boolean=false;
  cafe:boolean=false;
  bebidas:boolean=false;

  globalkey:string="";
  selectedImages:string[]=[];

  items = [
    {
      text: 'Bebidas',
      subMenu: [
        {
          text: 'Bebidas calientes',
          images: ['coffee.png'],
          selected: true,
        },
        {
          text: 'Bebidas frías',
          images: ['iced_coffee.png'],
          selected: false,
        },
        {
          text: 'Bebidas a base de té',
          images: ['tee.png'],
          selected: false,
        },
      ],
    },
    {
      text: 'Cafe de Grano',
      subMenu: [
        {
          text: 'Cafe Azteca',
          images: ['coffee_stack.png'],
          selected: true,
        },
        {
          text: 'Cafe en Bolsa',
          images: ['coffee_bag.png'],
          selected: false,
        },
      ],
    },
    {
      text: 'Alimentos',
      subMenu: [
        {
          text: 'Baguette',
          images: ['baguette.png'],
          selected: true,
        },
        {
          text: 'Sándwich',
          images: ['sandwich.png'],
          selected: false,
        },
      ],
    },
  ];


  currentImage:string="";
  selectedOption:string="";


  fnOpenCollapsible(key:string):void{
    if (this.globalkey===key){
      this.globalkey="";
    }else{
      this.globalkey=key;
      const index= this.items.findIndex((item)=>item.text === key);
      this.selectedImages= this.items[index].subMenu[0].images;
      this.currentImage=this.selectedImages[0];
      this.selectedOption=this.items[index].subMenu[0].text;
    }
  }

  fnSelectOption(images:string[], option:string):void{
    this.selectedImages=images;
    this.currentImage="";
    setTimeout(()=>{this.currentImage=this.selectedImages[0]; },50);
    this.selectedOption=option;
  }
} //Fin de la clase
