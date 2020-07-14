import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListeAgencesPage } from './liste-agences.page';

describe('ListeAgencesPage', () => {
  let component: ListeAgencesPage;
  let fixture: ComponentFixture<ListeAgencesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeAgencesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListeAgencesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
