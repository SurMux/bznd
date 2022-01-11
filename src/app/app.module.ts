import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Custom Modules
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { SubMenuBarComponent } from './components/sub-menu-bar/sub-menu-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    SubMenuBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
