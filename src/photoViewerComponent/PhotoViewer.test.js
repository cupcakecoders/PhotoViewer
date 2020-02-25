import React from 'react';
import renderer from 'react-test-renderer';
import { ImageUrls } from '../data';

describe("PhotoViewer component", () => {
    it("Should be empty without props src", async () => {
        
        const tree = renderer.create(<PhotoViewer src={ImageUrls[0]}/>).toJSON();

        expect(tree).toMatchSnapshot();
    });

    /*it("Should display props src when thumbnail image is clicked on", async() => {
        
        const tree = renderer.create(<PhotoViewer src="https://i.picsum.photos/id/600/1600/900.jpg"/>).toJSON();

        expect(tree).toMatchSnapshot();
    });*/

});