import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { JhiDataUtils } from 'ng-jhipster';

import { MyAppTestModule } from '../../../test.module';
import { EntryDetailComponent } from 'app/entities/entry/entry-detail.component';
import { Entry } from 'app/shared/model/entry.model';

describe('Component Tests', () => {
  describe('Entry Management Detail Component', () => {
    let comp: EntryDetailComponent;
    let fixture: ComponentFixture<EntryDetailComponent>;
    let dataUtils: JhiDataUtils;
    const route = ({ data: of({ entry: new Entry(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [MyAppTestModule],
        declarations: [EntryDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(EntryDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(EntryDetailComponent);
      comp = fixture.componentInstance;
      dataUtils = fixture.debugElement.injector.get(JhiDataUtils);
    });

    describe('OnInit', () => {
      it('Should load entry on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.entry).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });

    describe('byteSize', () => {
      it('Should call byteSize from JhiDataUtils', () => {
        // GIVEN
        spyOn(dataUtils, 'byteSize');
        const fakeBase64 = 'fake base64';

        // WHEN
        comp.byteSize(fakeBase64);

        // THEN
        expect(dataUtils.byteSize).toBeCalledWith(fakeBase64);
      });
    });

    describe('openFile', () => {
      it('Should call openFile from JhiDataUtils', () => {
        // GIVEN
        spyOn(dataUtils, 'openFile');
        const fakeContentType = 'fake content type';
        const fakeBase64 = 'fake base64';

        // WHEN
        comp.openFile(fakeContentType, fakeBase64);

        // THEN
        expect(dataUtils.openFile).toBeCalledWith(fakeContentType, fakeBase64);
      });
    });
  });
});
