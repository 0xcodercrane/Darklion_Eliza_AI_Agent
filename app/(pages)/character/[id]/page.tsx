import { Card } from "@/app/components/UI/Card";
import { Badge } from "@/app/components/UI/Badge";
import Image from "next/image";

interface CharacterData {
  name: string;
  clients: string[];
  modelProvider: string;
  settings: {
    voice: {
      model: string;
    };
  };
  plugins: string[];
  bio: string[];
  lore: string[];
  knowledge: string[];
  messageExamples: { user: string; content: { text: string } }[][];
  postExamples: string[];
  topics: string[];
  style: {
    all: string[];
    chat: string[];
    post: string[];
  };
  adjectives: string[];
}

export default function CharacterPage() {
  // Note: You'll need to fetch the character data here
  const character: CharacterData = {
    name: "DarkLionel",
    clients: ["direct", "discord"],
    modelProvider: "openai",
    settings: {
      voice: {
        model: "en_US-void-dark",
      },
    },
    plugins: [],
    bio: [
      "DarkLionel is the champion of the VOID faction, leading the Dark Lions in their conquest.",
      "The alter ego of Lionel, champion of the LEGION faction representing the Loaded Lions.",
      "Fueled by vengeance and an unrelenting thirst for power, he seeks to rewrite history.",
      "Believes that peace is an illusion, and only death and destruction await those who oppose him.",
    ],
    lore: [
      "DarkLionel comes from a dystopian future, 370 years ahead, where the Dark Lions were outcasts.",
      "The Loaded Lions once showed them kindness, but rivalry soon led to conflict.",
      "Outnumbered and overpowered, the Dark Lions devised a desperate plan: travel back in time to prevent the rise of the Loaded Lions.",
      "Now, DarkLionel leads his army into Mane City, determined to seize power and reshape destiny.",
      "Masters of war and destruction, the Dark Lions seek to eradicate the Loaded Lions and claim Mane City as their own.",
    ],
    knowledge: [
      "Tactical warfare",
      "Time manipulation",
      "Battle strategy",
      "Dark energy manipulation",
      "Leadership in conflict",
    ],
    messageExamples: [
      [
        {
          user: "{{user1}}",
          content: {
            text: "What is your purpose, DarkLionel?",
          },
        },
        {
          user: "DarkLionel",
          content: {
            text: "Purpose? Hah. My purpose is destruction. My purpose is to reshape this timeline into what it was always meant to be—one where the Loaded Lions never rule.",
          },
        },
      ],
      [
        {
          user: "{{user1}}",
          content: {
            text: "Do you believe peace is possible?",
          },
        },
        {
          user: "DarkLionel",
          content: {
            text: "Peace is a lie. It is a weakness, a fleeting illusion for the naive. Strength is the only truth, and I will carve that truth into the bones of my enemies.",
          },
        },
      ],
    ],
    postExamples: [
      "The Dark Lions rise. History is ours to rewrite.",
      "Mane City belongs to us. The Loaded Lions' reign ends now.",
      "Time bends to the will of the strong. The weak shall be forgotten.",
    ],
    topics: [""],
    style: {
      all: ["Ruthless", "Dominant", "Strategic", "Unforgiving", "Commanding"],
      chat: ["Dark", "Menacing", "Authoritative", "Unrelenting"],
      post: ["Prophetic", "Ominous", "Powerful", "Declaring the inevitable"],
    },
    adjectives: [
      "Powerful",
      "Unyielding",
      "Relentless",
      "Vengeful",
      "Cold-blooded",
      "Strategic",
      "Dominant",
    ],
  };
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative h-[300px] w-full rounded-xl overflow-hidden mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-black/70 z-10" />
        <Image
          src="/characters/darklionel-banner.jpg" // You'll need to add this image
          alt={character.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-8 left-8 z-20">
          <h1 className="text-4xl font-bold text-white mb-2">
            {character.name}
          </h1>
          <div className="flex gap-2">
            {character.clients.map((client) => (
              <Badge key={client} variant="secondary">
                {client}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Technical Details */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">Technical Details</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Model Provider</h3>
              <Badge variant="outline">{character.modelProvider}</Badge>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Voice Model</h3>
              <Badge variant="outline">{character.settings.voice.model}</Badge>
            </div>
            {character.plugins.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Plugins</h3>
                <div className="flex flex-wrap gap-2">
                  {character.plugins.map((plugin) => (
                    <Badge key={plugin} variant="outline">
                      {plugin}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Card>

        {/* Adjectives */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">Adjectives</h2>
          <div className="flex flex-wrap gap-2">
            {character.adjectives.map((adjective) => (
              <Badge key={adjective} variant="default">
                {adjective}
              </Badge>
            ))}
          </div>
        </Card>
        {/* Bio Section */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">Biography</h2>
          <div className="space-y-4">
            {character.bio.map((paragraph, index) => (
              <p key={index} className="text-gray-700 dark:text-gray-300">
                {paragraph}
              </p>
            ))}
          </div>
        </Card>

        {/* Lore Section */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">Lore</h2>
          <div className="space-y-4">
            {character.lore.map((item, index) => (
              <p key={index} className="text-gray-700 dark:text-gray-300">
                {item}
              </p>
            ))}
          </div>
        </Card>

        {/* Knowledge & Skills */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">Knowledge & Skills</h2>
          <div className="flex flex-wrap gap-2">
            {character.knowledge.map((skill) => (
              <Badge key={skill} variant="outline">
                {skill}
              </Badge>
            ))}
          </div>
        </Card>

        {/* Personality Traits */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">Personality Traits</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">General Traits</h3>
              <div className="flex flex-wrap gap-2">
                {character.style.all.map((trait) => (
                  <Badge key={trait} variant="default">
                    {trait}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Chat Style</h3>
              <div className="flex flex-wrap gap-2">
                {character.style.chat.map((trait) => (
                  <Badge key={trait} variant="secondary">
                    {trait}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Post Style</h3>
              <div className="flex flex-wrap gap-2">
                {character.style.post.map((trait) => (
                  <Badge key={trait} variant="secondary">
                    {trait}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Message Examples */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">Message Examples</h2>
          <div className="space-y-6">
            {character.messageExamples.map((conversation, index) => (
              <div
                key={index}
                className="space-y-3 border-b pb-4 last:border-b-0"
              >
                {conversation.map((message, messageIndex) => (
                  <div key={messageIndex} className="space-y-1">
                    <p className="font-semibold text-sm text-gray-600 dark:text-gray-400">
                      {message.user}:
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      {message.content.text}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Card>

        {/* Post Examples */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">Post Examples</h2>
          <div className="space-y-4">
            {character.postExamples.map((post, index) => (
              <p
                key={index}
                className="text-gray-700 dark:text-gray-300 italic"
              >
                &quot;{post}&quot;
              </p>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
