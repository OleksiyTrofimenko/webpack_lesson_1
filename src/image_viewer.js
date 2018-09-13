import small from '../assets/small.jpg';
// import large from '../assets/large.jpg';
// import medium from '../assets/medium.jpg';
// import average from '../assets/average.jpg';
import '../styles/image_viewer.css';

// Example 1 - code splitting
export default () => {
    const smallImage = document.createElement('img');
    smallImage.src = small;
    document.body.appendChild(smallImage);
};

// const bigImage = document.createElement('img');
// bigImage.src = large;

// const averageImage = document.createElement('img');
// averageImage.src = average;

// const mediumImage = document.createElement('img');
// mediumImage.src = medium;

// document.body.appendChild(bigImage);
// document.body.appendChild(averageImage);
// document.body.appendChild(mediumImage);
