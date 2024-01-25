class Ship {
    constructor(
      id,
      categoryIds,
      title,
      destination,
      departure,
      imageUrl,
      availableSpace,
      features,
      explanations,
    ) {
      this.id = id;
      this.categoryIds = categoryIds;
      this.title = title;
      this.imageUrl = imageUrl;
      this.features = features;
      this.explanations = explanations;
      this.availableSpace = availableSpace;
      this.departure = departure;
      this.destination = destination;
    }
  }
  
  export default Ship;