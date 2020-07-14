import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FavoriPage } from './favori.page';

describe('FavoriPage', () => {
  let component: FavoriPage;
  let fixture: ComponentFixture<FavoriPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FavoriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
