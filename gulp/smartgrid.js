const smartgrid = require('smart-grid');

const settings = {
    filename: '_smart-grid',
    columns: 12,
    outputStyle: 'scss',
    offset: '4%',
    container: {
        maxWidth: '1200px',
        fields: '30px',
    },
    breakPoints: {
        md: {
            width: '960px',
            fields: '20px'
        },
        sm: {
            width: '781px',
            fields: '15px',
        },
        s: {
            width: '560px',
            fields: '10px'
        },
        xs: {
            width: '420px',
            fields: '10px'
        }
    },
    properties: [],
    oldSizeStyle: false
};

smartgrid('../scss', settings);