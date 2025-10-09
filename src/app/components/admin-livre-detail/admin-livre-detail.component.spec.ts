import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLivreDetailComponent } from './admin-livre-detail.component';

describe('AdminLivreDetailComponent', () => {
  let component: AdminLivreDetailComponent;
  let fixture: ComponentFixture<AdminLivreDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLivreDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLivreDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
