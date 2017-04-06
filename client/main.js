//anyjs will ran here with the same name
 
//import react
import React from 'react';
import ReactDOM from 'react-dom'

//create component
const App = () => {
	return(
		<div>
			React App #2
		</div>
	);
}

//render it to screen
Meteor.startup( () =>{ //wait for dom to finish before loading the reactDOM
	ReactDOM.render(<App />, document.querySelector('.container'));

});
