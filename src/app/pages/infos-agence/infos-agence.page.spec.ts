import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfosAgencePage } from './infos-agence.page';

describe('InfosAgencePage', () => {
  let component: InfosAgencePage;
  let fixture: ComponentFixture<InfosAgencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosAgencePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfosAgencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
