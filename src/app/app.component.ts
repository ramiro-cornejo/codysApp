import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'codysApp';
  imgCody = 'assets/images/1.png';

  ngOnInit(){
    this.getCodyImg();
  }

  getCodyImg(){
    let rand = Math.random() * 10 + 1;
    rand = Math.floor(rand);
    this.imgCody = `assets/images/${rand}.png`;
  }
}
