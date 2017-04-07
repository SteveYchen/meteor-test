//create our image list component

//import React
import React from 'react';

//Create our component
const ImageDetail = (props) => {
	// props.image2 => this is the image obj
	// props.image2.title
	// props.image2.link

	return(
		<li className="media list-group-item">
			<div className="media-left">
				<img src={props.image2.link} />
			</div>
			<div className="media-body">
				<h4 className="media-heading">
					{props.image2.title}
				</h4>
			</div>
		</li>
	);

};


//Export our component
export default ImageDetail;
