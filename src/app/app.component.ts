import { Component, OnInit } from '@angular/core';
import { SwitchService } from './services/switch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pruebita';

  modalSwitch:boolean

  constructor(private modalService: SwitchService){

  }

  ngOnInit(){
    this.modalService.$modal.subscribe((res) => {
      this.modalSwitch = res

    })

  }


  openModal(){
    this.modalSwitch = true
  }


}