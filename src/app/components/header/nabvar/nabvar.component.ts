import { Component, OnInit } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.css']
})
export class NabvarComponent implements OnInit{


    modalSwitch:boolean;
    contenido:any

    constructor(private modalService: SwitchService){
      
    }



    ngOnInit(){
      this.modalService.$modal.subscribe((res) => {
        this.modalSwitch = res
  
      })

    }

    //************* */

  abrirModal(){
    this.modalSwitch = true;

  }

}
