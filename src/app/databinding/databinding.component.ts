import { Component, OnInit } from '@angular/core';

interface Animal {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-onewaydb',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class databinding implements OnInit {
  selectedValue: string;
  twowayinput: string;
  constructor() { 
    setTimeout(() => {
      this.twowayinput = "Lorem Ipsum";
    }, 5000);
  }

  ngOnInit(): void {
  }

  toUpper(){
    this.twowayinput = this.twowayinput.toUpperCase()
  }
  

  toLower(){
    this.twowayinput = this.twowayinput.toLowerCase()
  }
  
  animals: Animal[] = [
    {value: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBmLU7-kyEgIdyHFAbyZ9Gk7ghnTIhz4C0OA&usqp=CAU', viewValue: 'Tiger'},
    {value: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMiz43jSRE285rMUGB61okdV_aow2BlJPO0Q&usqp=CAU', viewValue: 'Lion'},
    {value: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwm7r98yGcN0gBf6F123ZS6DqWo60HnDOGjw&usqp=CAU', viewValue: 'Elephant'},
    {value: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx_Ie5MCfjRpsnYKM-3eH-4CLOpYrI-Qd8FQ&usqp=CAU', viewValue: 'Horse'},
    {value: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRazG6iP7g-fVk3Io1nz7YZB_9jjzYZNGA-FA&usqp=CAU', viewValue: 'Deer'},
    {value: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJmcMe1dVR7YBwi8-ERNNK8gW1Q_WdOlY-sQ&usqp=CAU', viewValue: 'Gorilla'},
    {value: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPleRYl-5KEjHwRCuUSU7CpuaujLPFMz-tMQ&usqp=CAU', viewValue: 'Godzilla'},
  ];

}
