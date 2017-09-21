import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ResourcesActivitiesPage } from '../pages/resources-activities/resources-activities';
import { SelfAssessmentPage } from '../pages/self-assessment/self-assessment';
import { ResultPage } from '../pages/result/result';
import { ReportPage } from '../pages/report/report';
import { ProfilePage } from '../pages/profile/profile';
import { ForumPage } from '../pages/forum/forum';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { SettingsPage } from '../pages/settings/settings';


import { HomePage } from '../pages/home/home';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }goToResourcesActivities(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ResourcesActivitiesPage);
  }goToSelfAssessment(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SelfAssessmentPage);
  }goToResult(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ResultPage);
  }goToReport(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ReportPage);
  }goToProfile(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ProfilePage);
  }goToForum(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ForumPage);
  }goToContactUs(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ContactUsPage);
  }goToSettings (params){
    if (!params) params = {};
    this.navCtrl.setRoot(SettingsPage);
  }

}
