import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Gamepad2, Rocket, Shuffle, Sparkles, Trophy, Zap } from "lucide-react";
import { useState } from "react";
import ancientGames from "./ancientGames";
import futureGames from "./futureGames";
import modernGames from "./mordenGames";
import Header from "./Header";
const GameCard = ({ name, description, url, image, category }) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-yellow-100/20 to-orange-100/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div
          className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${
            category === "ancient"
              ? "bg-amber-600/80 text-white"
              : category === "modern"
              ? "bg-orange-600/80 text-white"
              : "bg-yellow-600/80 text-white"
          }`}
        >
          {category === "ancient"
            ? "Ancient"
            : category === "modern"
            ? "Modern"
            : "Future"}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#4E342E] mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#FF6F00] group-hover:to-[#2E7D32] group-hover:bg-clip-text transition-all duration-300">
          {name}
        </h3>
        <p className="text-[#4E342E] text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Play button */}
        <Button
          onClick={() => window.open(url, "_blank")}
          className="w-full bg-gradient-to-r from-[#FF6F00] to-[#2E7D32] hover:from-[#E65100] hover:to-[#1B5E20] text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/50 group-hover:scale-105"
        >
          <Gamepad2 className="mr-2 h-4 w-4" />
           Watch
        </Button>
      </div>

      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500 -z-10"></div>
    </div>
  );
};


const Index = () => {
  const [currentTab, setCurrentTab] = useState("ancient");
  const allGames = [...ancientGames, ...modernGames, ...futureGames];

  const getRandomGame = () => {
    const randomGame = allGames[Math.floor(Math.random() * allGames.length)];
    window.open('https://www.crazygames.com/c/adventure');
  };

  const getCurrentGames = () => {
    switch (currentTab) {
      case "ancient":
        return ancientGames;
      case "modern":
        return modernGames;
      case "future":
        return futureGames;
      default:
        return ancientGames;
    }
  };

  const getTabIcon = (tab) => {
    switch (tab) {
      case "ancient":
        return <Clock className="h-5 w-5" />;
      case "modern":
        return <Zap className="h-5 w-5" />;
      case "future":
        return <Rocket className="h-5 w-5" />;
      default:
        return <Clock className="h-5 w-5" />;
    }
  };

  return (
    <>
      {/* Hero Section - Replaces the old <Header /> */}
      <div className="bg-gradient-to-br from-[#FF9933] via-[#ffffff] to-[#138808]">
        <div className="h-[50vh] w-full  flex items-center justify-center text-center px-4 relative z-20">
          <div className="bg-white/80 backdrop-blur-md p-6 md:p-10 rounded-3xl shadow-2xl border-4 border-[#800000] max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#800000] mb-4">
              🇮🇳 Bharat Gaming 🇮🇳
            </h1>
            <p className="text-xl md:text-2xl text-[#1A237E] font-medium">
              A timeless celebration of India's gaming heritage!
            </p>
            <a
              href="#main-content"
              className="mt-6 inline-block text-[#1A237E] font-semibold text-lg hover:opacity-80 transition duration-300"
            >
              ↓ Explore the Legacy
            </a>
          </div>
        </div>

        <div className="min-h-[calc(100vh-50vh)]  relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>

          {/* Header with Trophy and Button */}
          <header className="relative z-10 backdrop-blur-xl border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-r from-[#FF6F00] to-[#2E7D32] rounded-2xl shadow-lg">
                      <Trophy className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FF6F00] via-[#000000] to-[#2E7D32] bg-clip-text text-transparent">
                        Indian Games Legacy
                      </h1>
                      <p className="text-[#4E342E] text-lg mt-1 flex items-center">
                        <Sparkles className="h-4 w-4 mr-2 text-[#FFAB00]" />
                        Discover India's rich gaming heritage
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={getRandomGame}
                  className="bg-green-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 text-lg"
                >
                  <Shuffle className="mr-3 h-5 w-5" />
                  Random Adventure
                </Button>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main
            id="main-content"
            className="relative z-10 max-w-7xl mx-auto px-4 py-12"
          >
            <Tabs
              value={currentTab}
              onValueChange={setCurrentTab}
              className="w-full"
            >
              <TabsList
                className="grid w-full grid-cols-3 bg-white/10 backdrop-blur-xl rounded-2xl m-12 shadow-2xl"
                style={{ height: "60px" }}
              >
                <TabsTrigger
                  value="ancient"
                  className="text-base font-semibold py-4 px-8 rounded-xl transition-all duration-300 
    data-[state=active]:bg-[#FF9933] 
    data-[state=active]:text-white 
    data-[state=active]:shadow-md 
    text-[#4E342E] hover:text-[#FF6F00] flex items-center space-x-2"
                >
                  {getTabIcon("ancient")}
                  <span>Ancient Era</span>
                </TabsTrigger>

                <TabsTrigger
                  value="modern"
                  className="text-base font-semibold py-4 px-8 rounded-xl transition-all duration-300 
    data-[state=active]:bg-white 
    data-[state=active]:text-[#1A237E] 
    data-[state=active]:shadow-md 
    text-[#4E342E] hover:text-[#1A237E] flex items-center space-x-2"
                >
                  {getTabIcon("modern")}
                  <span>Modern Gaming</span>
                </TabsTrigger>

                <TabsTrigger
                  value="future"
                  className="text-base font-semibold py-4 px-8 rounded-xl transition-all duration-300 
    data-[state=active]:bg-[#138808] 
    data-[state=active]:text-white 
    data-[state=active]:shadow-md 
    text-[#4E342E] hover:text-[#2E7D32] flex items-center space-x-2"
                >
                  {getTabIcon("future")}
                  <span>Future Tech</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="ancient" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {ancientGames.map((game, index) => (
                    <div
                      key={index}
                      className="animate-in fade-in slide-in-from-bottom-4 duration-700"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <GameCard {...game} />
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="modern" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {modernGames.map((game, index) => (
                    <div
                      key={index}
                      className="animate-in fade-in slide-in-from-bottom-4 duration-700"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <GameCard {...game} />
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="future" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {futureGames.map((game, index) => (
                    <div
                      key={index}
                      className="animate-in fade-in slide-in-from-bottom-4 duration-700"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <GameCard {...game} />
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </main>

          {/* Footer glow */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        </div>
      </div>
    </>
  );
  
};

export default Index;