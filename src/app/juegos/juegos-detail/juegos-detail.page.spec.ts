import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuegosDetailPage } from './juegos-detail.page';

describe('JuegosDetailPage', () => {
  let component: JuegosDetailPage;
  let fixture: ComponentFixture<JuegosDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JuegosDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
