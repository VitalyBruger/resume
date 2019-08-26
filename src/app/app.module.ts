import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { UserService } from './user.service';
import { DocumentService } from './document.service';
import { TranslateService } from './translate.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { AnketsListComponent } from './ankets-list/ankets-list.component';
import { LoginComponent } from './login/login.component';
import { AnketsEditComponent } from './ankets-edit/ankets-edit.component';
import { TreeviewComponent } from './treeview/treeview.component';
import { ItemsComponent } from './items/items.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SectionComponent } from './section/section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { AbouttestComponent } from './abouttest/abouttest.component';
import { TranslatePipe } from './translate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainNavigationComponent,
    AnketsListComponent,
    LoginComponent,
    AnketsEditComponent,
    TreeviewComponent,
    ItemsComponent,
    HeaderComponent,
    FooterComponent,
    SectionComponent,
    AboutmeComponent,
    AbouttestComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService, DocumentService, TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
