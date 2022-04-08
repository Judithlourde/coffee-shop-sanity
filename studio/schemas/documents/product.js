export default {
	title: 'Product',
	name: 'product', //_type: "product"
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
			validation: Rule => Rule.required()
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'title',
                maxLength: 100
			},
			validation: Rule => Rule.required()
		},     
        {
            title: 'Image',
            name: 'image',
            type: 'image',
            fields: [
				{
					title: 'Caption',
					name: 'caption',
					type: 'text',
					options: {
						isHighlighted: true
					}
				},
            ]
        },
        {
			title: 'Price',
			name: 'price',
			type: 'number'
		},
        {
			title: 'Description',
			name: 'description',
			type: 'text'
		},
        {
            title: 'Ingredients',
            name: 'ingredients',
            type: 'text'
        },
        {
            title: 'Favourite',
            name: 'favourite',
            type: 'boolean',
            options: {
                isHighlighted: true
            }
        },
        {
			title: 'Reviews',
			name: 'reviews',
			type: 'array',
            of: [
                { type: 'review' }
            ]
		},
    ]
}