import { Component, NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NabvarComponent } from './components/header/nabvar/nabvar.component';
import { LoginModalComponent } from './components/header/nabvar/login-modal/login-modal.component';
import { SlideComponent } from './components/slide/slide.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { NosotrosComponent } from './views/nosotros/nosotros.component';
import { ProductosComponent } from './views/productos/productos.component';
import { ContactosComponent } from './views/contactos/contactos.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


const appRoutes: Routes = [
  {path: '', component: InicioComponent },
  {path: 'Nosotros', component: NosotrosComponent},
  {path: 'Productos', component: ProductosComponent},
  {path: 'Contactos', component: ContactosComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NabvarComponent,
    LoginModalComponent,
    SlideComponent,
    FooterComponent,
    InicioComponent,
    NosotrosComponent,
    ProductosComponent,
    ContactosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
