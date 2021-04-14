import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObjTreeComponent } from './obj-tree/obj-tree.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'obj-tree',
		pathMatch: 'full'
	},
	{
		path: 'obj-tree',
		component: ObjTreeComponent
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
