import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {
  MatCheckboxModule,
  MatRadioModule,
  MatExpansionModule
} from '@angular/material';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { FormsModule } from '@angular/forms';
import { SummaryPipe } from './summary.pipe';
import { DoneComponent } from './done/done.component';
import { PanelComponent } from './panel/panel.component';
import { AppInputFormatDirective } from './app-input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SummaryPipe,
    DoneComponent,
    PanelComponent,
    AppInputFormatDirective,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatRadioModule,
    FormsModule,
    MatCheckboxModule,
    MatExpansionModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
