"use client";

import { useState } from "react";
import { Button } from "@/app/components/UI/Button";
import { Input } from "@/app/components/UI/Input";
import { Textarea } from "@/app/components/UI/Textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/UI/Card";
import { Label } from "@/app/components/UI/Label";
import { RadioGroup } from "@/app/components/UI/RadioGroup";
import placeholder from "@/app/lib/trump.character.json";
interface CharacterForm {
  name: string;
  clients: string[];
  modelProvider: string;
  bio: string[];
  lore: string[];
  knowledge: string[];
  postExamples: string[];
  topics: string[];
  style: {
    all: string[];
    chat: string[];
    post: string[];
  };
  adjectives: string[];
  messageExamples: { user: string; content: { text: string } }[][];
}

function Deploy() {
  const modelOptions = [
    { value: "openai", label: "OpenAI" },
    { value: "anthropic", label: "Anthropic" },
    { value: "google", label: "Google" },
  ];

  const [formData, setFormData] = useState<CharacterForm>({
    name: "",
    clients: ["direct"],
    modelProvider: "openai",
    bio: [""],
    lore: [""],
    knowledge: [""],
    postExamples: [""],
    topics: [""],
    style: {
      all: [],
      chat: [],
      post: [],
    },
    adjectives: [],
    messageExamples: [],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement deployment logic
    console.log("Deploying character:", formData);
  };
  const labelStyle = "block font-medium text-lg text-gray-700 dark:text-gray-300 mb-2";

  return (
    <div className="container mx-auto py-8">
      <Card className="border-none">
        <CardHeader>
          <CardTitle>Deploy New Character</CardTitle>
          <CardDescription>
            Create and deploy your own AI character with custom personality and
            traits
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className={labelStyle}>Character Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  className="bg-transparent"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder={placeholder.name}
                />
              </div>

              <div>
                <RadioGroup
                  label="Model Provider"
                  options={modelOptions}
                  value={formData.modelProvider}
                  onChange={(value: string) =>
                    setFormData({ ...formData, modelProvider: value })
                  }
                />
              </div>

              {/* Character Background */}
              <div>
                <Label htmlFor="bio" className={labelStyle}>Character Bio</Label>
                <Textarea
                  id="bio"
                  className="bg-transparent"
                  value={formData.bio.join("\n")}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setFormData({
                      ...formData,
                      bio: e.target.value
                        .split("\n")
                        .filter((line: string) => line.trim()),
                    })
                  }
                  placeholder={placeholder.bio.join("\n")}
                  rows={8}
                />
              </div>

              <div>
                <Label htmlFor="lore" className={labelStyle}>Character Lore</Label>
                <Textarea
                  id="lore"
                  className="bg-transparent"
                  value={formData.lore.join("\n")}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setFormData({
                      ...formData,
                      lore: e.target.value
                        .split("\n")
                        .filter((line: string) => line.trim()),
                    })
                  }
                  placeholder={placeholder.lore.join("\n")}
                  rows={8}
                />
              </div>

              {/* Character Traits */}
              <div>
                <Label htmlFor="knowledge" className={labelStyle}>Knowledge & Skills</Label>
                <Textarea
                  id="knowledge"
                  className="bg-transparent"
                  value={formData.knowledge.join("\n")}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setFormData({
                      ...formData,
                      knowledge: e.target.value
                        .split("\n")
                        .map((item) => item.trim()),
                    })
                  }
                  placeholder={placeholder.knowledge.join("\n")}
                  rows={8}
                />
              </div>

              <div>
                <Label htmlFor="postExamples" className={labelStyle}>Post Examples</Label>
                <Textarea
                  id="postExamples"
                  className="bg-transparent"
                  value={formData.postExamples.join("\n")}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setFormData({
                      ...formData,
                      postExamples: e.target.value
                        .split("\n")
                        .filter((line: string) => line.trim()),
                    })
                  }
                  placeholder={placeholder.postExamples.join("\n")}
                  rows={12}
                />
              </div>
              <div>
                <Label htmlFor="topics" className={labelStyle}>Topics</Label>
                <Textarea
                  id="topics"
                  className="bg-transparent"
                  value={formData.topics.join("\n")}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setFormData({
                      ...formData,
                      topics: e.target.value
                        .split(",")
                        .map((item: string) => item.trim()),
                    })
                  }
                  placeholder={placeholder.topics.join(", ")}
                />
              </div>
              <div>
                <div>
                  <Label htmlFor="styleAll" className={labelStyle}>Style-ALL(line-by-line)</Label>
                  <Textarea
                    id="styleAll"
                    className="bg-transparent"
                    value={formData.style.all.join("\n")}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                      setFormData({
                        ...formData,
                        style: {
                          ...formData.style,
                          all: e.target.value
                            .split("\n")
                            .filter((line: string) => line.trim()),
                        },
                      })
                    }
                    placeholder={placeholder.style.all.join("\n")}
                    rows={15}
                  />
                </div>

                <div>
                  <Label htmlFor="styleChat" className={labelStyle}>Style-CHAT(line-by-line)</Label>
                  <Textarea
                    id="styleChat"
                    className="bg-transparent"
                    value={formData.style.chat.join("\n")}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                      setFormData({
                        ...formData,
                        style: {
                          ...formData.style,
                          chat: e.target.value
                            .split("\n")
                            .filter((line: string) => line.trim()),
                        },
                      })
                    }
                    placeholder={placeholder.style.chat.join("\n")}
                    rows={15}
                  />
                </div>

                <div>
                  <Label htmlFor="stylePost" className={labelStyle}>Style-POST(line-by-line)</Label>
                  <Textarea
                    id="stylePost"
                    className="bg-transparent"
                    value={formData.style.post.join("\n")}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                      setFormData({
                        ...formData,
                        style: {
                          ...formData.style,
                          post: e.target.value
                            .split("\n")
                            .filter((line: string) => line.trim()),
                        },
                      })
                    }
                    placeholder={placeholder.style.post.join("\n")}
                    rows={15}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="adjectives" className={labelStyle}>
                  Character Adjectives(comma-separated)
                </Label>
                <Textarea
                  id="adjectives"
                  className="bg-transparent"
                  value={formData.adjectives.join(",")}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setFormData({
                      ...formData,
                      adjectives: e.target.value
                        .split(",")
                        .map((item: string) => item.trim()),
                    })
                  }
                  placeholder={placeholder.adjectives.join(", ")}
                  rows={5}
                />
              </div>
              <div>
                <Label htmlFor="messageExamples" className={labelStyle}>Message Examples</Label>
                <Textarea
                  id="messageExamples"
                  className="bg-transparent" 
                  value={formData.messageExamples?.map(example => 
                    example.map(msg => 
                      `${msg.user}: ${msg.content.text}`
                    ).join('\n')
                  ).join('\n\n')}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setFormData({
                      ...formData,
                      messageExamples: e.target.value
                        .split('\n\n')
                        .map(example => 
                          example.split('\n')
                            .map(line => {
                              const [user, ...contentParts] = line.split(': ');
                              return {
                                user,
                                content: {
                                  text: contentParts.join(': ')
                                }
                              };
                            })
                        )
                        .filter(example => example.length > 0)
                    })
                  }
                  placeholder={placeholder.messageExamples?.map(example =>
                    example.map(msg =>
                      `${msg.user}: ${msg.content.text}`
                    ).join('\n')
                  ).join('\n\n')}
                  rows={15}
                />
              </div>
            </div>

            <Button type="submit" className="bg-blue-800 text-white">
              Deploy Character
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Deploy;
