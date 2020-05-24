import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartidaPageRoutingModule } from './partida-routing.module';

import { PartidaPage } from './partida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PartidaPageRoutingModule
  ],
  declarations: [PartidaPage]
})
export class PartidaPageModule {}
