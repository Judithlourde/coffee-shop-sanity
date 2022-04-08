import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import product from './documents/product.js'
import review from './documents/review.js'
import customer from './documents/customer.js'
import person from './documents/person.js'


export default createSchema({
	name: 'default',
	types: schemaTypes.concat([
		product,
    review,
    customer,
    person	
	]),
})
