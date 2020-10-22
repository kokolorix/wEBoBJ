import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Formular1Component } from './prototypes/formular1/formular1.component';
import { Projekt1Component } from './prototypes/projekt1/projekt1.component';
import { Projekt2Component } from './prototypes/projekt2/projekt2.component';
import { Projekt3Component } from './prototypes/projekt3/projekt3.component';
import { Projektliste1Component } from './prototypes/projektliste1/projektliste1.component';

import { Anlage4Component } from './prototypes/anlage4/anlage4.component';
import { Formular4Component } from './prototypes/formular4/formular4.component';
import { Projekt4Component } from './prototypes/projekt4/projekt4.component';
import { Projektliste4Component } from './prototypes/projektliste4/projektliste4.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'projektliste4',
		pathMatch: 'full'
	},
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
		path: 'anlage4',
		component: Anlage4Component
	},
	{
		path: 'formular4',
		component: Formular4Component
	},
	{
		path: 'projekt4/:id/:filter/:projektIds',
		component: Projekt4Component
	},
	{
		path: 'projekt4/:id',
		component: Projekt4Component
	},
	{
		path: 'projektliste4/:filter',
		component: Projektliste4Component
	},
	{
		path: 'projektliste4',
		component: Projektliste4Component
	},
	{
		path: '**',
		redirectTo: "projektliste4"
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
