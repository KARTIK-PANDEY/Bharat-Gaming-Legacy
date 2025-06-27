
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface GameCardProps {
  name: string;
  description: string;
  url: string;
  image: string;
}

const GameCard = ({ name, description, url, image }: GameCardProps) => {
  const handleClick = () => {
    window.open(url, '_blank');
  };

  return (
    <Card 
      className="group cursor-pointer transition-all duration-300 hover:shadow-lg bg-white border border-gray-200 hover:border-gray-300 overflow-hidden"
      onClick={handleClick}
    >
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors line-clamp-1">
            {name}
          </h3>
          <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0 ml-2" />
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default GameCard;
