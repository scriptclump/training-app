import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ResultPage } from '../result/result';

@Component({
  selector: 'page-self-assessment',
  templateUrl: 'self-assessment.html'
})
export class SelfAssessmentPage {

  constructor(public navCtrl: NavController) {
  }
  goToResult(params){
    if (!params) params = {};
    this.navCtrl.push(ResultPage);
  }
}
