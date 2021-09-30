import { RouterModule, Routes } from '@angular/router';
import { UiLayoutComponent, UiLayoutModule } from '@web-portal/ui-layout';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: UiLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true}), UiLayoutModule],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}

