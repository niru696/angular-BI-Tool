import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// import './polyfills';
// import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
// import {BrowserModule} from '@angular/platform-browser';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {NgModule} from '@angular/core';
// import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {
//   MatAutocompleteModule,
//   MatButtonModule,
//   MatButtonToggleModule,
//   MatCardModule,
//   MatCheckboxModule,
//   MatChipsModule,
//   MatDatepickerModule,
//   MatDialogModule,
//   MatExpansionModule,
//   MatGridListModule,
//   MatIconModule,
//   MatInputModule,
//   MatListModule,
//   MatMenuModule,
//   MatNativeDateModule,
//   MatPaginatorModule,
//   MatProgressBarModule,
//   MatProgressSpinnerModule,
//   MatRadioModule,
//   MatRippleModule,
//   MatSelectModule,
//   MatSidenavModule,
//   MatSliderModule,
//   MatSlideToggleModule,
//   MatSnackBarModule,
//   MatSortModule,
//   MatTableModule,
//   MatTabsModule,
//   MatToolbarModule,
//   MatTooltipModule,
//   MatStepperModule,
// } from '@angular/material';
// import {TablePaginationExample} from './app/paggination/table-pagination-example';
// import {HttpModule} from '@angular/http';
// import {CdkTableModule} from '@angular/cdk/table';

// @NgModule({
//   exports: [
//     CdkTableModule,
//     MatAutocompleteModule,
//     MatButtonModule,
//     MatButtonToggleModule,
//     MatCardModule,
//     MatCheckboxModule,
//     MatChipsModule,
//     MatStepperModule,
//     MatDatepickerModule,
//     MatDialogModule,
//     MatExpansionModule,
//     MatGridListModule,
//     MatIconModule,
//     MatInputModule,
//     MatListModule,
//     MatMenuModule,
//     MatNativeDateModule,
//     MatPaginatorModule,
//     MatProgressBarModule,
//     MatProgressSpinnerModule,
//     MatRadioModule,
//     MatRippleModule,
//     MatSelectModule,
//     MatSidenavModule,
//     MatSliderModule,
//     MatSlideToggleModule,
//     MatSnackBarModule,
//     MatSortModule,
//     MatTableModule,
//     MatTabsModule,
//     MatToolbarModule,
//     MatTooltipModule,
//   ]
// })
// export class DemoMaterialModule {}

// @NgModule({

//   imports: [
//     BrowserModule,
//     BrowserAnimationsModule,
//     FormsModule,
//     HttpModule,
//     DemoMaterialModule,
//     MatNativeDateModule,
//     ReactiveFormsModule,
//   ],

//   declarations: [TablePaginationExample],
//   bootstrap: [TablePaginationExample],
//   providers: []
// })
// export class AppModule {}

// platformBrowserDynamic().bootstrapModule(AppModule);





platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;

  // Otherwise, log the boot error
}).catch(err => console.error(err));