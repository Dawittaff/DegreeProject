import bcrypt from 'bcryptjs';

const data = {
  services: [
    {
      name: 'Dentistry',
      slug: 'dentistry',
      description: 'Dentistry Service',
      category: 'Tooth',
      price: 18,
      image: '/images/p1.jpg', // size should be 679px x 829p
    },
    {
      name: 'Dentistr',
      slug: 'dentis',
      description: 'Dentistry Service',
      category: 'Tootsh',
      price: 18,
      image: '/images/p1.jpg', // size should be 679px x 829p
    },
    {
      name: 'Den',
      slug: 'denti',
      description:
        'Consultations with an oncological surgeon are an offer addressed to patients with suspected or diagnosed cancer. The specialist deals with diagnosis and treatment, including surgical treatment of cancer. Check when it is worth making an appointment, how to prepare for the consultation and how the visit goes Indications for consultation with an oncologist  Patients come to a specialist with various ailments that may indicate the development of cancer. Consultations require, among others: nodules on the thyroid, breast or other symptoms that may indicate the development of cancer. Often, cancer, especially in the initial phase of the disease, can cause unusual symptoms. Patients often look for information on the Internet about possible symptoms of cancer, but remember that there are no specific and typical signs of cancer, so the best solution is to consult a specialist.Indications for making an appointment are abnormal laboratory or imaging test results and confirmed cancer when the diagnosis has already been made by a doctor of another specialty. Consultations with an oncological surgeon are an offer addressed to patients with suspected or diagnosed cancer. The specialist deals with diagnosis and treatment, including surgical treatment of cancer. Check when it is worth making an appointment, how to prepare for the consultation and how the visit goes Indications for consultation with an oncologist  Patients come to a specialist with various ailments that may indicate the development of cancer. Consultations require, among others: nodules on the thyroid, breast or other symptoms that may indicate the development of cancer. Often, cancer, especially in the initial phase of the disease, can cause unusual symptoms. Patients often look for information on the Internet about possible symptoms of cancer, but remember that there are no specific and typical signs of cancer, so the best solution is to consult a specialist.Indications for making an appointment are abnormal laboratory or imaging test results and confirmed cancer when the diagnosis has already been made by a doctor of another specialty. ',
      category: 'Tootsh',
      price: 18,
      image: '/images/p1.jpg', // size should be 679px x 829p
    },
  ],
  users: [
    {
      name: 'Dawit ',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John ',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],

  products: [
    {
      // _id: '1',
      name: 'Advil',
      slug: 'advil-otc',
      category: 'Pain Killers',
      image: '/images/p1.jpg', // size should be 679px x 829px
      price: 18,
      countInStock: 55,
      brand: 'Brufen',
      rating: 4.5,
      numReviews: 10,
      description:
        ' Advil - an organic chemical compound, a non-steroidal anti-inflammatory drug, a derivative of propionic acid with anti-inflammatory, analgesic and antipyretic properties',
    },
    {
      // _id: '2',
      name: 'Asprin',
      slug: 'asprin-otc',
      category: 'Pain Killers',
      image: '/images/p1.jpg', // size should be 679px x 829px
      price: 38,
      countInStock: 0,
      brand: 'Brufen',
      rating: 4.5,
      numReviews: 10,
      description:
        'Asprin - an organic chemical compound, a non-steroidal anti-inflammatory drug, a derivative of propionic acid with anti-inflammatory, analgesic and antipyretic properties',
    },
    {
      // _id: '3',
      name: 'Ibuprofen',
      slug: 'advil1-otc',
      category: 'Pain Killers',
      image: '/images/p1.jpg',
      price: 48,
      countInStock: 5,
      brand: 'Brufen',
      rating: 4.5,
      numReviews: 10,
      description:
        'Ibuprofen - an organic chemical compound, a non-steroidal anti-inflammatory drug, a derivative of propionic acid with anti-inflammatory, analgesic and antipyretic properties',
    },
    {
      // _id: '4',
      name: 'Ibuprofens',
      slug: 'advil2-otc',
      category: 'Pain Killers',
      image: '/images/p1.jpg',
      price: 48,
      countInStock: 5,
      brand: 'Brufen',
      rating: 4.5,
      numReviews: 10,
      description:
        'Ibuprofen - an organic chemical compound, a non-steroidal anti-inflammatory drug, a derivative of propionic acid with anti-inflammatory, analgesic and antipyretic properties',
    },
  ],
};
export default data;
