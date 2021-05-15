import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObjsHierarchyComponent } from './objs/objs-hierarchy/objs-hierarchy.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'hierarchy',
		pathMatch: 'full'
	},
	{
		path: 'hierarchy',
		component: ObjsHierarchyComponent
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
