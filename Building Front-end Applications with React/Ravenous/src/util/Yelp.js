const apiKey='IIN-MxiD5LngnQAJohuCSSYIm0XPRHgYtqUm2NmlVU3IRCGImPBRv1Qs6tAF2e_KIJ-MRn7EwbgYaSK8LN_IjOOOXqrJ93HDI3594nqkBXJ8Eg4O7vnbvxGwqXxbYHYx';

const yelp ={
    search(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            {headers: {Authorization:`Bearer ${apiKey}`}})
            .then(response=>{
                return response.json();
            })
            .then(jsonResponse => {
                if(jsonResponse.businesses){
                    return jsonResponse.businesses.map(business => {
                        return {
                            id: business.id,
                            imageSRC: business.imageSrc,
                            name: business.name,
                            address: business.address,
                            city: business.city,
                            state: business.state,
                            zipCode: business.zipCode,
                            category: business.category,
                            rating: business.rating,
                            reviewCount: business.reviewCount
                        }
                    });
                }
            });
    }
};

export default Yelp;