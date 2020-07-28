import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder',
    // redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'liste-agences',
    loadChildren: () => import('./pages/liste-agences/liste-agences.module').then( m => m.ListeAgencesPageModule)
  },
  {
    path: 'infos-agence',
    loadChildren: () => import('./pages/infos-agence/infos-agence.module').then( m => m.InfosAgencePageModule)
  },
  {
    path: 'favori',
    loadChildren: () => import('./pages/favori/favori.module').then( m => m.FavoriPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
