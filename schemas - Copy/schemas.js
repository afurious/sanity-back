
// // First, we must import the schema creator
// import createSchema from 'part:@sanity/base/schema-creator'

// // Then import schema types from any plugins that might expose them
//  import schemaTypes from 'all:part:@sanity/base/schema-type'
//  import post from './post'
//  import user from './user'
//  import comment from './comment'
//  import postedBy from './postedBy'

//  export default createSchema({
//     // we name our schema
//     name: 'default',
//     // Then proceed to concatenate our document type
//     // to the ones provided by any plugins that are installed
//     types: schemaTypes.concat([
//         // your types here
//          post, user, comment, postedBy
//     ]), 
//  })