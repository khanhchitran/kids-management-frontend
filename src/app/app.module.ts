import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [BrowserModule, CoreModule, LayoutComponent],
  declarations: [],
})
export class AppModule {}
