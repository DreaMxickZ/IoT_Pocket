import { Component, OnInit,ViewChild  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule,IonSlides } from '@ionic/angular';


@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class OnboardingPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  constructor() { }

  ngOnInit() {
  }
  next() {
    this.slides.slideNext();
    
  }
  
}