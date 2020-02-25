import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {ImageUrls} from "./data";

test('renders first link is correct', () => {
  let firstURL = ImageUrls[0];
  
  expect(firstURL).toBe("https://i.picsum.photos/id/600/1600/900.jpg");
});

test('renders and does not include the ‘broken’ images', () => {
   const brokenImages = [
        1, 24, 32, 36, 44, 47
    ];
   
    expect(ImageUrls).not.toContain("https://i.picsum.photos/id/601/1600/900.jpg");
    expect(ImageUrls).not.toContain("https://i.picsum.photos/id/624/1600/900.jpg");
    expect(ImageUrls).not.toContain("https://i.picsum.photos/id/632/1600/900.jpg"); 
  });
