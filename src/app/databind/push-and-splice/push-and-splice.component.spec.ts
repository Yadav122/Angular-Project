import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushAndSpliceComponent } from './push-and-splice.component';

describe('PushAndSpliceComponent', () => {
  let component: PushAndSpliceComponent;
  let fixture: ComponentFixture<PushAndSpliceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PushAndSpliceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PushAndSpliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
