import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TitleComponent } from './title/title.component';
import { GuideDashboardComponent } from './guide-dashboard/guide-dashboard.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { CharacterCreationComponent } from './chapter1/character-creation/character-creation.component';
import { GenerateAttributesComponent } from './chapter1/generate-attributes/generate-attributes.component';
import { CharacterBackgroundComponent } from './chapter1/character-background/character-background.component';
import { SpendSkillPointsComponent } from './chapter1/spend-skill-points/spend-skill-points.component';
import { PhysicalDescriptionComponent } from './chapter1/physical-description/physical-description.component';
import { NextStepsComponent } from './chapter1/next-steps/next-steps.component';
import { SkillsComponent } from './chapter2/skills/skills.component';
import { SkillListComponent } from './chapter2/skill-list/skill-list.component';
import { SpecialSkillsComponent } from './chapter2/special-skills/special-skills.component';
import { AcquiringSkillsComponent } from './chapter2/acquiring-skills/acquiring-skills.component';
import { GeneralRulesComponent } from './chapter2/general-rules/general-rules.component';
import { FateOfTheWaygateComponent } from './chapter1/fate-of-the-waygate/fate-of-the-waygate.component';
import skills from './chapter2/skills.json';
import specialSkills from './chapter2/special-skills.json';


const routes: Routes = [
  {
    path: '', component: TitleComponent
  },
  {
    path: 'guides',
    component: GuideDashboardComponent,
    data: { showSidebar: true },
    children: [
      { path: 'getting-started', component: GettingStartedComponent },
      { path: 'character-creation', component: CharacterCreationComponent, data: { chapter: 'chapter1' } },
      { path: 'character-creation/generate-attributes', component: GenerateAttributesComponent, data: { chapter: 'chapter1' } },
      { path: 'character-creation/background', component: CharacterBackgroundComponent, data: { chapter: 'chapter1' } },
      { path: 'character-creation/spend-skill-points', component: SpendSkillPointsComponent, data: { chapter: 'chapter1' } },
      { path: 'character-creation/physical-description', component: PhysicalDescriptionComponent, data: { chapter: 'chapter1' } },
      { path: 'character-creation/next-steps', component: NextStepsComponent, data: { chapter: 'chapter1' } },
      { path: 'character-creation/fate-of-the-waygate', component: FateOfTheWaygateComponent, data: { chapter: 'chapter1' } },
      { path: 'skills', component: SkillsComponent, data: { chapter: 'chapter2' } },
      { path: 'skills/general-rules', component: GeneralRulesComponent, data: { chapter: 'chapter2' } },
      { path: 'skills/skill-list', component: SkillListComponent, data: { chapter: 'chapter2', content: skills  } },
      { path: 'skills/special-skills', component: SkillListComponent, data: { chapter: 'chapter2', content: specialSkills } },
      { path: 'skills/acquiring-skills', component: AcquiringSkillsComponent, data: { chapter: 'chapter2' } },
    ]
  },
  // { path: 'crisis-center', component: CrisisListComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
