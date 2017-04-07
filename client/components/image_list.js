//create our image list component

//import React
import React from 'react';
import ImageDetail from './image_detail'

//array dummydata
const IMAGES = [
	{ title: 'pen', link: 'https://dummyimage.com/600x400'},
	{ title: 'Pine Tree', link: 'https://dummyimage.com/600x400'},
	{ title: 'Mug', link: 'https://dummyimage.com/600x400'}
];

//Create our component
const ImageList = () => {
	//array of components
	const RenderedImages = IMAGES.map(image => {
		return <ImageDetail key={image.title} image2={image} />

	});


	return(
		<ul className="media-list list-group">
			{RenderedImages}
		</ul>
	);

};


//Export our component
export default ImageList;
