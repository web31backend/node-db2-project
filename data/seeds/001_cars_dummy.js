
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          make: 'Subaru',
          model: 'WRX',
          vin: '123456ABCDEFGJ',
          mileage: '40000',
          transmission: 'Manual',
          status: "Jumbo's Bae"
        },
        {
          make: 'Scion',
          model: 'FRS',
          vin: '123456ABCDEFGM',
          mileage: '45000',
          transmission: 'Manual',
          status: "Gobuta's Bae"
        },
        {
          make: 'Tesla',
          model: 'Model-X',
          vin: '123456ABCDEFGD',
          mileage: '50000',
          transmission: 'Electric',
          status: "Gatekeeper's Bae"
        },
        {
          make: 'Ford',
          model: 'Shelby GT350R',
          vin: '1234ABC5678DEFG90HIJKL',
          mileage: '75300',
          transmission: '',
          status: ''
        },
        {
          make: 'Porsche',
          model: '911 GT2 RS',
          vin: '1234ABC5678DEFG90LKJIH',
          mileage: '57030',
          transmission: '',
          status: ''
        },
        {
          make: 'Ferrari',
          model: 'GT40',
          vin: '1234CBA5678DEFG90HIJKL',
          mileage: '30750',
          transmission: '',
          status: ''
        },
      ]);
    });
};
