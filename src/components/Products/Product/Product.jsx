import React from 'react';

import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';


const Product = ({ product }) =>{
    return(
        <Card >
            <img src={product.image.url} alt=""/>
        <CardMedia title={product.name} />
        <CardContent>
          <div >
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {product.price.formatted_with_symbol}
            </Typography>
          </div>
          <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" 
          color="textSecondary" component="p" />
        </CardContent>
        <CardActions disableSpacing >
          <IconButton aria-label="Add to Cart" >
            <>Cart</>
          </IconButton>
        </CardActions>
      </Card>
    )
}

export default Product;