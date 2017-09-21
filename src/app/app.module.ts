import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ResourcesActivitiesPage } from '../pages/resources-activities/resources-activities';
import { SelfAssessmentPage } from '../pages/self-assessment/self-assessment';
import { ForumPage } from '../pages/forum/forum';
import { ProfilePage } from '../pages/profile/profile';
import { SettingsPage } from '../pages/settings/settings';
import { ReportPage } from '../pages/report/report';
import { ResultPage } from '../pages/result/result';
import { ContactUsPage } from '../pages/contact-us/contact-us';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ResourcesActivitiesPage,
    SelfAssessmentPage,
    ForumPage,
    ProfilePage,
    SettingsPage,
    ReportPage,
    ResultPage,
    ContactUsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ResourcesActivitiesPage,
    SelfAssessmentPage,
    ForumPage,
    ProfilePage,
    SettingsPage,
    ReportPage,
    ResultPage,
    ContactUsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}