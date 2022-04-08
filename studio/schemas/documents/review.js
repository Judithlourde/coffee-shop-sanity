export default {
    title: 'Review',
    name: 'review',
    type: 'object',
    fields: [
        {
            title: 'Review Description',
            name: 'reviewDescription',
            type: 'string',
        },
        {
            title: 'Customer',
            name: 'customer',
            type: 'customer',
        },
        
        {
            title: 'Rating',
            name: 'rating',
            type: 'string',
            options: {
                list: [
                { title: '5 Stars', value: '5' },
                { title: '4 Stars', value: '4' },
                { title: '3 Stars', value: '3' },
                { title: '2 Stars', value: '2' },
                { title: '1 Stars', value: '1' },
            ],
            layout: 'radio'
            },  
        }
    ]
}