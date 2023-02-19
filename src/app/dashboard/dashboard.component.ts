import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

}
let currentBg: string = "rgb(119, 136, 153)";

setInterval(() => {
    const divElement = document.querySelector("div");
    if (currentBg === "rgb(119, 136, 153)") {
        currentBg = "rgb(56, 56, 56)";
        divElement!.style.backgroundColor = currentBg;
    } else {
        currentBg = "rgb(119, 136, 153)";
        divElement!.style.backgroundColor = currentBg;
    }
}, 2000);
