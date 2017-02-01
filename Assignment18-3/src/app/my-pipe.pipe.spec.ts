/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { MyPipe } from './my-pipe.pipe';

describe('MyPipe Tests', () => {

    let pipe:MyPipe;

    beforeEach(() => {
        pipe = new MyPipe();
    });

    //check if string passed returns with each word capitalized
    it('Should capitalize all words in a string', () => {
        var result = pipe.transform('golden retriever', null);

        expect(result).toEqual('Golden Retriever');
    });

});
