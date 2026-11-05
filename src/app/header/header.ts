import { Component, signal, OnInit, OnDestroy}from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})

export class Header implements OnInit, OnDestroy {

colomboTime = signal('');
private timer: ReturnType<typeof setInterval> | undefined;

ngOnInit() {
  this.updateTime();
  this.timer = setInterval(() => {
    this.updateTime();
  }, 1000);


}


updateTime(){

const now = new Date()

this.colomboTime.set(
  new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Colombo',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  }).format(now)

  );
}

ngOnDestroy() {
  if (this.timer) {
    clearInterval(this.timer);
  }
}

}