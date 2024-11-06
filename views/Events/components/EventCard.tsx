// components/EventCard.tsx
interface EventCardProps {
  title: string;
  date: string;
  image: string;
  description: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  image,
  description,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-72 object-cover" />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-purple-900">{title}</h2>
        <p className="text-gray-500 mb-2">{date}</p>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default EventCard;
