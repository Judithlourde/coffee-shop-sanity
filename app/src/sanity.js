import sanityClient from '@sanity/client';

export default  sanityClient({
	projectId: 'i90q2xi5', 
	dataset: 'production',
	apiVersion: '2022-04-04',	
	useCdn: 'true'		//false for localhost, true for netlify		
});