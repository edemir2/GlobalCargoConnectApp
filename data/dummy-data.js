import Category from '../models/category';
import Ship from '../models/ship';

export const CATEGORIES = [
  new Category('c1', 'Add a New Ship Ads', '#f5428d'),
  new Category('c2', 'See Available Ships ', '#f54242'),
];

export const SHIPS = [
  new Ship(
    'm1',
    ['c2'],
    'Ship Number 1s',
    'Destination: Turkey-America',
    'Departure: May',
    'https://img.freepik.com/premium-photo/loaded-container-cargo-ship-is-seen-front-as-it-speeds-ocean-generative-ai_438099-11666.jpg?size=626&ext=jpg&ga=GA1.1.1624842548.1705963067&semt=ais',
    'Available Space: 200 kg',
    [
      'Available Space: 200 kg ',
      'Destination: Turkey-America',
      'Ship Type: Container Vessel',
      'Departure Date: May',
      'Expecterd Arrival Date: June',
      'Allowed Cargo Types:  General Goods, Non-perishable Items',
      'Contact Email: xxxxxxxxxxxxxx',
        'Contact Phone Number: yyyyyyyyyyy',
        'Company Name : zzzzzzzzzzzzz',
        'Company Website : ttttttttttt'
    ],
    [
      'Join our voyage from Turkey to America aboard our modern container vessel. With a 200 kg capacity, we are perfectly suited for small businesses and individual shipments. Our experienced crew prioritizes safety and efficiency, ensuring your goods arrive on time in June. Book now for a reliable and stress-free shipping experience!',
    ],
  ),

  new Ship(
    'm2',
    ['c2'],
    'Ship Number 2',
    'Destination: Turkey-America',
    'Departure Date: May',
    'https://img.freepik.com/premium-photo/aerial-side-view-cargo-ship-carrying-container-running-export-goods-from-cargo-yard-port-custom-ocean-concept-technology-transportation-customs-clearance_33850-593.jpg?size=626&ext=jpg&ga=GA1.1.1624842548.1705963067&semt=ais',
    'Available Space: 500 kg',
    [
      'Available Space: 500 kg',
      'Destination: Turkey-America',
      'Ship Type: Bulk Carrier',
      'Departure Date: May',
      'Expected Arrival Date: July',
      'Allowed Cargo Types: Bulk Goods, Machinery',
      'Contact Email: xxxxxxxxxxxxxx',
        'Contact Phone Number: yyyyyyyyyyy',
        'Company Name : zzzzzzzzzzzzz',
        'Company Website : ttttttttttt'
    ],
    [
      'Our spacious bulk carrier, setting sail in May, offers 500 kg of cargo space for your larger shipments. Ideal for machinery and bulk goods, we provide a secure and cost-effective solution for your transportation needs from Turkey to America. Expect timely delivery by July with our expert navigation and handling.',
    ],
  ),

  new Ship(
    'm3',
    ['c2'],
    'Ship Number 3',
    'Destination: Turkey-America',
    'Departure Date: Jan',
    'https://img.freepik.com/premium-photo/business-service-transportation-international-by-container-cargo-freight-ship-open-deep-sea-aerial-view_44353-2076.jpg?size=626&ext=jpg&ga=GA1.1.1624842548.1705963067&semt=ais',
    'Available Space: 300 kg',
    [
        'Available Space: 300 kg',
        'Destination: Turkey-America',
        'Ship Type: Multi-Purpose Vessel',
        'Departure Date: Jan',
        'Expected Arrival Date: June',
        'Allowed Cargo Types: General Cargo, Hazardous Materials ',
        'Contact Email: xxxxxxxxxxxxxx',
        'Contact Phone Number: yyyyyyyyyyy',
        'Company Name : zzzzzzzzzzzzz',
        'Company Website : ttttttttttt'
    ],
    [
      'Experience the versatility of our multi-purpose vessel, tailored for both general cargo and hazardous materials. With a 300 kg capacity, we offer a departure in May for those needing a reliable passage from Turkey to America. Our skilled crew ensures compliance with all safety regulations, promising a secure arrival in June.'
    ],
  ),

  new Ship(
    'm4',
    ['c2'],
    'Ship Number 4',
    'Destination: Turkey-America',
    'Departure Date: Sep',
    'https://img.freepik.com/premium-photo/container-ship-arriving-commercial-port_35024-895.jpg?size=626&ext=jpg&ga=GA1.1.1624842548.1705963067&semt=ais',
    'Available Space: 400 kg',
    [
        'Available Space: 400 kg',
        'Destination: Turkey-America',
        'Ship Type: Ro-Ro (Roll-on/Roll-off) Ship',
        'Departure Date: Sep',
        'Expected Arrival Date: Nov',
        'Allowed Cargo Types: Vehicles, Wheeled Cargo',
        'Contact Email: xxxxxxxxxxxxxx',
        'Contact Phone Number: yyyyyyyyyyy',
        'Company Name : zzzzzzzzzzzzz',
        'Company Website : ttttttttttt'
    ],
    [
      'Transport your vehicles and wheeled cargo effortlessly with our Ro-Ro ship. Boasting a 400 kg capacity, we provide a seamless journey from Turkey to America, departing in May. Our specialized handling and secure stowage ensure your cargo arrives safely in June. Ideal for automotive and heavy machinery transport.'
    ],
  ),

  new Ship(
    'm5',
    ['c2'],
    'Ship Number 5',
    'Destination: Turkey-America',
    'Departure Date: Jan',
    'https://img.freepik.com/free-photo/shipping-industry-carries-cargo-large-container-ships-generative-ai_188544-9438.jpg?size=626&ext=jpg&ga=GA1.1.1624842548.1705963067&semt=ais',
    'Available Space: 250 kg',
    [
        'Available Space: 250 kg',
        'Destination: Turkey-America',
        'Ship Type: Refrigerated Cargo Ship',
        'Departure Date: Jan',
        'Expected Arrival Date: Mar',
        'Allowed Cargo Types: Perishable Goods, Pharmaceuticals',
        'Contact Email: xxxxxxxxxxxxxx',
        'Contact Phone Number: yyyyyyyyyyy',
        'Company Name : zzzzzzzzzzzzz',
        'Company Website : ttttttttttt'
    ],
    [
      'Our refrigerated cargo ship is the optimal choice for transporting perishable goods and pharmaceuticals. With a controlled environment and a capacity of 250 kg, we maintain the integrity of your sensitive shipments from Turkey to America. Departing in May, we assure a prompt and cool arrival in June, preserving the quality of your products.'
    ],
  ),

  new Ship(
    'm6',
    ['c2'],
    'Ship Number 6',
    'Destination: Greece-Canada',
    'Departure Date: June',
    'https://img.freepik.com/premium-photo/logistics-business-transportation-by-ship-flight-open-sea-service-import-export-cargo-international_44353-1072.jpg?size=626&ext=jpg&ga=GA1.1.1624842548.1705963067&semt=ais',
    'Available Space: 350 kg',
    [
        'Available Space: 350 kg',
        'Destination: Greece-Canada',
        'Ship Type: Container Vessel',
        'Departure Date: June',
        'Expected Arrival Date: July',
        'Allowed Cargo Types: General Goods, Electronics',
        'Contact Email: xxxxxxxxxxxxxx',
        'Contact Phone Number: yyyyyyyyyyy',
        'Company Name : zzzzzzzzzzzzz',
        'Company Website : ttttttttttt'
    ],
    [
      'Set sail from Greece to Canada this June on our advanced container vessel. With a generous 350 kg capacity, we specialize in transporting electronics and general goods. Our commitment to timely delivery and the safety of your items ensures they arrive in Canada by July. Book your space for a secure and punctual shipping solution.',
    ],
  ),

  new Ship(
    'm7',
    ['c2'],
    'Ship Number 7',
    'Destination: Spain-Brazil',
    'Departure Date: April',
    'https://img.freepik.com/free-photo/aerial-view-container-cargo-ship-sea_335224-736.jpg?size=626&ext=jpg',
    'Available Space: 450 kg',
    [
        'Available Space: 450 kg',
        'Destination: Spain-Brazil',
        'Ship Type: Bulk Carrier',
        'Departure Date: April',
        'Expected Arrival Date: May',
        'Allowed Cargo Types: Raw Materials, Agricultural Products',
        'Contact Email: xxxxxxxxxxxxxx',
        'Contact Phone Number: yyyyyyyyyyy',
        'Company Name : zzzzzzzzzzzzz',
        'Company Website : ttttttttttt'
    ],
    [
      'Embark on a journey from Spain to Brazil with our robust bulk carrier. Offering 450 kg of space, we are perfect for large shipments of raw materials and agricultural products. Departing in April, our experienced team guarantees a smooth transit and an on-time arrival in Brazil by May. Secure your cargos spot for a hassle-free shipping experience.'
    ],
  ),

  new Ship(
    'm8',
    ['c2'],
    'Ship Number 8',
    'Destination: Italy-South Africa',
    'Departure Date: July',
    'https://img.freepik.com/premium-photo/loaded-container-cargo-ship-is-seen-front-as-it-speeds-ocean-generative-ai_438099-11185.jpg?size=626&ext=jpg',
    'Available Space: 500 kg',
    [
        'Available Space: 500 kg',
        'Destination: Italy-South Africa',
        'Ship Type: Multi-Purpose Vessel',
        'Departure Date: July',
        'Expected Arrival Date: August',
        'Allowed Cargo Types: Construction Materials, General Cargo',
        'Contact Email: xxxxxxxxxxxxxx',
        'Contact Phone Number: yyyyyyyyyyy',
        'Company Name : zzzzzzzzzzzzz',
        'Company Website : ttttttttttt'
    ],
    [
      'Our versatile multi-purpose vessel departs from Italy to South Africa in July. With a capacity of 500 kg, we are well-equipped to handle construction materials and a variety of general cargo. Trust us for a reliable journey, ensuring your shipment reaches South Africa safely and efficiently in August.'
    ],
  ),

  new Ship(
    'm9',
    ['c2'],
    'Ship Number 9',
    'Destination: France-Australia',
    'Departure Date: August',
    'https://img.freepik.com/free-photo/large-cargo-ship-with-containers-port-generative-ai_188544-8158.jpg?size=626&ext=jpg',
    'Available Space: 400 kg',
    [
        'Available Space: 400 kg',
        'Destination: France-Australia',
        'Ship Type: Ro-Ro (Roll-on/Roll-off) Ship',
        'Departure Date: August',
        'Expected Arrival Date: September',
        'Allowed Cargo Types: Heavy Machinery, Vehicles',
        'Contact Email: xxxxxxxxxxxxxx',
        'Contact Phone Number: yyyyyyyyyyy',
        'Company Name : zzzzzzzzzzzzz',
        'Company Website : ttttttttttt'
    ],
    [
      'Transport your heavy machinery and vehicles seamlessly from France to Australia with our specialized Ro-Ro ship. With a 400 kg capacity, we offer a smooth and secure transit, departing in August. Our expert handling ensures your cargo arrives in Australia in perfect condition by September. Choose us for an efficient and worry-free shipping experience.'
    ],
  ),
  new Ship(
    'm10',
    ['c1'],
    'Cargo Ship Advertisement Form',
    '',
    '',
    'https://img.freepik.com/free-vector/hand-drawn-illustration-container-ship-sea_23-2149149324.jpg?w=1480&t=st=1705963102~exp=1705963702~hmac=dcc2cc8da28dd76ce1d8046bdaff97fdacdc134a22103dc992f2bbe4e574299e',
    'Tap Here to Fill the For',
    [
        'Available Space (kg): [Enter Available Cargo Space in kg]',
        'Ship Type: [Enter Ship Type (e.g., Container Vessel, Bulk Carrier, Ro-Ro Ship, etc.)]',
        'Departure Port: [Enter Departure Port/Country]',
        'Destination Port: [Enter Destination Port/Country]',
        'Departure Date: [Enter Departure Date]',
        'Expected Arrival Date: [Enter Expected Arrival Date]',
        'Allowed Cargo Types: [List Allowed Cargo Types (e.g., General Goods, Perishable Items, Vehicles, etc.)]',
        'Contact Email: [Enter Contact Email]',
        'Contact Phone Number: [Enter Contact Phone Number]',
        'Company Name (if applicable): [Enter Company Name]',
        'Company Website (if applicable): [Enter Company Website]'
    ],
    [
      'Special Instructions or Notes: [Any additional information or specific instructions]'
    ],
  )
];