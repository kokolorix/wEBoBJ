import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Formular1Component } from './prototypes/formular1/formular1.component';
import { Projekt1Component } from './prototypes/projekt1/projekt1.component';
import { Projekt2Component } from './prototypes/projekt2/projekt2.component';
import { Projekt3Component } from './prototypes/projekt3/projekt3.component';
import { Projektliste1Component } from './prototypes/projektliste1/projektliste1.component';

const routes: Routes = [
  {
		path: 'formular1',
		component: Formular1Component
	},
	{
		path: 'projekt1',
		component: Projekt1Component
	},
	{
		path: 'projekt2',
		component: Projekt2Component
	},
	{
		path: 'projekt3',
		component: Projekt3Component
	},
	{
		path: 'projektliste1',
    component: Projektliste1Component
  },
  {
		path: '**',
		redirectTo: "home"
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
