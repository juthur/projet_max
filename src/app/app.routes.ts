import { Routes } from '@angular/router';
import { ArchiveComponent } from './archive/archive.component';
import { ArticleComponent } from './article/article.component';
import { JeunesComponent } from './jeunes/jeunes.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        title: 'Login',
    },
    {
        path: 'home',
        component: HomeComponent,
        title: 'Accueil'
    },
    {
        path: 'archives',
        component: ArchiveComponent,
        title: 'Mes archives',
    },
    {
        path: 'article',
        component: ArticleComponent,
        title: 'MJ\'s not dead',
    },
    {
        path: 'cibles',
        component: JeunesComponent,
        title: 'Cibles à éliminer',
    },
];
