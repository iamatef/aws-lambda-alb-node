console.log('Loading function');

exports.handler = async (event, context) => {
    
    //log event
    console.log(event);
    
    // 
    const response =  {
        statusCode: 200,
        isBase64Encoded: false,
        headers:{
             "Content-Type" :  "text/html"
        },
        body: JSON.stringify({ success: 'hello from lambda' }),
    };
    
    return response ;
    
     
};
