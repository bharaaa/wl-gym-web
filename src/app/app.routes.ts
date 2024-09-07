import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { MemberDashboardComponent } from './components/member/member-dashboard/member-dashboard.component';
import { TrainerDashboardComponent } from './components/trainer/trainer-dashboard/trainer-dashboard.component';
import { RegisterMemberComponent } from './components/admin/register-member/register-member.component';
import { RegisterTrainerComponent } from './components/admin/register-trainer/register-trainer.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LandingPageComponent },
  { path: 'admin/dashboard', component: AdminDashboardComponent },
  { path: 'admin/register-member', component: RegisterMemberComponent },
  { path: 'admin/register-trainer', component: RegisterTrainerComponent },
  { path: 'member/dashboard', component: MemberDashboardComponent },
  { path: 'trainer/dashboard', component: TrainerDashboardComponent },
];
