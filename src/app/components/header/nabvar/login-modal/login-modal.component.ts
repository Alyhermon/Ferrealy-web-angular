import { Component } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-login',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent{

  modalSwitch:any;

  

  constructor(public modal:NgbModal,private Service: SwitchService){ }

  open(contenido:any){
    this.modal.open(contenido)
  }


  closeModal(){
    this.Service.$modal.emit(false)
  }



}
