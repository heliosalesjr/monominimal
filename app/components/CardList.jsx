// components/Cards/CardList.jsx

import CustomCard from './ui/CustomCard';

export default function CardList() {
  // Exemplo de dados para os cards
  const cardData = [
    {
      image: '/min1.jpg',
      title: 'Mono',
      description: 'Texto curto do card 1, que fornece uma breve descrição ou informação.',
      tags: ['Design', 'Lifestyle'],
    },
    {
      image: '/min2.jpg',
      title: 'Minimal',
      description: 'Texto curto do card 2, que fornece uma breve descrição ou informação.',
      tags: ['Lifestyle', 'Feel good'],
    },
    {
      image: '/min3.jpg',
      title: 'Life',
      description: 'Texto curto do card 3, que fornece uma breve descrição ou informação.',
      tags: ['Simple', 'Things'],
    },
  ];

  return (
    <div className="flex items-center justify-center ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-16">
        {cardData.map((card, index) => (
          <CustomCard
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            tags={card.tags}
          />
        ))}
      </div>
    </div>
  );
}
