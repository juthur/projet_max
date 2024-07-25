import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeunesComponent } from './jeunes.component';

describe('JeunesComponent', () => {
  let component: JeunesComponent;
  let fixture: ComponentFixture<JeunesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JeunesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeunesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
